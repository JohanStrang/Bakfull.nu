import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState } from "react";
import { BN_Navbar } from '../../components/Navbar/BN_Navbar';
import CleanerAdmin from "../../components/Admin/RN_cleanerAdmin";
import { BN_AdminService } from "../../services/BN_admin.service";
import "./BN_Admin.scss";
import { ICleaners, INewCleaners} from "../../models/RN_Cleaners";

import useModal from "../../hooks/useModal";
import Modal from "../../components/Admin/bookingModal";

const startCleaner:ICleaners = {
    "_id":"",
    "cleanerName": "",
    "cleanerAddress": "",
    "cleanerPostalCode": "",
    "cleanerCity": "",
    "cleanerPhone": "",
    "cleanerURL": "",
    "cleanerContact": "",
    "cleanerDescription": "",
    "cleanerPrize": 0,
    "cleanerUserName": "",
    "cleanerPassword": "",
    }

export default function BN_AdminCleaner (){
const [searchDate, setSearchDate] = useState("");
const [showError, setShowError] = useState(false);
const [updateCleaner, setUpdateCleaner] = useState("")
const [cleaners, setCleaners] = useState<ICleaners[]>([]);
const [inputs, setInputs] = useState<ICleaners> (startCleaner);

const bn_AdminService = new BN_AdminService ();

const { isOpen, toggle } = useModal();

//Get All Cleaners
const getAllCleaners = async () => {
    const cleaner = await bn_AdminService.getAllCleaners();
    setCleaners(cleaner);
    console.log(cleaners);
    };


//Handle Values in Edit
const openModalBooking = async (inputs:ICleaners) => {
    setInputs(values => ({...values,"_id": inputs._id}));
    setInputs(values => ({...values,"cleanerName": inputs.cleanerName}));
    setInputs(values => ({...values,"cleanerAddress": inputs.cleanerAddress}));
    setInputs(values => ({...values,"cleanerPostalCode": inputs.cleanerPostalCode}));
    setInputs(values => ({...values,"cleanerCity": inputs.cleanerCity}));
    setInputs(values => ({...values,"cleanerPhone": inputs.cleanerPhone}));
    setInputs(values => ({...values,"cleanerURL": inputs.cleanerURL}));
    setInputs(values => ({...values,"cleanerDescription": inputs.cleanerDescription}));
    setInputs(values => ({...values,"cleanerContact": inputs.cleanerContact}));
    setInputs(values => ({...values,"cleanerPrize": inputs.cleanerPrize}));
    setInputs(values => ({...values,"cleanerUserName": inputs.cleanerUserName}));
    setInputs(values => ({...values,"cleanerPassword": inputs.cleanerPassword}));
toggle()
};


const editCleaner = async (inputs:ICleaners) => {
const response = await bn_AdminService.updateCleaners(inputs);
setUpdateCleaner(response);
getAllCleaners();
toggle()
};

const deleteCleanerLocal = async (cleanerId:string) => {
    const response = bn_AdminService.deleteCleaner((cleanerId));
    getAllCleaners()
    };


const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
const name = e.target.name;
const value = e.target.value;
setInputs(values => ({...values, [name]: value}))
};

const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
e.preventDefault();
console.log(inputs);

editCleaner(inputs);
console.log(inputs)
}


//List All Cleaners in Table
const cleanerItemsTable = cleaners.map((cleaners) => (
    <div className = "bookinItems" key={(cleaners._id.toString())} >
    <li className = "listItem">
    <table>
  <thead>
    <tr>
        <th>Name</th>
        <th>Adress</th>
        <th>Contact</th>
        <th>Phone</th>
        <th>Service</th>
        <th>Prize</th>
        <th> </th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>{cleaners.cleanerName}</td>
        <td>{cleaners.cleanerAddress} &nbsp; {cleaners.cleanerCity} </td>
        <td>{cleaners.cleanerContact}</td>
        <td>{cleaners.cleanerPhone} </td>
        <td>{cleaners.cleanerDescription}</td>
        <td>{cleaners.cleanerPrize} </td>
        <td>
         <span className = "itemButtonGroup">
            <button className = "itemButton" onClick={() => deleteCleanerLocal((cleaners._id).toString())}>Delete</button>
            <button className = "itemButton" onClick={() => openModalBooking(cleaners)}>Update</button>
        </span>
    </td>
    </tr>
  </tbody>
</table>


    </li>
    </div>));



return (
<>


<BN_Navbar></BN_Navbar>

<Modal isOpen={isOpen} toggle={toggle}>

<button type="button" className="modal-close-button" aria-label="Close" onClick={toggle}>
<span aria-hidden="true">&times;</span>
</button>

<form className="formModal" onSubmit ={handleSubmit}>

<div className="row">
<div className="column">

<input
className="input"
type ="hidden"
value = {inputs._id}
name="_id"
required
onChange = {handleChange}/>


<label> Cleaner:&nbsp;
<input
className="input"
placeholder='Cleaner name...'
type ="text"
value = {inputs.cleanerName}
name="cleanerName"
required
onChange = {handleChange}/>
</label>

<input
className="input"
type ="text"
placeholder='Adress...'
value = {inputs.cleanerAddress}
name="cleanerAddress"
required
onChange = {handleChange}/>

<input
className="input"
type ="text"
placeholder='Postal code...'
value = {inputs.cleanerPostalCode}
name="cleanerPostalCode"
required
onChange = {handleChange}/>


<input
className="input"
type ="text"
placeholder='City...'
value = {inputs.cleanerCity}
name="cleanerCity"
required
onChange = {handleChange}/>

<input
className="input"
type ="text"
placeholder='Phone...'
value = {inputs.cleanerPhone}
name="cleanerPhone"
required
onChange = {handleChange}/>

<label> Home page:&nbsp;
<input
className="input"
type ="text"
value = {inputs.cleanerURL}
placeholder='Home page...'
name="cleanerURL"
required
onChange = {handleChange}/>
</label>

<label> Contact person:&nbsp;
<input
className="input"
type ="text"
placeholder='Contact person...'
value = {inputs.cleanerContact}
name="cleanerContact"
required
onChange = {handleChange}/>
</label>

</div>
<div className="column">



<label> Service Decription:&nbsp;
<input
className="input"
type ="text"
placeholder='Service...'
value = {inputs.cleanerDescription}
name="cleanerDescription"
required
onChange = {handleChange}/>
</label>

<label> Price:&nbsp;
<input
className="input"
type ="number"
placeholder='Prize...'
value = {inputs.cleanerPrize}
name="cleanerPrize"
required
onChange = {handleChange}/>
</label>

<label> User admin:&nbsp;
<input
className="input"
type ="text"
placeholder='User name...'
value = {inputs.cleanerUserName}
name="cleanerUserName"
required
onChange = {handleChange}/>
</label>

<input
className="input"
type ="text"
placeholder='Password...'
value = {inputs.cleanerPassword}
name="cleanerPassword"
required
onChange = {handleChange}/>

<br></br>
<br></br>
<button className = "bookAdminButton" onClick={() => editCleaner((inputs))}>Update</button>

</div>
</div>

</form>

</Modal>


<div className="wrapper">
<h2>List Cleaners</h2>



<button className = "searchButton" onClick={getAllCleaners}>List</button>
<br></br>
<br></br>

{cleanerItemsTable}
<br></br>

</div>
<CleanerAdmin></CleanerAdmin>
</>
);

};

