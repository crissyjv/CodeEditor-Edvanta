import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { AiFillLock } from "react-icons/ai";
import { AiFillUnlock } from "react-icons/ai";
import { FaSave } from "react-icons/fa";
import "../App.css";

function Sidebar({ children }) {
  let [lock, setLock] = useState(true);
  let [active, setActive] = useState(false);

  return (
    <>
      <div className="sidebar-menu">
        <h3
          style={{
            color: "#fff",
            borderBottom: "2px solid #fff",
            textAlign: "center",
            padding: "4px",
            fontSize: "22px",
            marginBottom: "15px",
          }}
        >
          Just Coding
        </h3>

        <ul className="sidebar-text-wrapper">
          {SidebarData.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.path} className="link-text">
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>

        <button className="btn"  onClick={(e) => setActive(true)}>
          {active ? "SAVED" : "SAVE" }{" "}
          <FaSave />
        </button>

        <button className="btn lock-btn" onClick={() => setLock(!lock)}>
          {lock ? "LOCKED" : "UNLOCKED"}{" "}
          {lock ? (
            <AiFillLock style={{ fontSize: "24px" }} />
          ) : (
            <AiFillUnlock style={{ fontSize: "24px" }} />
          )}
        </button>
      </div>

      <main>{children}</main>
    </>
  );
}

export default Sidebar;
