import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState } from "react";
import { BN_Footer } from "../../components/Footer/BN_Footer";
import { BN_Navbar } from "../../components/Navbar/BN_Navbar";
import { BN_Navbar_Main } from "../../components/Navbar/BN_Navbar_Main";
import { BN_Header } from "../../components/Header/BN_Header";
import "./BN_Main.scss";
import cleaner2 from "../../assets/images/cleaner2.png"
import cleaner1 from "../../assets/images/cleaner1.jpg"

export default function BN_Main_Mobile (){

    return (
        <>
        <main className='main'>
     
            <section> 
           <BN_Navbar_Main></BN_Navbar_Main>
                <div className="mobile-container">
               
                   <div className="rowMain">
                        <div className="columnMain">
                             
                        <a href={'http://localhost:5173/bn_main_order/'}>
 
                            <div className="cleanBox">
 
                            <img className="clean"
                                src = { cleaner2 }
                                alt = "Cleaning Service"

                        />
                         <p className = "cleanName"> Hjälp NU!</p>
                        </div>
                        </a>
                        </div>

                        <div className="columnMain">
                             
                             <a href={'http://localhost:5173/bn_main_order/'}>
      
                                 <div className="cleanBox">

        
                                 <img className="clean"
                                    src="/IMG_9706___media_library_original_2822_1881.jpg"
                                     alt="Pre-book Service"
                             />
                               <p className = "cleanName"> Förboka!</p>
                             </div>
                             </a>
                             </div>
                    </div>
                    <p className="textMain"></p>

                    <hr></hr>

                    <h2 className="headerMain">Bakfull.nu</h2>

                        <p className="textMain">You and your friend have been partying all night. 
                        Now you have a mouth that tastes - well you know what - and an apartment in chaos. 
                        The thought of cleaning up the mess is just a bit too much and you desperately need 
                        some refreshing drinks and some hangover food...</p>
                        
                        <p className="textMain">
                        So what do you do? You contact Bakfull.nu and a few discrete people show up and
                        take care of everything for your place to be presentable again and the food and drinks
                        get deliverd to your door.</p>
                    </div>
            
                    <hr></hr> 
                <div>
                   
                </div>
            </section>
        </main>
        
      
        </>
    )
}