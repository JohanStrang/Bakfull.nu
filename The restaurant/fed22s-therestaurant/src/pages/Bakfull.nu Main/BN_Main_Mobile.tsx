import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "./BN_Main.scss";



export default function BN_Main_Mobile (){
    return (
        <>
        <main>
            <section>
                   <div className="mobile-container">
                   <h1>Bakfull.nu</h1>
                   <p>Behöver du hjälp med röjning efter en fest!</p>
                   <div className="row">
                        <div className="column">
                            <button className = "help-now-button">Hjälp NU!</button>
                        </div>
                        <div className="column">
                            <h2>Kolumn 2</h2>
                             <div className="mobile-box"></div>
                        </div>
                    </div>
                  
                </div>
            </section>
        </main>
        </>
    )
}