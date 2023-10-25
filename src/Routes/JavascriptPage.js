import React, { useState } from "react";
import { SiJavascript } from "react-icons/si";
import "../App.css";
import Navbar from "../Components/Navbar";

function JavascriptPage({ js, handleChange }) {
  const [value, setValue] = useState("copy");

  return (
    <div className="right-page">
      <Navbar />
      <h3 className="heading">
        <SiJavascript style={{ fontSize: "20px", marginRight: "2px" }} />
        JAVASCRIPT
      </h3>
      <textarea
        className="textarea"
        onChange={(e) => handleChange(e.target.value)}
      >
        {js}
      </textarea>
      <button className="copybtn" onClick={() => setValue("Copied")}>
        {value}
      </button>
    </div>
  );
}

export default JavascriptPage;
