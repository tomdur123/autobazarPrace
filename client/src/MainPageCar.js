import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

function MainPageCar(props) {
  return (
    <>
      <Col>
        <Card style={{ width: "512px" }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              <b>motor:</b> {props.engine} <br></br>
              <b>výkon:</b> {props.power} <br></br>
              <b>barva:</b> {props.color} <br></br>
              <b>cena:</b> {props.price}
            </Card.Text>
            <Link to={`car/${props.id}`}>
              <b>Více info</b>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default MainPageCar;
