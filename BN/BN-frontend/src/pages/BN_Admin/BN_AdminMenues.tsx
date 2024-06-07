import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState } from "react";
import { BN_Navbar } from '../../components/Navbar/BN_Navbar';
import CleanerAdmin from "../../components/Admin/RN_cleanerAdmin";
import MenuAdmin from "../../components/Admin/RN_menuAdmin";
import { BN_AdminService } from "../../services/BN_admin.service";
import "./BN_Admin.scss";
import { ICleaners, INewCleaners} from "../../models/RN_Cleaners";
import { IMenues, INewMenues} from "../../models/RN_Menues";


import useModal from "../../hooks/useModal";
import Modal from "../../components/Admin/bookingModal";

const startMenu:IMenues = {
    "_id":"",
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

export default function BN_AdminMenues (){

const [updateMenu, setUpdateMenu] = useState("")
const [menues, setMenues] = useState<IMenues[]>([]);
const [inputs, setInputs] = useState<IMenues> (startMenu);
const bn_AdminService = new BN_AdminService ();

const { isOpen, toggle } = useModal();

//Functions
const getAllMenues = async () => {
    const menues = await bn_AdminService.getAllMenues();
    setMenues(menues);
    console.log(menues);
    };

const deleteMenuLocal = async (menuId:string) => {
        const response = bn_AdminService.deleteMenu((menuId));
        getAllMenues()
        };

const editMenu = async (inputs:IMenues) => {
    console.log(inputs);
        const response = await bn_AdminService.updateMenues(inputs);
        setUpdateMenu(response);
        getAllMenues();
        toggle()
        };
               
const openModalBooking = async (inputs:IMenues) => {
            setInputs(values => ({...values,"_id": inputs._id}));
            setInputs(values => ({...values,"restaurantName": inputs.restaurantName}));
            setInputs(values => ({...values,"restaurantAddress": inputs.restaurantAddress}));
            setInputs(values => ({...values,"restaurantPostalCode": inputs.restaurantPostalCode}));
            setInputs(values => ({...values,"restaurantCity": inputs.restaurantCity}));
            setInputs(values => ({...values,"restaurantPhone": inputs.restaurantPhone}));
            setInputs(values => ({...values,"restaurantURL": inputs.restaurantURL}));
            setInputs(values => ({...values,"menuDescription": inputs.menuDescription}));
            setInputs(values => ({...values,"restaurantContact": inputs.restaurantContact}));
            setInputs(values => ({...values,"menuPrize": inputs.menuPrize}));
            setInputs(values => ({...values,"restaurantUserName": inputs.restaurantUserName}));
            setInputs(values => ({...values,"restaurantPassword": inputs.restaurantPassword}));
toggle()
        console.log(inputs)
        };


const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
const name = e.target.name;
const value = e.target.value;
setInputs(values => ({...values, [name]: value}))
};

const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
    editMenu(inputs);
    console.log(inputs)
    }


//List All Menues in Table
const menuItems = menues.map((menues) => (
    <div className = "bookinItems" key={(menues._id.toString())} >
    <li className = "listItem">
    <table>
  <thead>
    <tr>
        <th>Name</th>
        <th>Adress</th>
        <th>Contact</th>
        <th>Phone</th>
        <th>Menu</th>
        <th>Prize</th>
        <th> </th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>{menues.restaurantName}</td>
        <td>{menues.restaurantAddress} &nbsp; {menues.restaurantCity} </td>
        <td>{menues.restaurantContact}</td>
        <td>{menues.restaurantPhone} </td>
        <td>{menues.menuDescription}</td>
        <td>{menues.menuPrize} </td>
        <td>
         <span className = "itemButtonGroup">
         <button className = "itemButton" onClick={() => deleteMenuLocal((menues._id).toString())}>Delete</button>
            <button className = "itemButton" onClick={() => openModalBooking(menues)}>Update</button>
        </span>
    </td>
    </tr>
  </tbody>
</table>


    </li>
    </div>));

return (
<>


<BN_Navbar></BN_Navbar>


<Modal isOpen={isOpen} toggle={toggle}>

<button type="button" className="modal-close-button" aria-label="Close" onClick={toggle}>
<span aria-hidden="true">&times;</span>
</button>

<form className="formModal" onSubmit ={handleSubmit}>

<div className="row">
<div className="column">

<input
className="input"
type ="hidden"
value = {inputs._id}
name="_id"
required
onChange = {handleChange}/>


<label> Restaurant:&nbsp;
<input
className="input"
placeholder='Resturant name...'
type ="text"
value = {inputs.restaurantName}
name="restaurantName"
required
onChange = {handleChange}/>
</label>

<input
className="input"
type ="text"
placeholder='Adress...'
value = {inputs.restaurantAddress}
name="restaurantAddress"
required
onChange = {handleChange}/>

<input
className="input"
type ="text"
placeholder='Postal code...'
value = {inputs.restaurantPostalCode}
name="restaurantPostalCode"
required
onChange = {handleChange}/>


<input
className="input"
type ="text"
placeholder='City...'
value = {inputs.restaurantCity}
name="restaurantCity"
required
onChange = {handleChange}/>

<input
className="input"
type ="text"
placeholder='Phone...'
value = {inputs.restaurantPhone}
name="restaurantPhone"
required
onChange = {handleChange}/>

<label> Home page:&nbsp;
<input
className="input"
type ="text"
value = {inputs.restaurantURL}
placeholder='Home page...'
name="restaurantURL"
required
onChange = {handleChange}/>
</label>

<label> Contact person:&nbsp;
<input
className="input"
type ="text"
placeholder='Contact person...'
value = {inputs.restaurantContact}
name="restaurantContact"
required
onChange = {handleChange}/>
</label>

</div>

<div className="column">

<label> Menu Decription:&nbsp;
<input
className="input"
type ="text"
placeholder='Service...'
value = {inputs.menuDescription}
name="menuDescription"
required
onChange = {handleChange}/>
</label>

<label> Price:&nbsp;
<input
className="input"
type ="number"
placeholder='Prize...'
value = {inputs.menuPrize}
name="menuPrize"
required
onChange = {handleChange}/>
</label>

<label> User admin:&nbsp;
<input
className="input"
type ="text"
placeholder='User name...'
value = {inputs.restaurantUserName}
name="restaurantUserName"
required
onChange = {handleChange}/>
</label>

<input
className="input"
type ="text"
placeholder='Password...'
value = {inputs.restaurantPassword}
name="restaurantPassword"
required
onChange = {handleChange}/>

<br></br>
<br></br>
<button className = "bookAdminButton" onClick={() => editMenu((inputs))}>Update</button>

</div>
</div>
</form>
</Modal>

<div className="wrapper">
<h2>List Menu Items</h2>
<br></br>

<button className = "searchButton" onClick={getAllMenues}>List All</button>
<br></br>
<br></br>
{menuItems}
<br></br>

</div>
<MenuAdmin></MenuAdmin>
</>
);

};

