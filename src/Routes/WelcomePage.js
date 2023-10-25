import React from "react";
import Navbar from "../Components/Navbar";

function WelcomePage() {
  return (
    <>
      <div className="right-page">
        <Navbar />
        <div className="hello-page">
          <h1
            style={{
              width:"60%",
              height:"200px",
              padding:"20px",
              textAlign: "center",
              margin:"100px auto",
              marginTop: "160px",
              wordSpacing: "3px",
              borderRadius:"5px",
              backdropFilter:"blur(3px)",
              boxShadow:"0px 20px 40px 5px rgba(0,0,0,0.5)",
              color:"#14213d"

            }}
          >
            HELLO !!
            <br />
            <br />
            <span>
              <b style={{ color: "#14213d" }}>EDVANTA CODE EDITOR</b>
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
