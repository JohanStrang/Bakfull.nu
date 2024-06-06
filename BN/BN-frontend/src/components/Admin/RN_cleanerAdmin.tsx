import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState, useEffect} from "react";
import "./RN_Admin.scss";
import "../Admin/bookingAdmin.scss";
import { BN_AdminService } from "../../services/BN_admin.service";
import { ICleaners, INewCleaners} from "../../models/RN_Cleaners";

const startCleaner:INewCleaners = {
"cleanerName": "",
"cleanerAddress": "",
"cleanerPostalCode": "",
"cleanerCity": "",
"cleanerPhone": "",
"cleanerURL": "",
"cleanerContact": "",
"cleanerDescription": "",
"cleanerPrize": 0,
"cleanerUserName": "",
"cleanerPassword": "",
}


export default function CleanerAdmin() {

const bn_AdminService = new BN_AdminService ();

const addCleaner = async () => {
const response = await bn_AdminService.addCleaner(inputs);
};

const [inputs, setInputs] = useState<INewCleaners> (startCleaner);

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
const name = e.target.name;
const value = e.target.value;
setInputs(values => ({...values, [name]: value}))
}

const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
e.preventDefault();
console.log(inputs);

addCleaner()
    setInputs(values => ({...values,"cleanerName": ""}));
    setInputs(values => ({...values,"cleanerAddress": ""}));
    setInputs(values => ({...values,"cleanerPostalCode": ""}));
    setInputs(values => ({...values,"cleanerCity": ""}));
    setInputs(values => ({...values,"cleanerPhone": ""}));
    setInputs(values => ({...values,"cleanerURL": ""}));
    setInputs(values => ({...values,"cleanerDescription": ""}));
    setInputs(values => ({...values,"cleanerContact": ""}));
    setInputs(values => ({...values,"cleanerPrize": 0}));
    setInputs(values => ({...values,"cleanerUserName": ""}));
    setInputs(values => ({...values,"cleanerPassword": ""}));
}

return (
<>
<div className="wrapper">

<form onSubmit ={handleSubmit}>
<h2>Add New Cleaner</h2>

<div className="row">
<div className="column">

<label> Cleaner:&nbsp;
<input
className="input"
type ="text"
placeholder='Cleaner name...'
value = {inputs.cleanerName}
name="cleanerName"
required
onChange = {handleChange}/>
</label>

<input
className="input"
type ="text"
placeholder='Cleaner address...'
value = {inputs.cleanerAddress}
name="cleanerAddress"
onChange = {handleChange}/>

<input
className="input"
type ="text"
placeholder='Postal code...'
value = {inputs.cleanerPostalCode}
name="cleanerPostalCode"
onChange = {handleChange}/>

<input
className="input"
type ="text"
placeholder='City...'
value = {inputs.cleanerCity}
name="cleanerCity"
onChange = {handleChange}/>

<input
className="input"
type ="text"
placeholder='Phone...'
value = {inputs.cleanerPhone}
name="cleanerPhone"
onChange = {handleChange}/>

<input
className="input"
type ="text"
placeholder='Homepage...'
value = {inputs.cleanerURL}
name="cleanerURL"
onChange = {handleChange}/>

<input
className="input"
type ="text"
placeholder='Cleaner contact...'
value = {inputs.cleanerContact}
name="cleanerContact"
required
onChange = {handleChange}/>

</div>

<div className="column">  

<label> Service Decription:&nbsp;
<input
className="input"
type ="text"
placeholder='Cleaner description...'
value = {inputs.cleanerDescription}
name="cleanerDescription"
required
onChange = {handleChange}/>
</label>

<label> Prize:&nbsp;
<input
className="input"
type ="number"
placeholder='Prize...'
value = {inputs.cleanerPrize}
name="cleanerPrize"
required
onChange = {handleChange}/>
</label>

<label> User Name and password:&nbsp;
<input
className="input"
type ="text"
placeholder='User name...'
value = {inputs.cleanerUserName}
name="cleanerUserName"
required
onChange = {handleChange}/>
</label>

<input
className="input"
type ="text"
placeholder='Password...'
value = {inputs.cleanerPassword}
name="cleanerPassword"
required
onChange = {handleChange}/>

</div>
<button
className = "bookAdminButton"
type="submit">Save</button>
</div>

<br></br>
<br></br>
</form>
</div>
</>
);
}





