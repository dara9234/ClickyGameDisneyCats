import React from "react";
import "./Navbar.css";

  
function Navbar(props) {
return (
<div>
  <h1 className="nav1">{props.children}</h1>
  {/* <h1> this.setState({ score: this.state.score topscore: this.state.topscore})</h1> */}
  {/* <p>2</p> */}
    </div>
)  
}

export default Navbar;
    

    

   