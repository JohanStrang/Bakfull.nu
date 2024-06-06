import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState } from "react";
import { BN_Navbar } from '../../components/Navbar/BN_Navbar';
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

export default function BN_AdminOrder (){

const [isCleaning, setIsCleaning] = useState(false);
const [isMenu, setIsMenu] = useState(false);

const [showError, setShowError] = useState(false);
const [searchCustomerPhone, setSearchCustomerPhone] = useState("");
const [searchCleanerId, setSearchCleanerId] = useState("");
const [searchMenuId, setSearchMenuId] = useState("");

const [orderSearchCustomerPhone, setOrderSearchCustomerPhone] = useState<IOrders[]>([]);
const [orderSearchCleanerId, setOrderSearchCleanerId] = useState<IOrders[]>([]);
const [orderSearchMenuId, setOrderSearchMenuId] = useState<IOrders[]>([]);
const [inputs, setInputs] = useState<IOrders> (startOrder);
const [orders, setOrders] = useState<IOrders[]>([]);

const [cleanerDescription, setCleanerDescription] = useState("")
const [restaurantName, setRestaurantName] = useState("")

const bn_AdminService = new BN_AdminService ();
const [cleaners, setCleaners] = useState<ICleaners[]>([]);
const [menues, setMenues] = useState<IMenues[]>([]);


const { isOpen, toggle } = useModal();

//Get alla orders
const getAllOrders = async () => {
    const orders = await bn_AdminService.getAllOrders();
    setOrders(orders);
    console.log(orders);
    };

const getAllCleaners = async () => {
    const cleaner = await bn_AdminService.getAllCleaners();
    setCleaners(cleaner);
    console.log(cleaner);
    };

const getAllMenues = async () => {
    const menu = await bn_AdminService.getAllMenues();
    setMenues(menu);
    console.log(menu);
    };

const createNewOrder = async () => {
        getAllCleaners();
        getAllMenues();
        toggle();
    };


const openModalBooking = async (inputs:IOrders) => {
    setInputs(values => ({...values,"_id": inputs._id}));
    setInputs(values => ({...values,"OrderDate": inputs.OrderDate}));
    setInputs(values => ({...values,"OrderTime": inputs.OrderTime}));
    setInputs(values => ({...values,"customerName": inputs.customerName}));
    setInputs(values => ({...values,"customerAddress": inputs.customerAddress}));
    setInputs(values => ({...values,"customerPostalCode": inputs.customerPostalCode}));
    setInputs(values => ({...values,"customerCity": inputs.customerCity}));
    setInputs(values => ({...values,"customerPhone": inputs.customerPhone}));
    setInputs(values => ({...values,"cleanerId": inputs.cleanerId}));
    setInputs(values => ({...values,"cleanerPrize": inputs.cleanerPrize}));
    setInputs(values => ({...values,"menuId": inputs.menuId}));
    setInputs(values => ({...values,"menuPrizeTotal": inputs.menuPrizeTotal}));
    setInputs(values => ({...values,"orderPrizeTotal": inputs.orderPrizeTotal}));
    setInputs(values => ({...values,"cleaningDone": inputs.cleaningDone}));
    setInputs(values => ({...values,"cleaningReviewComment": inputs.cleaningReviewComment}));
    setInputs(values => ({...values,"menuDelivered": inputs.menuDelivered}));
    setInputs(values => ({...values,"menuReview": inputs.menuReview}));
    setInputs(values => ({...values,"menuReviewComment": inputs.menuReviewComment}));
  
toggle()
console.log(inputs)
//editBooking(inputs)
    };

const editOrder = async (inputs:IOrders) => {
    const response = await bn_AdminService.updateOrders(inputs);
    console.log(response);
    getAllOrders();
    toggle()
        };

        const getCleanerById = async (tempCleanerId: string) => {
            const tempSearch = await bn_AdminService.getCleanerById(tempCleanerId);
            console.log(tempSearch.cleanerPrize)
            setInputs(values => ({...values, "cleanerPrize": tempSearch.cleanerPrize}))
            const tempOrderPrizeTotal = tempSearch.cleanerPrize + inputs.menuPrizeTotal
            setInputs(values => ({...values, "orderPrizeTotal": tempOrderPrizeTotal}))
            setCleanerDescription(tempSearch.cleanerDescription)
            };
        
        const getMenuById = async (tempMenuId: string) => {
                const tempSearch = await bn_AdminService.getMenuById(tempMenuId);
                console.log(tempSearch.menuPrizeTotal)
                setInputs(values => ({...values, "menuPrizeTotal": tempSearch.menuPrize}))
                console.log(inputs.cleanerPrize)
                const tempOrderPrizeTotal = inputs.cleanerPrize + tempSearch.menuPrize
                setInputs(values => ({...values, "orderPrizeTotal": tempOrderPrizeTotal}))
                setRestaurantName(tempSearch.restaurantName)
                };

const deleteOrderLocal = async (orderId:string) => {
    const response = bn_AdminService.deleteOrders((orderId));
    getAllOrders()
    };


//**************************
//List All Cleaners in Table
const orderItems = orders.map((orders) => (
    <div className = "bookinItems" key={(orders._id.toString())} >
    <li className = "listItem">
    <table>
  <thead>
    <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Name</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Tot Prize</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>{orders.OrderDate}</td>
        <td>{orders.OrderTime}</td>
        <td>{orders.customerName}</td>
        <td>{orders.customerAddress} &nbsp; {orders.customerCity} </td>
        <td>{orders.customerPhone}</td>
        <td>{orders.orderPrizeTotal} </td>
        <td>
         <span className = "itemButtonGroup">
            <button className = "itemButton" onClick={() => deleteOrderLocal((orders._id).toString())}>Delete</button>
            <button className = "itemButton" onClick={() => openModalBooking(orders)}>Update</button>
        </span>
    </td>
    </tr>
  </tbody>
</table>


    </li>
    </div>));

//************

//BN Search CleanerId - Mostly inclued for Test reasons but kept in code
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


const SearchOrderCleanerIdItems = orderSearchCleanerId.map((orders) => (
    <div className = "bookinItems" key={(orders._id.toString())} >
    <li className = "listItem">
    <table>
  <thead>
    <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Name</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Tot Prize</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>{orders.OrderDate}</td>
        <td>{orders.OrderTime}</td>
        <td>{orders.customerName}</td>
        <td>{orders.customerAddress} &nbsp; {orders.customerCity} </td>
        <td>{orders.customerPhone}</td>
        <td>{orders.orderPrizeTotal} </td>
        <td>
         <span className = "itemButtonGroup">
            <button className = "itemButton" onClick={() => deleteOrderLocal((orders._id).toString())}>Delete</button>
            <button className = "itemButton" onClick={() => openModalBooking(orders)}>Update</button>
        </span>
    </td>
    </tr>
  </tbody>
</table>
    </li>
    </div>));

  //Search Cleaner Id
  const handleChangeSearchCleanerId = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchCleanerId(e.target.value);
  };

