import React from "react";
import Navbar from "../Components/Navbar";

function Output({srcDoc}) {

  return (
    <div className="right-page">
    <Navbar />
      <h3 className="heading">WEBSITE</h3>
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameborder="0"
        width="100%"
        height="100%"
        onScroll={false}
        overflow="hidden"
        onScrollCapture={false}
        
      ></iframe>
    </div>
  );
}

export default Output;
