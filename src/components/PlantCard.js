import React from "react";
import {useState} from "react"



function PlantCard( {id, name, image, price}) {

  const [inStock, setInStock] = useState(true)

  function whetherInStock() {
    setInStock((yes) => !yes)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={whetherInStock}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