// *****************
//BN Search MenuId - Mostly inclued for Test reasons but kept in code
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
    

  //BN Search Menu Id
  const handleChangeSearchMenuId = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchMenuId(e.target.value);
  };


const SearchOrderMenuIdtems = orderSearchMenuId.map((orders) => (
    <div className = "bookinItems" key={(orders._id.toString())} >
    <li className = "listItem">
    <table>
  <thead>
    <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Name</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Tot Prize</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>{orders.OrderDate}</td>
        <td>{orders.OrderTime}</td>
        <td>{orders.customerName}</td>
        <td>{orders.customerAddress} &nbsp; {orders.customerCity} </td>
        <td>{orders.customerPhone}</td>
        <td>{orders.orderPrizeTotal} </td>
        <td>
         <span className = "itemButtonGroup">
            <button className = "itemButton" onClick={() => deleteOrderLocal((orders._id).toString())}>Delete</button>
            <button className = "itemButton" onClick={() => openModalBooking(orders)}>Update</button>
        </span>
    </td>
    </tr>
  </tbody>
</table>
    </li>
    </div>));

// *****************
//BN search customer phone
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
  

const SearchOrderCustomerPhoneItems = orderSearchCustomerPhone.map((orders) => (
    <div className = "bookinItems" key={(orders._id.toString())} >
    <li className = "listItem">
    <table>
  <thead>
    <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Name</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Tot Prize</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>{orders.OrderDate}</td>
        <td>{orders.OrderTime}</td>
        <td>{orders.customerName}</td>
        <td>{orders.customerAddress} &nbsp; {orders.customerCity} </td>
        <td>{orders.customerPhone}</td>
        <td>{orders.orderPrizeTotal} </td>
        <td>
         <span className = "itemButtonGroup">
            <button className = "itemButton" onClick={() => deleteOrderLocal((orders._id).toString())}>Delete</button>
            <button className = "itemButton" onClick={() => openModalBooking(orders)}>Update</button>
        </span>
    </td>
    </tr>
  </tbody>
</table>
    </li>
    </div>));
    
