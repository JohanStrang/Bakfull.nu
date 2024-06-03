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




export default function BN_CleanerTemp (){

//BN Cleaner
const [searchCleanerUserName, setSearchCleanerUserName] = useState("");
const [searchCleanerPassword, setSearchCleanerPassword] = useState("");
const [orders, setOrders] = useState<IOrders[]>([]);

const bn_AdminService = new BN_AdminService ();

//Old date serach for reference
const [searchDate, setSearchDate] = useState("");

//BN old from Search Orders
const [searchCustomerPhone, setSearchCustomerPhone] = useState("");
const [searchCleanerId, setSearchCleanerId] = useState("");
const [searchMenuId, setSearchMenuId] = useState("");

const [orderSearchCustomerPhone, setOrderSearchCustomerPhone] = useState<IOrders[]>([]);
const [orderSearchCleanerId, setOrderSearchCleanerId] = useState<IOrders[]>([]);
const [orderSearchMenuId, setOrderSearchMenuId] = useState<IOrders[]>([]);


const adminService = new AdminService();

const { isOpen, toggle } = useModal();

// ********************************************************
//RN get alla orders
const getAllOrders = async () => {
    const orders = await bn_AdminService.getAllOrders();
    setOrders(orders);
    console.log(orders);
    };

//RN List all orders and put button for delete
const orderItems = orders.map((orders) => (
    <div className = "bookinItems" key={(orders._id.toString())} >
    <li className = "listItem">
    <p className = "item">
    <b> Name: </b>&nbsp;{orders.customerName} &nbsp;
    <b> Phone: </b>&nbsp;{orders.customerPhone} &nbsp;
    <b> Menu ID: </b> &nbsp; {orders.menuId} &nbsp;
    <b> Cleaner ID: </b> &nbsp; {orders.cleanerId} &nbsp;

   
    <button className = "itemButton" onClick={() => bn_AdminService.deleteOrders((orders._id).toString())}>Delete</button>
    </p>
    </li>
    </div>));
 // ********************************************************
 //RN search customer phone
 const handleSearchOrderCustomerPhone = async () => {
    if (searchCustomerPhone === "") {
    //setShowError(true);
    setOrderSearchCustomerPhone([]);
    
    
    } else {
  
    const orders = await bn_AdminService.getOrdersByCustomerPhone(searchCustomerPhone);
    console.log(orders)
    console.log(searchCustomerPhone)
    const tempSearch = orders.filter(orders =>
    orders.customerPhone == searchCustomerPhone
    );
    setOrderSearchCustomerPhone(tempSearch);
    console.log(tempSearch)
    }
    };
//RN list based on Search Custoner phone
const SearchOrderCustomerPhoneItems = orderSearchCustomerPhone.map((orders) => (
    <div className = "bookinItems" key={(orders._id.toString())} >
    <li className = "listItem">
    <p className = "item">
    <b> Name: </b>&nbsp;{orders.customerName} &nbsp;
    <b> Address: </b>&nbsp;{orders.customerAddress} &nbsp;
    <b> Phone: </b>&nbsp;{orders.customerPhone} &nbsp;
    <b> Menu ID: </b> &nbsp; {orders.menuId} &nbsp;
    <b> Cleaner ID: </b> &nbsp; {orders.cleanerId} &nbsp;

   
    <button className = "itemButton" onClick={() => bn_AdminService.deleteOrders((orders._id).toString())}>Delete</button>
    </p>
    </li>
    </div>));

// ********************************************************
//RN search CleanerId
const handleSearchOrderCleanerId = async () => {
    if (searchCleanerId === "") {
    //setShowError(true);
    setOrderSearchCleanerId([]);
    
    
    } else {
  
    const orders = await bn_AdminService.getOrdersByCleanerId(searchCleanerId);
    console.log(orders)
    console.log(searchCleanerId)
    const tempSearch = orders.filter(orders =>
    orders.cleanerId == searchCleanerId
    );
    setOrderSearchCleanerId(tempSearch);
    console.log(tempSearch)
    }
    }; 

//RN List based on Search CleanerId
const SearchOrderCleanerIdItems = orderSearchCleanerId.map((orders) => (
    <div className = "bookinItems" key={(orders._id.toString())} >
    <li className = "listItem">
    <p className = "item">
    <b> Name: </b>&nbsp;{orders.customerName} &nbsp;
    <b> Address: </b>&nbsp;{orders.customerAddress} &nbsp;
    <b> Phone: </b>&nbsp;{orders.customerPhone} &nbsp;
    <b> Menu ID: </b> &nbsp; {orders.menuId} &nbsp;
    <b> Cleaner ID: </b> &nbsp; {orders.cleanerId} &nbsp;

   
    <button className = "itemButton" onClick={() => bn_AdminService.deleteOrders((orders._id).toString())}>Delete</button>
    </p>
    </li>
    </div>));

// ********************************************************
    //RN search MenuId
    const handleSearchOrderMenuId = async () => {
        if (searchMenuId === "") {
        //setShowError(true);
        setOrderSearchMenuId([]);
        
        
        } else {
      
        const orders = await bn_AdminService.getOrdersByMenuId(searchMenuId);
        console.log(orders)
        console.log(searchMenuId)
        const tempSearch = orders.filter(orders =>
        orders.menuId == searchMenuId
        );
        setOrderSearchMenuId(tempSearch);
        console.log(tempSearch)
        }
        }; 

    //RN List based on Search MenuId
const SearchOrderMenuIdtems = orderSearchMenuId.map((orders) => (
    <div className = "bookinItems" key={(orders._id.toString())} >
    <li className = "listItem">
    <p className = "item">
    <b> Name: </b>&nbsp;{orders.customerName} &nbsp;
    <b> Address: </b>&nbsp;{orders.customerAddress} &nbsp;
    <b> Phone: </b>&nbsp;{orders.customerPhone} &nbsp;
    <b> Menu ID: </b> &nbsp; {orders.menuId} &nbsp;
    <b> Cleaner ID: </b> &nbsp; {orders.cleanerId} &nbsp;

   
    <button className = "itemButton" onClick={() => bn_AdminService.deleteOrders((orders._id).toString())}>Delete</button>
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


// ****************


return (
<>


<BN_Navbar></BN_Navbar>


<div className ="wrapper">
<h2>Search Order on Customer Phone</h2>
<br></br>
<input type="text" className = "searchInput" value={searchCustomerPhone} onChange={handleChangeSearchCustomerPhone}/>
<button className = "searchButton" onClick={handleSearchOrderCustomerPhone}>Search</button>
<br></br>
<br></br>
{SearchOrderCustomerPhoneItems}
<br></br>
</div>

<div className ="wrapper">
<h2>Search Order on Cleaner Id</h2>
<br></br>
<input type="text" className = "searchInput" value={searchCleanerId} onChange={handleChangeSearchCleanerId}/>
<button className = "searchButton" onClick={handleSearchOrderCleanerId}>Search</button>
<br></br>
<br></br>
{SearchOrderCleanerIdItems}
<br></br>
</div>

<div className ="wrapper">
<h2>Search Order on Menu Id</h2>
<br></br>
<input type="text" className = "searchInput" value={searchMenuId} onChange={handleChangeSearchMenuId}/>
<button className = "searchButton" onClick={handleSearchOrderMenuId}>Search</button>
<br></br>
<br></br>
{SearchOrderMenuIdtems}
<br></br>
</div>

<div className="wrapper">
<h2>List All Orders </h2>
<br></br>


<button className = "searchButton" onClick={getAllOrders}>List All</button>
<br></br>
<br></br>
{orderItems}
<br></br>

</div>
<OrderAdmin></OrderAdmin>
</>
);

};