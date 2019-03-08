import React from "react";
import "./Title.css";

function Title(props) {
  return <div>
  <h1 className="title">{props.children}</h1>
  <span>Click Any Image To Start!</span>
  <h2 className="scores"> 
  Score: {props.score} 
  Top score: {props.topscore}</h2>
    </div>
}

export default Title;
