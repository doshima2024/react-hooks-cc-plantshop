import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import {useState, useEffect} from "react";

function PlantPage() {

 const [plants, setPlants] = useState([{id: "1", name: "aloe", image: "./images/aloe.jpg", price: 15.99}])

  useEffect(() => {
    fetch(" http://localhost:6001/plants")
    .then(response => response.json())
    .then(plantData => setPlants(plantData))
  }, []) 

  function addPlant(newPlant) {
    setPlants([...plants, newPlant])
    }

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
