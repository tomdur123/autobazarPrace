import Car from "./Car";
import { Route, Routes } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";
import MainPage from "./MainPage";

function App() {
  return (
    <>
     <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="Skoda">Škoda</Nav.Link>
              <Nav.Link href="Audi">Audi</Nav.Link>
              <Nav.Link href="Lancia">Lancia</Nav.Link>
              <Nav.Link href="Ford">Ford</Nav.Link>
              <Nav.Link href="MG">MG</Nav.Link>
              <Nav.Link href="Renault">Renault</Nav.Link>
              <Nav.Link href="Peugeot">Peugeot</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact index element={<MainPage />} />
        <Route path="car/:id" element={<Car />} />
        <Route path="*"  />
      </Routes>
    </>
  );
}

export default App;
