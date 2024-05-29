import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState, useEffect} from "react";
import "./bookingAdmin.scss";
import { AdminService } from "../../services/admin.service";
import { INewBooking } from "../../models/NewBooking";

//RN
import "./RN_cleanerAdmin.scss";
import { BN_AdminService } from "../../services/BN_admin.service";
import { ICleaners, INewCleaners} from "../../models/RN_Cleaners";


//RN
const startCleaner:INewCleaners = {
"cleanerName": "",
"cleanerAddress": "",
"cleanerPostalCode": "",
"cleanerCity": "",
"cleanerPhone": "",
"cleanerURL": "",
"cleanerContact": "",
"cleanerDescription": "",
"cleanerPrize": 100,
"cleanerUserName": "",
"cleanerPassword": "",
}




export default function CleanerAdmin() {


//RN
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
<h3>Cleaner</h3>

<label> Cleaner name:&nbsp;
<input
className="input"
type ="text"
value = {inputs.cleanerName}
name="cleanerName"
required
onChange = {handleChange}/>
</label>


<label> Address:&nbsp;
<input
className="input"
type ="text"
value = {inputs.cleanerAddress}
name="cleanerAddress"
required
onChange = {handleChange}/>
</label>


<label> Postal Code:&nbsp;
<input
className="input"
type ="text"
value = {inputs.cleanerPostalCode}
name="cleanerPostalCode"
required
onChange = {handleChange}/>
</label>


<label> City:&nbsp;
<input
className="input"
type ="text"
value = {inputs.cleanerCity}
name="cleanerCity"
required
onChange = {handleChange}/>
</label>

<label> Phone:&nbsp;
<input
className="input"
type ="text"
value = {inputs.cleanerPhone}
name="cleanerPhone"
required
onChange = {handleChange}/>
</label>

<label> Web address:&nbsp;
<input
className="input"
type ="text"
value = {inputs.cleanerURL}
name="cleanerURL"
required
onChange = {handleChange}/>
</label>

<label> Contact person:&nbsp;
<input
className="input"
type ="text"
value = {inputs.cleanerContact}
name="cleanerContact"
required
onChange = {handleChange}/>
</label>
</div>

<div className="column">  
<h3>User Admin</h3>

<label> User Name:&nbsp;
<input
className="input"
type ="text"
value = {inputs.cleanerUserName}
name="cleanerUserName"
required
onChange = {handleChange}/>
</label>

<label> Password:&nbsp;
<input
className="input"
type ="text"
value = {inputs.cleanerPassword}
name="cleanerPassword"
required
onChange = {handleChange}/>
</label>

<br></br>
<br></br>
<h3>Cleaner item</h3>

<label> Cleaner Decription:&nbsp;
<input
className="input"
type ="text"
value = {inputs.cleanerDescription}
name="cleanerDescription"
required
onChange = {handleChange}/>
</label>

<label> Price:&nbsp;
<input
className="input"
type ="number"
value = {inputs.cleanerPrize}
name="cleanerPrize"
required
onChange = {handleChange}/>
</label>

</div>

<button
className = "bookAdminButton"
type="submit">Save</button>
<br></br>
<br></br>

</div>
</form>
</div>
</>
);
}





