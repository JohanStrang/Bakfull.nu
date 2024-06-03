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
import OrderAdmin from "../../components/Admin/RN_orderAdmin";
import { BN_AdminService } from "../../services/BN_admin.service";
import "./BN_Admin.scss";
import { ICleaners, INewCleaners} from "../../models/RN_Cleaners";
import { IMenues, INewMenues} from "../../models/RN_Menues";
import { IOrders, INewOrders, IOrdersResponse} from "../../models/RN_Orders";


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

    const startOrder:IOrders = {
        "_id":"",
        "OrderDate": "",
        "OrderTime": "",
        "customerName": "",
        "customerAddress": "",
        "customerPostalCode": "",
        "customerCity": "",
        "customerPhone": "",
        "cleanerId": "",
        "cleanerPrize": 0,
        "menuId": "",
        "menuPrizeTotal": 0,
        "orderPrizeTotal": 0,
        "cleaningDone": false,
        "cleaningReview": "",
        "cleaningReviewComment": "",
        "menuDelivered": false,
        "menuReview": "",
        "menuReviewComment": "",
        }

export default function BN_Cleaner (){

//BN Cleaner
const [searchCleanerUserName, setSearchCleanerUserName] = useState("");
const [searchCleanerPassword, setSearchCleanerPassword] = useState("");
const [orders, setOrders] = useState<IOrders[]>([]);
const [orderSearchLogin, setOrderSearchLogin] = useState<IOrders[]>([]);

const bn_AdminService = new BN_AdminService ();
const [inputs, setInputs] = useState<IOrders> (startOrder);
const [updateOrder, setUpdateOrder] = useState("")


//Old date serach for reference
const [searchDate, setSearchDate] = useState("");

//BN old from Search Orders
const [searchCustomerPhone, setSearchCustomerPhone] = useState("");
const [searchCleanerId, setSearchCleanerId] = useState("");
const [searchMenuId, setSearchMenuId] = useState("");

const [orderSearchCustomerPhone, setOrderSearchCustomerPhone] = useState<IOrders[]>([]);
const [orderSearchCleanerId, setOrderSearchCleanerId] = useState<IOrders[]>([]);
const [orderSearchMenuId, setOrderSearchMenuId] = useState<IOrders[]>([]);

const [isCleaning, setIsCleaning] = useState(false);


const adminService = new AdminService();

const { isOpen, toggle } = useModal();

// ********************************************************
//RN get alla orders
const getAllOrders = async () => {
    const orders = await bn_AdminService.getAllOrders();
    setOrders(orders);
    console.log(orders);
    };


const openModalBooking = async (inputs:IOrders) => {
        setInputs(values => ({...values,"_id": inputs._id}));
        setInputs(values => ({...values,"OrderDate": inputs.OrderDate}));
        setInputs(values => ({...values,"OrderTime": inputs.OrderTime}));
        setInputs(values => ({...values,"customerName": inputs.customerName}));
        setInputs(values => ({...values,"customerAddress": inputs.customerAddress}));
        setInputs(values => ({...values,"customerCity": inputs.customerCity}));
        setInputs(values => ({...values,"customerPhone": inputs.customerPhone}));
        setInputs(values => ({...values,"cleaningDone": inputs.cleaningDone}));
        setInputs(values => ({...values,"cleanerPrize": inputs.cleanerPrize}));
    toggle()
    console.log(inputs)
    //editBooking(inputs)
    };

//RN List all orders and put button for delete
const orderItems = orders.map((orders) => (
    <div className = "bookinItems" key={(orders._id.toString())} >
    <li className = "listItem">
    <p className = "item">
    <b> Date: </b> &nbsp; {orders.OrderDate} &nbsp;
    <b> Name: </b> &nbsp; {orders.OrderTime} &nbsp;
    <b> Name: </b>&nbsp;{orders.customerName} &nbsp;
    <b> Address: </b>&nbsp;{orders.customerAddress} &nbsp;
    <b> Address: </b>&nbsp;{orders.customerCity} &nbsp;
    <b> Address: </b>&nbsp;{orders.customerPostalCode} &nbsp;
    <b> Phone: </b>&nbsp;{orders.customerPhone} &nbsp;
    <b> Prize: </b> &nbsp; {orders.cleanerPrize} &nbsp;
    <b> Cleaner ID: </b> &nbsp; {orders.cleanerId} &nbsp;
    <b> Prize: </b> &nbsp; {orders.menuId} &nbsp;

   
    <button className = "itemButton" onClick={() => bn_AdminService.deleteOrders((orders._id).toString())}>Delete</button>
    </p>
    </li>
    </div>));

const editOrder = async (inputs:IOrders) => {
    const response = await bn_AdminService.updateOrders(inputs);
    setUpdateOrder(response);
    console.log(response);
    handleSearchOrderCleanerLogin();
    };
    
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
    };
    
    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
    
    editOrder(inputs);
    console.log(inputs)
    }

