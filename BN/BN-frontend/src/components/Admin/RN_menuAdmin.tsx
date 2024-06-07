import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState, useEffect} from "react";
import "./RN_Admin.scss";
import { BN_AdminService } from "../../services/BN_admin.service";
import { IMenues, INewMenues} from "../../models/RN_Menues";


//RN
const startMenu:INewMenues = {
"restaurantName": "",
"restaurantAddress": "",
"restaurantPostalCode": "",
"restaurantCity": "",
"restaurantPhone": "",
"restaurantURL": "",
"restaurantContact": "",
"menuDescription": "",
"menuPrize": 0,
"restaurantUserName": "",
"restaurantPassword": "",
}



export default function CleanerAdmin() {

const bn_AdminService = new BN_AdminService ();


const addMenu = async () => {
const response = await bn_AdminService.addMenues(inputs);
};

const [inputs, setInputs] = useState<INewMenues> (startMenu);


const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
const name = e.target.name;
const value = e.target.value;
setInputs(values => ({...values, [name]: value}))
}


const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
e.preventDefault();
console.log(inputs);


addMenu()
//alert ("You created a booking: "+inputs.reservationDate+", " +inputs.reservationTime+", with party size " 
//+inputs.partySize+".")
    setInputs(values => ({...values,"restaurantName": ""}));
    setInputs(values => ({...values,"restaurantAddress": ""}));
    setInputs(values => ({...values,"restaurantPostalCode": ""}));
    setInputs(values => ({...values,"restaurantCity": ""}));
    setInputs(values => ({...values,"restaurantPhone": ""}));
    setInputs(values => ({...values,"restaurantURL": ""}));
    setInputs(values => ({...values,"menuDescription": ""}));
    setInputs(values => ({...values,"restaurantContact": ""}));
    setInputs(values => ({...values,"menuPrize": 0}));
    setInputs(values => ({...values,"restaurantUserName": ""}));
    setInputs(values => ({...values,"restaurantPassword": ""}));
}



return (
<>
<div className="wrapper">

<form onSubmit ={handleSubmit}>
<h2>Add New Menu Item</h2>

<div className="row">
<div className="column">

<h3>Restaurant</h3>

<label> Retaurant name:&nbsp;
<input
className="input"
type ="text"
value = {inputs.restaurantName}
name="restaurantName"
required
onChange = {handleChange}/>
</label>


<label> Address:&nbsp;
<input
className="input"
type ="text"
value = {inputs.restaurantAddress}
name="restaurantAddress"
required
onChange = {handleChange}/>
</label>


<label> Postal Code:&nbsp;
<input
className="input"
type ="text"
value = {inputs.restaurantPostalCode}
name="restaurantPostalCode"
onChange = {handleChange}/>
</label>


<label> City:&nbsp;
<input
className="input"
type ="text"
value = {inputs.restaurantCity}
name="restaurantCity"
onChange = {handleChange}/>
</label>

<label> Phone:&nbsp;
<input
className="input"
type ="text"
value = {inputs.restaurantPhone}
name="restaurantPhone"
onChange = {handleChange}/>
</label>

<label> Web address:&nbsp;
<input
className="input"
type ="text"
value = {inputs.restaurantURL}
name="restaurantURL"
onChange = {handleChange}/>
</label>

<label> Contact person:&nbsp;
<input
className="input"
type ="text"
value = {inputs.restaurantContact}
name="restaurantContact"
onChange = {handleChange}/>
</label>

</div>

<div className="column">

<h3>User Admin</h3>

<label> User Name:&nbsp;
<input
className="input"
type ="text"
value = {inputs.restaurantUserName}
name="restaurantUserName"
required
onChange = {handleChange}/>
</label>

<label> Password:&nbsp;
<input
className="input"
type ="text"
value = {inputs.restaurantPassword}
name="restaurantPassword"
required
onChange = {handleChange}/>
</label>

<br></br>
<br></br>
<h3>Menu Item</h3>

<label> Menu Item Decription:&nbsp;
<input
className="input"
type ="text"
value = {inputs.menuDescription}
name="menuDescription"
required
onChange = {handleChange}/>
</label>

<label> Price:&nbsp;
<input
className="input"
type ="number"
value = {inputs.menuPrize}
name="menuPrize"
required
onChange = {handleChange}/>
</label>

<button
className = "bookAdminButton"
type="submit">Save</button>

</div>
</div>



<br></br>
<br></br>

</form>
</div>
</>
);
}





