import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState } from "react";
import BookingAdmin from "../../components/Admin/bookingAdmin";
import { Navbar } from '../../components/Navbar/Navbar';
import { BN_Navbar } from '../../components/Navbar/BN_Navbar';
import { getAllBookings } from '../../services/admin.service';



import { IBookingResponse } from "../../models/BookingResponseJS";
import { AdminService } from "../../services/admin.service";
import { IGuestById, IAllGuests, IUpdateGuest} from "../../models/GuestById";
import { IUpdateBooking } from "../../models/UpdateBooking";

//BN
import CleanerAdmin from "../../components/Admin/RN_cleanerAdmin";
import { BN_AdminService } from "../../services/BN_admin.service";
import "./BN_Admin.scss";
import { ICleaners, INewCleaners} from "../../models/RN_Cleaners";


import useModal from "../../hooks/useModal";
import Modal from "../../components/Admin/bookingModal";


//start
const updatetBookingData ={
"guestName":"",
"guestEmail":"",
"guestPhoneNum":"",
"reservationDate": "",
"reservationTime": "18:00",
"partySize": 2,
"tableNumber": 1,
"statusForTable": "FIRST_SITTING",
"_id": "",
"guest": {
    "_id":"",
    "guestName": "",
    "guestEmail": "",
    "guestPhoneNum": ""}
}


export default function BN_AdminCleaner (){
const [searchText, setSearchText] = useState("");
const [searchDate, setSearchDate] = useState("");
const [showError, setShowError] = useState(false);


const [bookings, setBookings] = useState<IBookingResponse[]>([]);
const [bookingSearch, setBookingSearch] = useState<IBookingResponse[]>([]);
const [guestByIdName, setGuestByIdName] = useState("")
const [updateBooking, setUpdateBooking] = useState("")
const [guests, setGuests] = useState<IAllGuests[]>([]);

//BN
const [cleaners, setCleaners] = useState<ICleaners[]>([]);
//const [cleaners, setCleaners] = useState([]);

const [inputs, setInputs] = useState<IUpdateBooking> (updatetBookingData);


const adminService = new AdminService();

//RN
const bn_AdminService = new BN_AdminService ();


const { isOpen, toggle } = useModal();

//RN
const getAllCleaners = async () => {
    const cleaner = await bn_AdminService.getAllCleaners();
    setCleaners(cleaner);
    console.log(cleaners);
    };

const getBookings = async () => {
const bookings= await getAllBookings();
setBookings(bookings);
//setBookingSearch(bookings);
console.log(bookings);
console.log(bookings[0].guest.guestName);
};


const getAllGuests = async () => {
const guests= await adminService.getAllGuests();
setGuests(guests);
console.log(guests);
};


//Test move to API
const getGuestById = async (id:string) => {
const result = await adminService.getGuestById(id);
setGuestByIdName(result.guestName);
console.log(result.guestName);
const temp:string = result.guestName
return(temp)
};


const deleteBooking = async (id:string) => {
const response = await adminService.deleteBooking(id);
alert("You have deleted a booking!")
handleSearchDate();
console.log(bookings);
};


const openModalBooking = async (inputs:IUpdateBooking) => {
setInputs(values => ({...values, "reservationDate": inputs.reservationDate}))
setInputs(values => ({...values, "reservationTime": inputs.reservationTime}))
setInputs(values => ({...values, "statusForTable": inputs.statusForTable}))
setInputs(values => ({...values, "partySize": inputs.partySize}))
setInputs(values => ({...values, "tableNumber": inputs.tableNumber}))
setInputs(values => ({...values, "_id": inputs._id}))
toggle()
console.log(inputs)
//editBooking(inputs)
};


const editBooking = async (inputs:IUpdateBooking) => {
const response = await adminService.updateBooking(inputs);
setUpdateBooking(response);
handleSearchDate();
console.log(response);
};


const deleteGuest = async (id:string) => {
const response = await adminService.deleteGuest(id);
alert("You have deleted a guest!")
handleSearchDate();
console.log(bookings);
getAllGuests()
};


const editGuest = async (id:string) => {
const response = await adminService.updateBooking(updatetBookingData);
setUpdateBooking(response);
handleSearchDate();
console.log(response);
};


const handleSearchDate = async () => {
if (searchDate === "") {
//setShowError(true);
setBookingSearch([]);


} else {
const dateTempSearch = new Date (searchDate);
const dateFormatTempSearch = dateTempSearch.getFullYear()+"-"+ (dateTempSearch.getMonth()+1)+"-"+dateTempSearch.getDate();
//console.log(dateFormatTempSearch)
const bookings= await getAllBookings();
console.log(bookings)
const tempSearch = bookings.filter(bookings =>
((new Date (bookings.reservationDate)).getFullYear()+"-"+ ( (new Date (bookings.reservationDate)).getMonth()+1)+"-"+
(new Date (bookings.reservationDate)).getDate()) == dateFormatTempSearch
);
setBookingSearch(tempSearch);
console.log(tempSearch)
}
};


const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
setSearchDate(e.target.value);
//console.log(e.target.value)
//console.log(searchDate)
};


const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
const name = e.target.name;
const value = e.target.value;
setInputs(values => ({...values, [name]: value}))
};

const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
e.preventDefault();
console.log(inputs);

if (inputs.partySize > 90) {
    alert ("You tried to book "+inputs.partySize+". Maximum number of seats in one sitting is 90." + 
    " You are in the Admin tool so please be aware that you can override bookings. Check available bookings in the Serach above.")
    inputs.partySize = 6
    setInputs(values => ({...values,"partySize": 6}))
};
    
