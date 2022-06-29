import React, { useState, } from "react";
import { useNavigate,Link } from "react-router-dom";
import "./style.css";
const Welcome = () => {
  const Navigate=useNavigate()
  const [classname, setclass] = useState("a");
  const [buttonsclassname, setbuttonsclassname] = useState("buttons");
  return (
    <div className="main">
      <div className="header">
        <h1 className={classname}>Welocome to my portfolio </h1>
      </div>

      <div className={buttonsclassname}>
        <button
        className="startbuttons"
          onClick={() => {
            setclass("b");
            setbuttonsclassname("c")
          }}
        >
          lets take you in ride
        </button>
        <button
        className="startbuttons"
          onClick={() => {
            setclass("b");
            setbuttonsclassname("c")
            setTimeout(() => {
              Navigate("/aboutme")
            }, "1000")
          }}
        >
          i will take look
        </button>
      </div>
    </div>
  );
};
export default Welcome;
