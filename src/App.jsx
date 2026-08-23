import { useState } from "react";
import "./App.css";
import logo from "./assets/mlogo.png";
import man_img from"./assets/man.png"

function App() {
  return (
    <>
      <nav className="navbar">
        <ul className="logo_ul">
          <li className="logo"><img src={logo}  height={70} width={70}/></li>
          <li><h2>Matias</h2></li>
        </ul>
        <ul className="li_ul">
          <li className="h_color">HOME</li>
          <li>ABOUT</li>
          <li>WORKS</li>
          <li>SERVICES</li>
          <li>TESTINOMAL</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>
        <ul className="btn_ul">
          <li><button className="btn_1">Let's Talk ➔</button></li>
        </ul>
      </nav>
      <main className="container">
        <section>
          <p>
          Currently available for freelance <br />
          worldwide ↗
        </p>
        <h1>
        
          CREATIVE VISUAL <br />
          DESIGNER 
        </h1><b>╰┈➤ </b>
         <button class="btn2"> ▶</button>
        </section>
        <div>
          <img src={man_img} alt="" height={500}/>
        </div>
      </main>
    </>
  );
}

export default App;
