import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState } from "react";
import { BN_Navbar_Main } from '../../components/Navbar/BN_Navbar_Main';
import CleanerAdmin from "../../components/Admin/RN_cleanerAdmin";
import OrderAdmin from "../../components/Admin/RN_orderAdmin";
import { BN_AdminService } from "../../services/BN_admin.service";
import "./BN_Admin.scss";
import { ICleaners, INewCleaners} from "../../models/RN_Cleaners";
import { IMenues, INewMenues} from "../../models/RN_Menues";
import { IOrders, INewOrders, IOrdersResponse} from "../../models/RN_Orders";

import useModal from "../../hooks/useModal";
import Modal from "../../components/Admin/bookingModal";


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

export default function BN_Menu (){

const [searchRestaurantUserName, setSearchRestaurantUserName] = useState("");
const [searchRestaurantPassword, setSearchRestaurantPassword] = useState("");
const [orders, setOrders] = useState<IOrders[]>([]);
const [orderSearchLogin, setOrderSearchLogin] = useState<IOrders[]>([]);

const bn_AdminService = new BN_AdminService ();
const [inputs, setInputs] = useState<IOrders> (startOrder);
const [updateOrder, setUpdateOrder] = useState("")

const [isMenu, setIsMenu] = useState(false);

const { isOpen, toggle } = useModal();

// ********************************************************
// Get alla orders
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
        setInputs(values => ({...values,"menuDelivered": inputs.menuDelivered}));
        setInputs(values => ({...values,"menuPrizeTotal": inputs.menuPrizeTotal}));
    toggle()
    console.log(inputs)
    };


const editOrder = async (inputs:IOrders) => {
    const response = await bn_AdminService.updateOrders(inputs);
    setUpdateOrder(response);
    console.log(response);
    handleSearchOrderRestaurantLogin();
    getAllOrders();
    toggle()
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

const deleteOrderLocal = async (orderId:string) => {
    const response = bn_AdminService.deleteOrders((orderId));
    getAllOrders()
        };

// ********************************************************
//  LOGIN SEARCH ON USER NAME AND PASSWORD
// ********************************************************

    const handleSearchOrderRestaurantLogin = async () => {
        if (searchRestaurantUserName === "" || searchRestaurantPassword === "") {
        //setShowError(true);
        alert("You need to enter User Name and Password!")
        setOrderSearchLogin([]);
        
        } else {
      
        const tempAllMenues= await bn_AdminService.getAllMenues();
       
        const tempSearchMenuLogin : any = tempAllMenues.find(menues =>
            (menues.restaurantUserName == searchRestaurantUserName && menues.restaurantPassword == searchRestaurantPassword) 
            )

        
       console.log(tempSearchMenuLogin)
        const orders = await bn_AdminService.getOrdersByMenuId(tempSearchMenuLogin._id);
        console.log(orders)
        const tempSearch = orders.filter(orders =>
            orders.menuId == tempSearchMenuLogin._id
            );
        setOrderSearchLogin(tempSearch);
        }
        }; 

    const handleChangeSearchRestaurantUserName = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchRestaurantUserName(e.target.value);
          };
        const handleChangeRestaurantPassword = (e: ChangeEvent<HTMLInputElement>) => {
            setSearchRestaurantPassword(e.target.value);
          };       

// ********************************************************
//  List All order for a Cleaner in Table
// ********************************************************
const SearchOrderLoginItem = orderSearchLogin.map((orders) => (
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
        <th>Prize</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>{orders.OrderDate}</td>
        <td>{orders.OrderTime}</td>
        <td>{orders.customerName}</td>
        <td>{orders.customerAddress} &nbsp; {orders.customerCity} </td>
        <td>{orders.customerPhone}</td>
        <td>{orders.cleanerPrize} </td>
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


return (
<>


<BN_Navbar_Main></BN_Navbar_Main>

<div className ="wrapper">

<h2>Restaurant</h2>

<br></br>

    <input type="text" 
    placeholder="User Name..." 
    className = "searchInput" 
    required
    name="UserName"
    value={searchRestaurantUserName} 
    onChange={handleChangeSearchRestaurantUserName}/>

    <input type="password" 
    placeholder="Password..." 
    className = "searchInput" 
    name="Password"
    required value={searchRestaurantPassword} 
    onChange={handleChangeRestaurantPassword}/>

    <button className = "searchButton" onClick={handleSearchOrderRestaurantLogin}>Login</button>

<br></br>
<br></br>
    {SearchOrderLoginItem}
<br></br>
</div>

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

<label> Food delivered:&nbsp;
<p className="item">Food:
<input
className="input"
type ="checkbox"
name="menuDelivered" checked = {isMenu}
onChange = {() => setIsMenu ((prev) => !prev)}/></p>
</label>

<label> Menu prize *:&nbsp;
<input
className="input"
type ="number"
value = {inputs.cleanerPrize}
name="menuPrizeTotal"
required
onChange = {handleChange}/>
</label>

<button className = "bookAdminButton"
type="submit">Update</button>
</div>
</div>

</form>}
</div>

</>
);

};