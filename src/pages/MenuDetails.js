import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/MenuDetails.css";

const MenuDetails = () => {
  const [menuDetails, setMenuDetails] = useState();
  let { id } = useParams();
  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/coffee/hot")
      .then((response) => {
        let menuObject = response.data;
        let ans = menuObject.filter((menu) => menu.id === Number(id));
        setMenuDetails(ans);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {menuDetails?.map((menu) => (
        <div
          style={{ display: "block", textAlign: "center", margin: "50px" }}
          key={menu.id}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG"
            alt="not found"
            className="Menu__Details__Img"
          />
          <h1 className="Menu__Details_Title">{menu.title}</h1>
          <div className="Menu__Details_Description">{menu.description} </div>
          <div className="Menu__Details_Ingredients">
            {menu.ingredients.join(" ")}
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuDetails;
