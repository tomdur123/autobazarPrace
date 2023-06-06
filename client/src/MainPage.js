import { useState } from "react";
import { useEffect } from "react";
import BrandCars from "./BrandCars";

function MainPage() {
  const [cars, setCars] = useState({});
  const [loaded, setLoaded] = useState(false);

  const getCars = async () => {
    const res = await fetch(`http://localhost:3000/car`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setCars(data.result);
    setLoaded(true);
    console.log(cars);
  };

  useEffect(() => {
    getCars();
  }, []);

  if (!loaded)
    return (
      <>
        <p>Loading cars...</p>
      </>
    );

  return (
    <>
      {cars.map((cars) => (
        // <MainPageCar id={cars.id} name={cars.name} engine={cars.engine} power={cars.power} color={cars.color} price={cars.price} img={cars.img} brand={cars.brand} />
        <BrandCars
          brand={cars.brand}
        />
      ))}
    </>
  );
}

export default MainPage;
