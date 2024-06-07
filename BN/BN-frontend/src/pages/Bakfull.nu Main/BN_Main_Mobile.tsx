import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState } from "react";
import { BN_Footer } from "../../components/Footer/BN_Footer";
import { BN_Navbar } from "../../components/Navbar/BN_Navbar";
import { BN_Navbar_Main } from "../../components/Navbar/BN_Navbar_Main";
import { Lines } from "../../components/Icons/Lines";
import { BN_Header } from "../../components/Header/BN_Header";
import "./BN_Main.scss";
import cleaner2 from "../../assets/images/cleaner2.png"
import cleaner1 from "../../assets/images/cleaner1.jpg"
import cleaning from "../../assets/images/cleaning-service.png" 
import calendar from "../../assets/images/calendar.png" 

export default function BN_Main_Mobile (){

    return (
        <>
        <main className='main'>
     
            <section> 
           <BN_Navbar_Main></BN_Navbar_Main>
                <div className="mobile-container">
               
                   <div className="rowMain">
                        <div className="columnMain">
                             
                        <a href={'http://localhost:5173/bn_main_order_now/'}>
 
                            <div className="cleanBox">
 
                            <img className="clean"
                                src = { cleaning }
                                alt = "Cleaning Service"

                        />
                        <p></p>
                         <p className = "cleanName"> Hjälp NU!</p>
                        </div>
                        </a>
                        </div>

                        <div className="columnMain">
                             
                             <a href={'http://localhost:5173/bn_main_order/'}>
      
                                 <div className="cleanBox">

        
                                 <img className="clean"
                                    src= { calendar }
                                     alt="Pre-book Service"
                             />
                               <p className = "cleanName"> Förboka!</p>
                             </div>
                             </a>
                             </div>

                             <Lines></Lines>
                    </div>

                    
            

                    <h2 className="headerMain">Bakfull.nu</h2>

                        <p className="textMain">You and your friends have been partying all night. 
                        Now you have a mouth that tastes - well you know what - and an apartment in chaos. 
                        <b>The thought of cleaning up the mess is just a bit too much</b> and you desperately need 
                        some refreshing drinks and some hangover food...</p>
                        
                        <p className="textMain">
                        So what do you do? <b>You contact Bakfull.nu</b> and a few discrete people show up and
                        take care of everything for your place to be presentable again and the food
                        is deliverd to your door.</p>

            
                        
                        <Lines></Lines>
                        
                        </div>
                  
                <div>
                    <BN_Footer></BN_Footer>
                </div>

              
            </section>
        </main>
        
      
        </>
    )
}