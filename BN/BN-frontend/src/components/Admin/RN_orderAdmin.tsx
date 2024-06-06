import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState, useEffect} from "react";
import "./bookingAdmin.scss";

import "./RN_Admin.scss";
import { BN_AdminService } from "../../services/BN_admin.service";
import { IOrders, INewOrders} from "../../models/RN_Orders";

import { ICleaners, INewCleaners} from "../../models/RN_Cleaners";
import { IMenues } from '../../models/RN_Menues';

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


export default function CleanerAdmin() {

//RN
const [isCleaning, setIsCleaning] = useState(false);
const [isMenu, setIsMenu] = useState(false);

//RN
const bn_AdminService = new BN_AdminService ();


const addOrder = async () => {
console.log(inputs)
const response = await bn_AdminService.addOrders(inputs);
};

const [inputs, setInputs] = useState<INewOrders> (startOrder);

//**************

//Cleaner dropdown list
const [selectedDropDownCleanerValue, setSelectedDropDownCleanerValue] = useState(''); 

const [cleaners, setCleaners] = useState<ICleaners[]>([]);
const [cleanerDescription, setCleanerDescription] = useState("")
const [restaurantName, setRestaurantName] = useState("")

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

const [menues, setMenues] = useState<IMenues[]>([]);

const getAllMenues = async () => {
    const menu = await bn_AdminService.getAllMenues();
    setMenues(menu);
    console.log(menu);
    };

     
//************

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
}


return (
<>
<div className="wrapper">

<h2>Add New Order</h2>
<br></br>
<br></br>
<button className = "searchButton" onClick={createNewOrder}>Create New Order</button>

{isOpen && <form className="form" onSubmit ={handleSubmit}>  


<div className="row">
<div className="column">

<label> Date and Time:&nbsp;
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
placeholder='Time...'
type ="time"
value = {inputs.OrderTime}
name="OrderTime"
required
onChange = {handleChange}/>

<label> Customer:&nbsp;
<input
className="input"
placeholder='Name...'
type ="text"
value = {inputs.customerName}
name="customerName"
required
onChange = {handleChange}/>
</label>

<input
className="input"
type ="text"
placeholder='Address...'
value = {inputs.customerAddress}
name="customerAddress"
onChange = {handleChange}/>

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

<input
className="input"
type ="text"
placeholder='Phone...'
value = {inputs.customerPhone}
name="customerPhone"
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
            {cleaner.cleanerName}&nbsp;{cleaner.cleanerDescription}
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
            {menu.restaurantName} &nbsp;{menu.menuDescription}
          </option> 
        ))} 
  </select> 
  </label>


<button
className = "bookAdminButton"
type="submit">Save</button>

</div>
<div className="column">

<br></br>
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

<label> Cleaning review:&nbsp;
<input
className="input"
type ="text"
value = {inputs.cleaningReview}
name="cleaningReview"
onChange = {handleChange}/>
</label>

<input
className="input"
type ="text"
value = {inputs.cleaningReviewComment}
name="cleaningReviewComment"
onChange = {handleChange}/>


<label> Menu review:&nbsp;
<input
className="input"
type ="text"
value = {inputs.menuReview}
name="menuReview"
onChange = {handleChange}/>
</label>

<input
className="input"
type ="text"
value = {inputs.menuReviewComment}
name="menuReviewComment"
onChange = {handleChange}/>


<label> Cleaning prize:&nbsp;
<input
className="input"
placeholder='Cleaner Prize...'
type ="number"
value = {inputs.cleanerPrize}
name="cleanerPrize"
onChange = {handleChange}/>
</label>


<label> Food prize:&nbsp;
<input
className="input"
type ="number"
placeholder='Food prize...'
value = {inputs.menuPrizeTotal}
name="menuPrizeTotal"
onChange = {handleChange}/>
</label>

<label> Total prize:&nbsp;
<input
className="input"
type ="number"
placeholder='Total prize...'
value = {inputs.orderPrizeTotal}
name="orderPrizeTotal"
onChange = {handleChange}/>
</label>

</div>
</div>

</form>}
</div>
</>
);
}





