import { LineThrough } from "../../components/Icons/LineThrough";
import { Lines } from "../../components/Icons/Lines";
import { BN_Navbar_Home } from "../../components/Navbar/BN_Navbar_Home";
import { BN_Footer } from "../../components/Footer/BN_Footer";


import mess3 from "../../assets/images/mess3.jpg" 

import { Geolocation } from '../../components/Geolocation/geolocation';


import "./Home.scss";

export const Home = () => {
  return (
    <>
   
      <BN_Navbar_Home></BN_Navbar_Home>
      <main className="main-container">
      <h2>Welcome to Bakfull.nu!</h2>
      <p>Your home for cleaning and food services when you need it the most...</p>
      <p>Please choose whether you are a Customer, Cleaner, Restuarant or Admin in the Menu above! </p>
        <div className="hero-wrapper">
          <img
            src= { mess3 }
            alt="Cleaning"
            width="1000px"
            height="600"
            className="hero-img"
          />
        </div>

        <div>
          <BN_Footer></BN_Footer>
        </div>

      </main>
  
    </>
  );
};
