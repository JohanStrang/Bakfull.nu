import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState } from "react";
import { BN_Navbar_Main } from '../../components/Navbar/BN_Navbar_Main';
import CleanerAdmin from "../../components/Admin/RN_cleanerAdmin";
import OrderAdmin from "../../components/Admin/RN_orderAdmin";
import { BN_AdminService } from "../../services/BN_admin.service";
import "./BN_Main.scss";
import { ICleaners, INewCleaners} from "../../models/RN_Cleaners";
import { IMenues, INewMenues} from "../../models/RN_Menues";
import { IOrders, INewOrders, IOrdersResponse} from "../../models/RN_Orders";
import OrderAdminMain from "../../components/Admin/RN_orderAdminMain";

import useModal from "../../hooks/useModal";
import Modal from "../../components/Admin/bookingModal";

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

export default function BN_MainOrder (){

//Modal is not used today in this function
const { isOpen, toggle } = useModal();

return (
<>

<BN_Navbar_Main></BN_Navbar_Main>

<Modal isOpen={isOpen} toggle={toggle}>
<button type="button" className="modal-close-button" aria-label="Close" onClick={toggle}>
<span aria-hidden="true">&times;</span>
</button>
</Modal>

<OrderAdminMain></OrderAdminMain>

</>
)
};