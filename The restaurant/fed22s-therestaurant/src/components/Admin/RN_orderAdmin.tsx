import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState, useEffect} from "react";
import "./bookingAdmin.scss";
import { AdminService } from "../../services/admin.service";
import { INewBooking } from "../../models/NewBooking";

//RN
import "./RN_cleanerAdmin.scss";
import { BN_AdminService } from "../../services/BN_admin.service";
import { IOrders, INewOrders} from "../../models/RN_Orders";


//RN
const startOrder:INewOrders = {
"OrderDate": "",
"OrderTime": "",
"customerName": "",
"customerAddress": "",
"customerPostalCode": "",
"customerCity": "",
"customerPhone": "",
"cleanerOrderId": "",
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
const response = await bn_AdminService.addOrders(inputs);
};

const [inputs, setInputs] = useState<INewOrders> (startOrder);


const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
const name = e.target.name;
const value = e.target.value;
setInputs(values => ({...values, [name]: value}))
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
    setInputs(values => ({...values,"cleanerOrderId": ""}));
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

<form onSubmit ={handleSubmit}>  
<h2>Add New Order</h2>
  
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
<h3>Refernce data (internal)</h3>

<label> Order ID *:&nbsp;
<input
className="input"
type ="text"
value = {inputs.cleanerOrderId}
name="cleanerOrderId"
required
onChange = {handleChange}/>
</label>

<label> Menu ID *:&nbsp;
<input
className="input"
type ="text"
value = {inputs.menuId}
name="menuId"
required
onChange = {handleChange}/>
</label>
</div>
</div>

<button
className = "bookAdminButton"
type="submit">Save</button>
<br></br>
<br></br>

</form>
</div>
</>
);
}





