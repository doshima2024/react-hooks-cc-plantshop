import React from "react";
import { useState } from "react";

function NewPlantForm( {name, image, price, addPlant}) {

const [newName, setNewPlantName] = useState("")
const [newImage, setNewImage] = useState("")
const [newPrice, setNewPrice] = useState("")

  function newPlantSubmission(event) {
    event.preventDefault()
    const newPlant = {name: newName, image: newImage, price: newPrice}
    addPlant(newPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={newPlantSubmission}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(event => setNewPlantName(event.target.value))}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(event => setNewImage(event.target.value))}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(event => setNewPrice(event.target.value))}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
