
import { BN_Navbar_Main } from "../../components/Navbar/BN_Navbar_Main";
import "./BN_Main.scss";
import CreditCardForm from "../../components/CreditCard/CreditCard"
import { Link } from "react-router-dom";

export const BN_Payment = () => {
    return (
        <>
        <BN_Navbar_Main></BN_Navbar_Main>
        <main>
            <section>
              
        <CreditCardForm></CreditCardForm>         

            </section>
        </main>
        </>
    )
}