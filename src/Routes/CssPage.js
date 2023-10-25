import React, { useState } from "react";
import { SiCss3 } from "react-icons/si";
import "../App.css";
import Navbar from "../Components/Navbar";

function CssPage({ css, handleChange }) {
  const [value, setValue] = useState("copy");

  return (
    <div className="right-page">
      <Navbar />
      <h3 className="heading">
        <SiCss3 style={{ fontSize: "20px" }} />
        CSS
      </h3>
      <textarea
        className="textarea"
        onChange={(e) => handleChange(e.target.value)}
      >
        {css}
      </textarea>
      <button className="copybtn" onClick={() => setValue("Copied")}>
        {value}
      </button>
    </div>
  );
}

export default CssPage;
