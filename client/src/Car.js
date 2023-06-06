import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Car() {

  const { id } = useParams();
  const [car, setCar] = useState({});
  const [loaded, setLoaded] = useState(false);

  const getCar = async () => {
    const res = await fetch(`http://localhost:3000/car/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "GET",
    });
    const data = await res.json();
    setCar(data.result[0]);
    setLoaded(true);
  }

  useEffect(() => {
    getCar();
}, [])

  if (!loaded)
  return (
      <>
          <p>Loading car...</p>
      </>
  )

  return (
  <>
      <p>Car with id: {car.id}</p>
      <p>name: {car.name}</p>
      <p>engine: {car.engine}</p>
      <p>power: {car.power}</p>
      <p>color: {car.color}</p>
      <p>transmision: {car.transmision}</p>
      <p>weight: {car.weight}</p>
      <p>manufacture_year: {car.manufacture_year}</p>
      <p>price: {car.price}</p>
      <p>img: {car.img}</p>
  </>
  )
}

export default Car;
