import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState, useEffect} from "react";
import "./RN_Admin.scss";
import { BN_AdminService } from "../../services/BN_admin.service";
import { IOrders, INewOrders} from "../../models/RN_Orders";
import { ICleaners, INewCleaners} from "../../models/RN_Cleaners";
import { IMenues } from '../../models/RN_Menues';

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


export default function OrderAdminMain() {

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

const getAllCleaners = async () => {
    const cleaner = await bn_AdminService.getAllCleaners();
    setCleaners(cleaner);
    console.log(cleaner);
    };

const createNewOrder = async () => {
    getAllCleaners();
    getAllMenues();
    toggle();
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

const [isOpen, setIsOpen] = useState(false);
      
function toggle() {
          setIsOpen((isOpen) => !isOpen);
        };
 
//Cleaner dropdown list
const [selectedDropDownMenuValue, setSelectedDropDownMenuValue] = useState(''); 

const getAllMenues = async () => {
    const menu = await bn_AdminService.getAllMenues();
    setMenues(menu);
    console.log(menu);
    };

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
const name = e.target.name;
const value = e.target.value;
setInputs(values => ({...values, [name]: value}))
}

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
  <p>Here you can selct time, place, what service and food you want to order!</p>
  <button className = "searchButton" onClick={createNewOrder}>Book!</button>
  <br></br>
  <br></br>
  <a href={'http://localhost:5173/BN_Main_Order_Now'}>Press here if you want URGENT help where you are now!</a>
  <br></br>
  <br></br>
</div>

  {isOpen && <form className="form" onSubmit ={handleSubmit}>  

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

  <label> Address:&nbsp;
  <input
  className="input"
  type ="text"
  placeholder='Address...'
  value = {inputs.customerAddress}
  name="customerAddress"
  required
  onChange = {handleChange}/>
  </label>

  <input
  className="input"
  type ="text"
  placeholder='Postal Code...'
  value = {inputs.customerPostalCode}
  name="customerPostalCode"
  onChange = {handleChange}/>

  <input
  className="input"
  type ="text"
  placeholder='City...'
  value = {inputs.customerCity}
  name="customerCity"
  onChange = {handleChange}/>

  <label> Date and time for Service:&nbsp;
  <input
  className="input"
  type ="date"
  placeholder='Date...'
  value = {inputs.OrderDate}
  name="OrderDate"
  required
  onChange = {handleChange}/>
  </label>

  <input
  className="input"
  type ="time"
  value = {inputs.OrderTime}
  placeholder='Time...'
  name="OrderTime"
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

  <input
  className="input"
  type ="number"
  value = {inputs.cleanerPrize}
  name="cleanerPrize"
  onChange = {handleChange}/>

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

  <input
  className="input"
  type ="number"
  value = {inputs.menuPrizeTotal}
  name="menuPrizeTotal"
  onChange = {handleChange}/>

  <label> Total prize:&nbsp;
  <input
  className="input"
  type ="number"
  value = {inputs.orderPrizeTotal}
  name="orderPrizeTotal"
  onChange = {handleChange}/>
  </label>



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





