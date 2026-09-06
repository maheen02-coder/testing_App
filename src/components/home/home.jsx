import React from "react";
import man_img from "../../assets/man.png";
import "./home.css";
import About from "../about/about";
import Work from "../Work/work";
import Services from "../services/services";
import Testinomal from "../testinomal/testinomal";
import Blog from "../Blog/Blog";
import Contact from "../Contact/contact";
const Home = () => {
  return (
    <>
      <main className="container">
        <section>
          <p>
            Currently available for freelance <br />
            worldwide ↗
          </p>
          <h1 className="p_for_padding">
            CREATIVE VISUAL <br />
            DESIGNER
          </h1>
          <b>╰┈➤ </b>
          <button className="btn2"> ▶</button>
        </section>
        <div>
          <img src={man_img} alt="" height={500} />
        </div>
      </main>
      <aside className="last_nav">
        <ul className="last_ul">
          <li>
            <b>+ 021-574-328-301</b>
          </li>
          <li>
            <b>Scroll down</b>
          </li>
        </ul>
      </aside>
      <About />
      <Work />
      <Services />

      <Blog />
      <Contact />
      <Testinomal />
    </>
  );
};
export default Home;
