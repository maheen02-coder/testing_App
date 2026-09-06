import React from "react";
import './testinomal.css'
import man from '../../assets/mannew.png'
import man1 from '../../assets/man2.png'
import man2 from '../../assets/man3.png'
import line from'../../assets/line.png'
const Testinomal=()=>{
  return(
    <>
    <h1 className="h1_color">Key Features:-</h1>
    <center>
    <h1>Happy Words From Happy <br /> Costomer</h1>
    </center>
    <div className="dis1_flex">
      <div>
      <ul>
      <li className="setting_li"><img src={man} alt="" /></li>
      <li className="setting_li"><img src={man1} alt="" /></li>
      </ul>
      </div>
      <div>
       <pre className="pre_design"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae modi,<br /> nulla rerum maxime sunt veniam error alias sed dignissimos quas atque expedita obcaecati <br /> nemo dolorum. Libero, ratione. Placeat, nisi! </pre>
      </div>
      <div>
        <ul>
          <li className="setting_li"><img src={man2} alt="" /></li>
          <li className="setting_li"><img src={line} alt="" /></li>
        </ul>
      </div>
    </div>
    </>
  )
}
export default Testinomal;