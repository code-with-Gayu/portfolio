import React from "react";
import App from './App';
import Navbar from "../compounents/navbar";



function Section ({id,title,children}){
    return(
        <section id={id} className="min-vh-100 d-flex align-items-centre justify-content-centre p-5" tabIndex={-1}>
        <div className="container text-centre">
        <h2 className="display-4 fw-bold mb-3">{title}</h2>
        <p className="lead">{children}</p>

        </div>
        </section>
    );
    
}
function Nav() {
    return(
        <div>
        <Navbar/>
        <main className="pt-5 mt-5">
         <section id="home" title="Home">
          <App/>
         </section>
         <section>
            <Navbar/>
         </section>
        </main>
        </div>
    )
}