import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState } from "react";
import { BN_Navbar } from '../../components/Navbar/BN_Navbar';

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

//RN
const startOrder:INewOrders = {
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

export default function BN_AdminOrder (){


const [showError, setShowError] = useState(false);

//BN
const [searchCustomerPhone, setSearchCustomerPhone] = useState("");
const [searchCleanerId, setSearchCleanerId] = useState("");
const [searchMenuId, setSearchMenuId] = useState("");


//BN search
const [orderSearchCustomerPhone, setOrderSearchCustomerPhone] = useState<IOrders[]>([]);
const [orderSearchCleanerId, setOrderSearchCleanerId] = useState<IOrders[]>([]);
const [orderSearchMenuId, setOrderSearchMenuId] = useState<IOrders[]>([]);

const [inputs, setInputs] = useState<INewOrders> (startOrder);

//BN
const [orders, setOrders] = useState<IOrders[]>([]);
//const [cleaners, setCleaners] = useState([]);

//RN
const bn_AdminService = new BN_AdminService ();


const { isOpen, toggle } = useModal();

//RN get alla orders
const getAllOrders = async () => {
    const orders = await bn_AdminService.getAllOrders();
    setOrders(orders);
    console.log(orders);
    };

//RN All Orders
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
 
//RN Search Custoner phone
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

//RN Search CleanerId
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

    //RN Search MenuId
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



const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
const name = e.target.name;
const value = e.target.value;
setInputs(values => ({...values, [name]: value}))
};


return (
<>


<BN_Navbar></BN_Navbar>


<Modal isOpen={isOpen} toggle={toggle}>

<button type="button" className="modal-close-button" aria-label="Close" onClick={toggle}>
<span aria-hidden="true">&times;</span>
</button>

</Modal>


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
</>
);

};