import { Card, Container, Row } from "react-bootstrap";
import MainPageCar from "./MainPageCar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BrandCars(props) {
  const brand = props.brand;
  console.log(brand);
  const [cars, setCar] = useState({});
  const [loaded, setLoaded] = useState(false);

  const getCar = async () => {
    const res = await fetch(`http://localhost:3000/car/brand/${brand}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setCar(data.result);
    setLoaded(true);
    console.log(data.result);
  };

  useEffect(() => {
    getCar();
  }, []);

  if (!loaded || !cars)
    return (
      <>
        <p>Loading BrandCars...</p>
      </>
    );

  return (
    <>
      <Container>
        <Card
          style={{
            margin: "50px",
            padding: "50px",
            backgroundColor: "#b6d7a8",
          }}
        >
          <Card.Title>
            <h2>{props.brand}</h2>
          </Card.Title>
          <Container>
            <Row>
              {cars.map((car) => (
                <MainPageCar
                  id={car.id}
                  name={car.name}
                  engine={car.engine}
                  power={car.power}
                  color={car.color}
                  price={car.price}
                  img={car.img}
                />
              ))}
            </Row>
          </Container>
        </Card>
      </Container>
    </>
  );
}

export default BrandCars;