// ********************************************************
    //RN LOGIN SEARCH ON USER NAME AND PASSWORD
    const handleSearchOrderCleanerLogin = async () => {
        if (searchCleanerUserName === "" || searchCleanerPassword === "") {
        //setShowError(true);
        alert("You need to enter User Name and Password!")
        setOrderSearchLogin([]);
        
        
        } else {
      
        const tempAllCleaners = await bn_AdminService.getAllCleaners();
        //console.log(tempAllCleaners)
        //console.log(searchCleanerUserName)
        //console.log(searchCleanerPassword)
        const tempSearchCleanerLogin : any = tempAllCleaners.find(cleaners =>
            (cleaners.cleanerUserName == searchCleanerUserName && cleaners.cleanerPassword == searchCleanerPassword) 
            )

//NEED TO FIX !!!!!!!!
        
       console.log(tempSearchCleanerLogin)
        const orders = await bn_AdminService.getOrdersByCleanerId(tempSearchCleanerLogin._id);
        console.log(orders)
        const tempSearch = orders.filter(orders =>
            orders.cleanerId == tempSearchCleanerLogin._id
            );
        setOrderSearchLogin(tempSearch);
        }
        }; 


    //RN List based on Search MenuId
const SearchOrderLoginItem = orderSearchLogin.map((orders) => (
    <div className = "bookinItems" key={(orders._id.toString())} >
    <li className = "listItem">
    <p className = "item">
    <b> Date: </b> &nbsp; {orders.OrderDate} &nbsp;
    <b> Time: </b> &nbsp; {orders.OrderTime} &nbsp;
    <b> Name: </b>&nbsp;{orders.customerName} &nbsp;
    <b> Address: </b>&nbsp;{orders.customerAddress} &nbsp;
    <b> Phone: </b>&nbsp;{orders.customerPhone} &nbsp;
    <b> Prize: </b> &nbsp; {orders.cleanerPrize} &nbsp;
    <b> Cleaner ID: </b> &nbsp; {orders.cleanerId} &nbsp;

   
    <button className = "itemButton" onClick={() => bn_AdminService.deleteOrders((orders._id).toString())}>Delete</button>
    <button className = "itemButton" onClick={() => openModalBooking(orders)}>Update</button>
    </p>
    </li>
    </div>));



// ********************************************************

//BN Search Phone
const handleChangeSearchCustomerPhone = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchCustomerPhone(e.target.value);
  };

  //BN Search Cleaner Id
const handleChangeSearchCleanerId = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchCleanerId(e.target.value);
  };

  //BN Search Menu Id
const handleChangeSearchMenuId = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchMenuId(e.target.value);
  };

//BN Cleaner Login user namea nd password
const handleChangeSearchCleanerUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchCleanerUserName(e.target.value);
  };
  const handleChangeSearchCleanerPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchCleanerPassword(e.target.value);
  };

// ****************


return (
<>


<BN_Navbar></BN_Navbar>

<div className ="wrapper">
<h2>Cleaner Login</h2>
<br></br>
<input type="text" placeholder="User Name..." className = "searchInput" required value={searchCleanerUserName} onChange={handleChangeSearchCleanerUserName}/>
<input type="password" placeholder="Password..." className = "searchInput" required value={searchCleanerPassword} onChange={handleChangeSearchCleanerPassword}/>
<button className = "searchButton" onClick={handleSearchOrderCleanerLogin}>Login</button>
<br></br>
<br></br>
{SearchOrderLoginItem}
<br></br>
</div>

<div className="wrapper">
{isOpen && <form className="form" onSubmit ={handleSubmit}>  


<div className="row">

<div className="column">

<h3>Time for Service</h3>

<label> Date for Service:&nbsp;
<input
className="input"
type ="date"
value = {inputs.OrderDate}
name="OrderDate"
required
onChange = {handleChange}/>
</label>

<label> Time:&nbsp;
<input
className="input"
type ="text"
value = {inputs.OrderTime}
name="OrderTime"
required
onChange = {handleChange}/>
</label>

<h3>Customer Data</h3>

<label> Name:&nbsp;
<input
className="input"
type ="text"
value = {inputs.customerName}
name="customerName"
required
onChange = {handleChange}/>
</label>

<label> Address:&nbsp;
<input
className="input"
type ="text"
value = {inputs.customerAddress}
name="customerAddress"
required
onChange = {handleChange}/>
</label>


<label> City:&nbsp;
<input
className="input"
type ="text"
value = {inputs.customerCity}
name="customerCity"
required
onChange = {handleChange}/>
</label>
</div>

<div className="column">

<h3>Services delivered</h3>
<br></br>
<label>
<p className="item">Cleaning:
<input
className="input"
type ="checkbox"
name="cleaningDone" checked = {isCleaning}
onChange = {() => setIsCleaning ((prev) => !prev)}/></p>
</label>


<label> Cleaner prize *:&nbsp;
<input
className="input"
type ="number"
value = {inputs.cleanerPrize}
name="cleanerPrize"
required
onChange = {handleChange}/>
</label>

<br></br>
<label> Phone:&nbsp;
<input
className="input"
type ="text"
value = {inputs.customerPhone}
name="customerPhone"
required
onChange = {handleChange}/>
</label>

<button
type="submit">Update</button>
</div>
</div>


</form>}
</div>


</>
);

};