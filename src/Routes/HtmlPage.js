import React, { useState } from "react";
import {ImHtmlFive} from 'react-icons/im';
import Navbar from "../Components/Navbar";
import "../App.css";

function HtmlPage({html, handleChange}) {

  const [value, setValue] = useState("copy");

  return (
    <div className="right-page">
    <Navbar />
      <h3 className="heading"><ImHtmlFive style={{fontSize:"20px"}}/>HTML</h3>
      <textarea className="textarea" value={html} onChange={(e) => handleChange(e.target.value)}>{value}</textarea>

      <button className="copybtn" onClick={() => setValue("Copied")}>
        {value}
      </button>
    </div>
  );
}
export default HtmlPage;
