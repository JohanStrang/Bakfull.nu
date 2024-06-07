import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState, useEffect} from "react";
import "./RN_Admin.scss";
import { BN_AdminService } from "../../services/BN_admin.service";
import { IOrders, INewOrders} from "../../models/RN_Orders";
import { ICleaners, INewCleaners} from "../../models/RN_Cleaners";
import { IMenues } from '../../models/RN_Menues';
import { Geolocation } from '../../components/Geolocation/geolocation';

//******************************************************************** 
//  Please note that his function is not completely developed
//  If in production nt needs some further fine-tuning around address 
//  from Geodata and also from check availability of Cleaner
//  BUT Geodata Long and Lat is implemented and function important
//  for the system if go live in the future
//********************************************************************

const startOrder:INewOrders = {
"OrderDate":"",
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


export default function OrderAdminMainNow() {
 
const [isCleaning, setIsCleaning] = useState(false);
const [isMenu, setIsMenu] = useState(false);
const bn_AdminService = new BN_AdminService ();
const [inputs, setInputs] = useState<INewOrders> (startOrder);

// Add order
const addOrder = async () => {
console.log(inputs)
const response = await bn_AdminService.addOrders(inputs);
};

const [selectedDropDownCleanerValue, setSelectedDropDownCleanerValue] = useState(''); 

const [cleaners, setCleaners] = useState<ICleaners[]>([]);
const [cleanerDescription, setCleanerDescription] = useState("")
const [restaurantName, setRestaurantName] = useState("")
const [menues, setMenues] = useState<IMenues[]>([]);


const createNewOrder = async () => {
    toggle();
};

const [isOpen, setIsOpen] = useState(false);
      
function toggle() {
          setIsOpen((isOpen) => !isOpen);
        };


// Putting teh default values when teh person enter his/her name
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
const name = e.target.name;
const value = e.target.value;
setInputs(values => ({...values, [name]: value}))
setInputs(values => ({...values, "menuPrizeTotal": 500}))
inputs.OrderDate=new Date().toString()
setInputs(values => ({...values, "OrderDate": inputs.OrderDate}))
inputs.OrderTime=new Date().toString()
setInputs(values => ({...values, "OrderTime": inputs.OrderTime}))
inputs.customerAddress= "Geodata"
setInputs(values => ({...values, "customerAddress": inputs.customerAddress}))
inputs.cleanerId= "First available"
setInputs(values => ({...values, "cleanerId": inputs.cleanerId}))
inputs.cleanerPrize= 1200
setInputs(values => ({...values, "cleanerPrize": inputs.cleanerPrize}))
inputs.menuId= "First Available"
setInputs(values => ({...values, "menuId": inputs.menuId}))
inputs.menuPrizeTotal= 600
setInputs(values => ({...values, "menuPrizeTotal": inputs.menuPrizeTotal}))
inputs.orderPrizeTotal= 1800
setInputs(values => ({...values, "orderPrizeTotal": inputs.orderPrizeTotal}))
}

const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
e.preventDefault();
console.log(inputs);


addOrder()
    setInputs(values => ({...values,"OrderDate": ""}));
    setInputs(values => ({...values,"OrderTime": ""}));
    setInputs(values => ({...values,"customerName": ""}));
    setInputs(values => ({...values,"customerAddress": ""}));
    setInputs(values => ({...values,"customerPostalCode": ""}));
    setInputs(values => ({...values,"customerCity": ""}));
    setInputs(values => ({...values,"customerPhone": ""}));
    setInputs(values => ({...values,"cleanerId": ""}));
    setInputs(values => ({...values,"cleanerPrize": 0}));
    setInputs(values => ({...values,"menuId": ""}));
    setInputs(values => ({...values,"menuPrizeTotal": 0}));
    setInputs(values => ({...values,"orderPrizeTotal": 0}));
    setInputs(values => ({...values,"cleaningDone": false}));
    setInputs(values => ({...values,"cleaningReview": ""}));
    setInputs(values => ({...values,"cleaningReviewComment": ""}));
    setInputs(values => ({...values,"menuDelivered": false}));
    setInputs(values => ({...values,"menuReview": ""}));
    setInputs(values => ({...values,"menuReviewComment": ""}));

    alert("Your order at "+inputs.OrderDate+" has been confirmed. The Total prize is: "+inputs.orderPrizeTotal+" SEK." )
}


return (
<>
<div className="wrapper">

<div className="intro">
  <h2>Welcome {inputs.customerName} to Bakfull.nu!</h2>
  <br></br>
  <p ><b>I need help as fast as possible and at the place I am now!</b></p>
  <button className = "searchButton" onClick={createNewOrder}>Urgent booking!</button>
  <br></br>
  <br></br>
  <p>If you want to selct time, place, what service and food you want to order in more detail or pre-book.</p>
  <a href={'http://localhost:5173/BN_Main_Order'}>Press here!</a>
  <br></br>
  <br></br>
</div>

  {isOpen && <form className="form" onSubmit ={handleSubmit}>  

  <h4>Enter your name and phone number and the rest we fix...</h4>
  <input
  className="input"
  type ="text"
  placeholder='Name...'
  value = {inputs.customerName}
  name="customerName"
  required
  onChange = {handleChange}/>

  <input
  className="input"
  type ="text"
  value = {inputs.customerPhone}
  placeholder='Phone...'
  name="customerPhone"
  required
  onChange = {handleChange}/>

<h4>Booked today and as soon as possible</h4>
  <input
  className="input"
  type ="text"
  placeholder='Date...'
  value = {inputs.OrderDate}
  name="OrderDate"
  readOnly/>


  <h4>Gelocation of your current position</h4>
  <Geolocation></Geolocation>


<h4>Prize</h4>
  <input
  className="input"
  type ="number"
  readOnly
  value = {inputs.orderPrizeTotal}
  name="orderPrizeTotal"/>

  <button
  className = "bookAdminButton"
  type="submit">OK</button>
  <br></br>
  <br></br>

  </form>}
</div>
</>
);
}





