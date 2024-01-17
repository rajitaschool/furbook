import React from "react";
import "./css/descriptions.css";

function Descriptions() {
  return (
    <div className="container-fluid Descriptions">
      <div className="row">
        <div className="col">
          <h5 className="title-text">Real Cats</h5>
          <p className="sub-text">
            Cats are awesome. They are the best. They are the cutest. They are
            the most cuddly.
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">Real Dogs</h5>
          <p className="sub-text">
            Dogs are awesome. They are the best. They are the cutest. They are
            the most cuddly.
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">Real Friends</h5>
          <p className="sub-text">
            Rajit A Changing the description for the sub text in the description
            component.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;