//BN Search Phone
const handleChangeSearchCustomerPhone = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchCustomerPhone(e.target.value);
  };
// *****************

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
const name = e.target.name;
const value = e.target.value;
setInputs(values => ({...values, [name]: value}))
};

const handleChangeSelectMenu = (e: ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
    getMenuById(e.target.value)
    }

const handleChangeSelectCleaner = (e: ChangeEvent<HTMLSelectElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
        getCleanerById(e.target.value)
        }

const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
    
    editOrder(inputs);
    console.log(inputs)
    }

return (
<>


<BN_Navbar></BN_Navbar>


<Modal isOpen={isOpen} toggle={toggle}>

<button type="button" className="modal-close-button" aria-label="Close" onClick={toggle}>
<span aria-hidden="true">&times;</span>
</button>

<div className="wrapper">
{isOpen && <form className="form" onSubmit ={handleSubmit}>  


<div className="row">

<div className="column">


<label> Date:&nbsp;
<input
className="input"
type ="date"
value = {inputs.OrderDate}
name="OrderDate"
required
onChange = {handleChange}/>
</label>


<label> Customer:&nbsp;
<input
className="input"
type ="text"
value = {inputs.customerName}
name="customerName"
required
onChange = {handleChange}/>
</label>

<input
className="input"
type ="text"
value = {inputs.customerAddress}
name="customerAddress"
onChange = {handleChange}/>

<input
className="input"
type ="text"
value = {inputs.customerCity}
name="customerCity"
onChange = {handleChange}/>

<input
className="input"
type ="text"
value = {inputs.customerPhone}
name="customerPhone"
required
onChange = {handleChange}/>


  <label> Book cleaning:&nbsp;
  <select 
        className="dropdown"
        value={inputs.cleanerId}
        name="cleanerId"
        onChange={handleChangeSelectCleaner}
        placeholder=''
      > 
        {cleaners.map(cleaner => ( 
          <option key={cleaner._id} value={cleaner._id}> 
            {cleaner.cleanerName} &nbsp; {cleaner.cleanerDescription}
          </option> 
        ))} 
  </select> 
  </label>

  <label> Book food and drinks:&nbsp;
  <select 
        className="dropdown"
        value={inputs.menuId}
        name="menuId"
        onChange={handleChangeSelectMenu}
      > 
        {menues.map(menu => ( 
          <option key={menu._id} value={menu._id}> 
            {menu.menuDescription} &nbsp; {menu.restaurantName}
          </option> 
        ))} 
  </select> 
  </label>

</div>


<div className="column">

<label> Time:&nbsp;
<input
className="input"
type ="time"
value = {inputs.OrderTime}
name="OrderTime"
required
onChange = {handleChange}/>
</label>

<br></br>

<p className="item">Cleaning done:
<input
className="input"
type ="checkbox"
name="cleaningDone" checked = {isCleaning}
onChange = {() => setIsCleaning ((prev) => !prev)}/></p>

<p className="item">Food delivered:   
<input
className="input"
type ="checkbox"
name="menuDelivered" checked = {isMenu}
onChange = {() => setIsMenu ((prev) => !prev)}/></p>

<br></br>

<label> Cleaning prize:&nbsp;
<input
className="input"
type ="number"
value = {inputs.cleanerPrize}
name="cleanerPrize"
required
onChange = {handleChange}/>
</label>

<label> Food prize:&nbsp;
<input
className="input"
type ="number"
placeholder='Food prize...'
value = {inputs.menuPrizeTotal}
name="menuPrizeTotal"
required
onChange = {handleChange}/>
</label>

<label> Total prize:&nbsp;
<input
className="input"
type ="number"
placeholder='Total prize...'
value = {inputs.orderPrizeTotal}
name="orderPrizeTotal"
required
onChange = {handleChange}/>
</label>

<button className = "bookAdminButton" onClick={() => editOrder((inputs))}>Update</button>
</div>
</div>

</form>}
</div>

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

</>
);

};