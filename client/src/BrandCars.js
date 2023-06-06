import { Card, Container, Row } from "react-bootstrap";
import MainPageCar from "./MainPageCar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BrandCars(props) {
  const brand = props.brand;
  const [cars, setCar] = useState({});
  const [loaded, setLoaded] = useState(false);

  const getCar = async () => {
    const res = await fetch(`http://localhost:3000/car/${brand}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setCar(data.result[0]);
    setLoaded(true);
  };

  useEffect(() => {
    getCar();
  }, []);

  if (!loaded)
    return (
      <>
        <p>Loading car...</p>
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
              {cars.map((cars) => (
                <MainPageCar
                  id={cars.id}
                  name={cars.name}
                  engine={cars.engine}
                  power={cars.power}
                  color={cars.color}
                  price={cars.price}
                  img={cars.img}
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
