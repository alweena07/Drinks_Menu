import React, { Fragment } from "react";
import "../styles/TakeAway.css";

const TakeAwayFeatured = (props) => {
  return (
    <Fragment>
      <div className="TakeAway__Wrapper">
        <p style={{ fontSize: "2em", color: "#fff", fontFamily: "serif" }}>
          TAKE AWAY
        </p>
        <p>Test test test test test test test test </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG"
          alt="not found"
          style={{ height: "80px", width: "80px" }}
        />
      </div>
    </Fragment>
  );
};

export default TakeAwayFeatured;
