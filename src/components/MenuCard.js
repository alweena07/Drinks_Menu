import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MenuCard.css";

const MenuCard = (props) => {
let navigate = useNavigate();
  return (
    <Fragment>
      <div className="wrapper"
      onClick={() => navigate(`/menu/${props.item.id}`)}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG"
          alt="not found"
        />
        <h1>{props.item.title}</h1>
        <ul>
            <li>{props.item.ingredients.join(" ")}</li>
        </ul>
        <p>19.90</p>
      </div>
    </Fragment>
  );
};

export default MenuCard;
