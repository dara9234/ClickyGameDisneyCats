import React from "react";
import "./Title.css";

function Title(props) {
  return <div>
  <h1 className="title">{props.children}</h1>
  <h1>Click Any Image To Start!</h1>
  <p>You score on every unique click so don't click the same image twice!!! HAVE FUN!!</p>

    </div>
}

export default Title;
