import React, { useState } from "react";
import self from "./img/./me.jpg";
import glf from "./img/200.gif";
import glf2 from "./img/300.gif";
import glf3 from "./img/400.gif";
import "./style.css";

export default function Aboutme() {
  const [glfclas, setGlfclas] = useState("");
  const [disply, setdisply] = useState("none");
  setTimeout(() => {
    setGlfclas("glfclass");
    setdisply("flex");
  }, "5000");
  return (
    <div>
      <div className="header">
        <h1>let me introduce myself </h1>
      </div>
      <div className="imgcontenr">
        <div className="first">
          <div className="child">
            <h2>
              Full-stack developer with solid experience in building responsive
              web applications and design. Strive for excellence in everything I
              do.
            </h2>
            <div className="test" style={{ display: `${disply}` }}>
              <img className={glfclas} src={glf}></img>
              <img className={glfclas} src={glf2}></img>
              <img className={glfclas} src={glf3}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


