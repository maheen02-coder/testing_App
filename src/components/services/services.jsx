import React from "react";
import "./services.css";
const Services = () => {
  return (
    <>
      <center className="center1">
        <pre className="services_design">---Services We Provide--</pre>

        <h1 className="margin_h1">
          My Special Service For Your <br /> Business Development
        </h1>

        <table border={1} className="table_margin_padding">
          <tr>
            <td className="td_gap">01</td>
            <td className="td_gap">
              <ul>
                <li>
                  <h1>Designer</h1>
                </li>
                <li>Illustration Design</li>
              </ul>
            </td>
            <td className="td_gap">
              Duis aute irure dolor in reprehenderit in voluptate velit <br />{" "}
              esse cillum dolore eu fugiat nulla pariatur. sunt in culpa <br />{" "}
              qui officia deserunt mollit
            </td>
          </tr>
          <tr>
            <td className="td_gap">02</td>
            <td className="td_gap">
              <ul>
                <li>
                  <h1>Branding</h1>
                </li>
                <li>Buisness Branding</li>
              </ul>
            </td>
            <td className="td_gap">
              Duis aute irure dolor in reprehenderit in voluptate velit <br />{" "}
              esse cillum dolore eu fugiat nulla pariatur. sunt in culpa <br />{" "}
              qui officia deserunt mollit
            </td>
          </tr>
          <tr>
            <td className="td_gap">03</td>
            <td className="td_gap">
              <ul>
                <li>
                  <h1>UI/UX Design</h1>
                </li>
                <li>Web UI/UX Design</li>
              </ul>
            </td>
            <td className="td_gap">
              Duis aute irure dolor in reprehenderit in voluptate velit <br />{" "}
              esse cillum dolore eu fugiat nulla pariatur. sunt in culpa <br />{" "}
              qui officia deserunt mollit
            </td>
          </tr>
          <tr>
            <td className="td_gap">04</td>
            <td className="td_gap">
              <ul>
                <li>
                  <h1>Web Design</h1>
                </li>
                <li>Application Design</li>
              </ul>
            </td>
            <td className="td_gap">
              Duis aute irure dolor in reprehenderit in voluptate velit <br />{" "}
              esse cillum dolore eu fugiat nulla pariatur. sunt in culpa <br />{" "}
              qui officia deserunt mollit
            </td>
          </tr>
          <tr>
            <td className="td_gap">05</td>
            <td className="td_gap">
              <ul>
                <li>
                  <h1>SEO Analytics</h1>
                </li>
                <li>Digital Marketing</li>
              </ul>
            </td>
            <td className="td_gap">
              Duis aute irure dolor in reprehenderit in voluptate velit <br />{" "}
              esse cillum dolore eu fugiat nulla pariatur. sunt in culpa <br />{" "}
              qui officia deserunt mollit
            </td>
          </tr>
        </table>
        <pre className="services_design">---Working Process---</pre>
        <h1>
          Your Dream Website In Just Few <br /> Steps
        </h1>
      </center>
      <div className="parent_div">
        <div className="div_box_1"> 
          <h1 className="h1_size_style">Concept</h1>
          <pre className="pre_style">
            Nemo enim ipsam voluptatem voluptas sit <br /> aspernatur aut odit
            aut fugit
          </pre>
          <ul className="ul_list_bullets_colors">
            <li className="sizing">Reviewing any existing branding</li>
            <li className="sizing">Target audience and competitors research</li>
            <li className="sizing">Developing a strategy</li>
          </ul>
        </div>
        <div className="div_box_2">
          <h1 className="design_element">Design</h1>
          <pre className="pre_style">
            Nemo enim ipsam voluptatem voluptas sit <br /> aspernatur aut odit
            aut fugit
          </pre>
          <ul className="ul_list_bullets_colors">
            <li className="sizing">Developing Wireframes and Mockups</li>
            <li className="sizing">Choosing Typography, Color palattes</li>
            <li className="sizing">Refining the Design</li>
          </ul>
        </div>
        <div className="div_box_2">
          <h1 className="design_element">Design</h1>
          <pre className="pre_style">
            Nemo enim ipsam voluptatem voluptas sit <br /> aspernatur aut odit
            aut fugit
          </pre>
          <ul className="ul_list_bullets_colors">
            <li className="sizing">Developing Wireframes and Mockups</li>
            <li className="sizing">Choosing Typography, Color palattes</li>
            <li className="sizing">Refining the Design</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Services;