if (inputs.reservationTime === "21:00") {
    inputs.statusForTable ="SECOND_SITTING"}

else if (inputs.reservationTime === "18:00") {
    inputs.statusForTable ="FIRST_SITTING"
}

else {
    inputs.statusForTable ="FIRST_SITTING"
    alert ("You tried to book a sitting at "+inputs.reservationTime+". The bookings are at 18:00 or 21:00.")};
    setInputs(values => ({...values,"reservationTime": "18:00"}));
    setInputs(values => ({...values,"statusForTable": "FIRST_SITTING"}));

    
editBooking(inputs);
console.log(inputs)
alert ("You updated the booking: "+inputs.reservationDate+", " +inputs.reservationTime+", with party size " 
+inputs.partySize+".")
}

// Bookins serached on date
const listItems = bookingSearch.map((bookingSearch2, index) => (
<div className = "bookinItems" key={(bookingSearch2._id).toString()} >
<li className = "listItem">
<span className = "item">
<b> Date: </b>&nbsp;{bookingSearch2.reservationDate} &nbsp;
<b> Time: </b>&nbsp;{bookingSearch2.reservationTime} &nbsp;
<b> Party of: </b> &nbsp; {bookingSearch2.partySize} &nbsp;
<b> Name: </b> &nbsp; {bookingSearch[index].guest.guestName} &nbsp;




<span className = "itemButtonGroup">
<button className = "itemButton" onClick={() => deleteBooking((bookingSearch2._id).toString())}>Delete</button>
<button className = "itemButton" onClick={() => openModalBooking(bookingSearch2)}>Update</button>
</span>
</span>
</li>
</div>));


//All bookings
const bookingItems = bookings.map((bookingSearch, index) => (
<div className = "bookinItems" key={(bookingSearch._id.toString())} >
<li className = "listItem">
<span className = "item">
<b> Date: </b>&nbsp;{bookingSearch.reservationDate} &nbsp;
<b> Time: </b>&nbsp;{bookingSearch.reservationTime} &nbsp;
<b> Party of: </b> &nbsp; {bookingSearch.partySize} &nbsp;
<b> Name: </b> &nbsp; {bookings[index].guest.guestName} &nbsp;


<span className = "itemButtonGroup">
<button className = "itemButton" onClick={() => deleteBooking((bookingSearch._id).toString())}>Delete</button>
<button className = "itemButton" onClick={() => openModalBooking(bookingSearch)}>Update</button>
</span>
</span>
</li>
</div>));


//All guests
const guestItems = guests.map((guest) => (
<div className = "bookinItems" key={(guest._id.toString())} >
<li className = "listItem">
<p className = "item">
<b> Name: </b>&nbsp;{guest.guestName} &nbsp;
<b> Mail: </b>&nbsp;{guest.guestEmail} &nbsp;
<b> Phone: </b> &nbsp; {guest.guestPhoneNum} &nbsp;


<button className = "itemButton" onClick={() => deleteGuest((guest._id).toString())}>Delete</button>
</p>
</li>
</div>));

//RN All Cleaners
const cleanerItems = cleaners.map((cleaners) => (
    <div className = "bookinItems" key={(cleaners._id.toString())} >
    <li className = "listItem">
    <p className = "item">
    <b> Name: </b>&nbsp;{cleaners.cleanerName} &nbsp;
    <b> Phone: </b>&nbsp;{cleaners.cleanerPhone} &nbsp;
    <b> Contact: </b> &nbsp; {cleaners.cleanerContact} &nbsp;
    <b> User Name: </b> &nbsp; {cleaners.cleanerUserName} &nbsp;
    <b> Password: </b> &nbsp; {cleaners.cleanerPassword} &nbsp;
    <b> Prize: </b> &nbsp; {cleaners.cleanerPrize} &nbsp;
    
    
    <button className = "itemButton" onClick={() => bn_AdminService.deleteCleaner((cleaners._id).toString())}>Delete</button>
    </p>
    </li>
    </div>));

return (
<>


<BN_Navbar></BN_Navbar>


<Modal isOpen={isOpen} toggle={toggle}>

<button type="button" className="modal-close-button" aria-label="Close" onClick={toggle}>
<span aria-hidden="true">&times;</span>
</button>

<form onSubmit ={handleSubmit}>
<h2>Admin | update cleaner</h2>

<label> Date:&nbsp;
<input
className="input"
type ="date"
value = {inputs.reservationDate}
name="reservationDate"
placeholder="Reservation date..."
required
onChange = {handleChange}/>
</label>

<label> Time:&nbsp;
<input
className="input"
type ="text"
value = {inputs.reservationTime}
name="reservationTime"
placeholder="Reservation time..."
required
onChange = {handleChange}/>
</label>

<label>
<input
className="input"
type ="hidden"
value = {999}
name="statusForTable"
placeholder="Status for table..."
required
onChange = {handleChange}/>
</label>

<label> Party #:&nbsp;
<input
className="input"
type ="number"
value = {inputs.partySize}
name="partySize"
placeholder="Party size..."
required
pattern="[0-9]*"
onChange = {handleChange}/>
</label>

<button
type="submit">Update</button>
</form>
</Modal>



<div className="wrapper">
<h2>List Cleaners</h2>

<button className = "searchButton" onClick={getAllCleaners}>List</button>
<br></br>
<br></br>
{cleanerItems}
<br></br>

</div>
<CleanerAdmin></CleanerAdmin>
</>
);

};

