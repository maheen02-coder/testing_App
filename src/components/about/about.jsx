import React from "react";
import asteric from '../../assets/asteric1.png'
import './about.css'
const About= ()=>{
  return(
    <>
       <center className="center1">
        <img src={asteric} alt="" height={150} width={160}/>
        <h1 className="h1_height">I'm David Matias, I'm a Brand & Webflow Designer, Currently residing <br /> in the lush Victoria Street London, Matias operates globally and is <br /> ready to take on any design challenge.</h1>
        <ul className="flex_ul">
          <li> <button className="btn">ABOUT</button></li>
          <li><button className="btn">EXPERIENCE</button></li>
          <li><button className="btn">EDUCATION</button></li>
          <li><button className="btn">SKILLS</button></li>
        </ul>
       </center>
    </>
  )
}
export default About;