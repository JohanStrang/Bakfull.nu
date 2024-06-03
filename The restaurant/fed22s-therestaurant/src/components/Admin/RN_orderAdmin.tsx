import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState, useEffect} from "react";
import "./bookingAdmin.scss";
import { AdminService } from "../../services/admin.service";
import { INewBooking } from "../../models/NewBooking";

//RN
import "./RN_cleanerAdmin.scss";
import { BN_AdminService } from "../../services/BN_admin.service";
import { IOrders, INewOrders} from "../../models/RN_Orders";


//BN
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

//OLD
const startBooking:INewBooking ={
"guestName": "Test nr 2",
"guestEmail":"testnr2@gmail.com",
"guestPhoneNum":"123456789",
"reservationDate": "06/23/2023",
"reservationTime": "21:00",
"statusForTable":"SECOND_SITTING",
"partySize": 4,
"tableNumber": 9
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
<br></br>
<br></br>

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

<label> Postal Code:&nbsp;
<input
className="input"
type ="text"
value = {inputs.customerPostalCode}
name="customerPostalCode"
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

<label> Phone:&nbsp;
<input
className="input"
type ="text"
value = {inputs.customerPhone}
name="customerPhone"
required
onChange = {handleChange}/>
</label>

<h3>Prize</h3>

<label> Cleaner prize *:&nbsp;
<input
className="input"
type ="number"
value = {inputs.cleanerPrize}
name="cleanerPrize"
required
onChange = {handleChange}/>
</label>


<label> Menu prize *:&nbsp;
<input
className="input"
type ="number"
value = {inputs.menuPrizeTotal}
name="menuPrizeTotal"
required
onChange = {handleChange}/>
</label>

<label> Order prize total *:&nbsp;
<input
className="input"
type ="number"
value = {inputs.orderPrizeTotal}
name="orderPrizeTotal"
required
onChange = {handleChange}/>
</label>

</div>
<div className="column">

<h3>Services delivered</h3>

<label>
<p className="item">Cleaning:
<input
className="input"
type ="checkbox"
name="cleaningDone" checked = {isCleaning}
onChange = {() => setIsCleaning ((prev) => !prev)}/></p>
</label>

<label>
<p className="item">Menu:   
<input
className="input"
type ="checkbox"
name="menuDelivered" checked = {isMenu}
onChange = {() => setIsMenu ((prev) => !prev)}/></p>
</label>

<br></br>
<br></br>
<h3>Reviews</h3>

<label> Cleaning review:&nbsp;
<input
className="input"
type ="text"
value = {inputs.cleaningReview}
name="cleaningReview"
required
onChange = {handleChange}/>
</label>

<label> Cleaning review comment:&nbsp;
<input
className="input"
type ="text"
value = {inputs.cleaningReviewComment}
name="cleaningReviewComment"
required
onChange = {handleChange}/>
</label>


<label> Menu review:&nbsp;
<input
className="input"
type ="text"
value = {inputs.menuReview}
name="menuReview"
required
onChange = {handleChange}/>
</label>

<label> Menu review comment:&nbsp;
<input
className="input"
type ="text"
value = {inputs.menuReviewComment}
name="menuReviewComment"
required
onChange = {handleChange}/>
</label>


<br></br>
<br></br>   
<br></br>
<br></br>
<h3>Cleaner & Menu</h3>


<label> Cleaner Dropdown *:&nbsp;
<select 
      className="dropdown"
      value={inputs.cleanerId} 
      name="cleanerId"
      onChange={handleChangeSelectCleaner}
    > 
      {cleaners.map(cleaner => ( 
        <option key={cleaner._id} value={cleaner._id}> 
          {cleaner.cleanerName} 
        </option> 
      ))} 
</select> 
</label>

<label> Cleaner Description:&nbsp;
<input
className="input"
type ="text"
value = {cleanerDescription}
readOnly = {true}
name="cleanerDescription"
/>
</label>

<label> Menu Dropdown *:&nbsp;
<select 
      className="dropdown"
      value={inputs.menuId}
      name="menuId"
      onChange={handleChangeSelectMenu}
    > 
      {menues.map(menu => ( 
        <option key={menu._id} value={menu._id}> 
          {menu.menuDescription} 
        </option> 
      ))} 
</select> 

</label>
<label> Restaurant name:&nbsp;
<input
className="input"
type ="text"
value = {restaurantName}
readOnly = {true}
name="restaurantName"
/>
</label>
</div>
</div>

<button
className = "bookAdminButton"
type="submit">Save</button>
<br></br>
<br></br>

</form>}
</div>
</>
);
}





