import React from "react";
import "./CatCard.css";


function CatCard(props) {
  return (
    <div className="cat">
      <div className="img-container" >
        <img alt={props.name} src={props.image} />
      </div>
      {/* <span onClick={() => props.CatCard(props.id)} className="nottwice">
        
      </span> */}
    </div>
  );
}

export default CatCard;
