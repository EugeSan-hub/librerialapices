import { Navbar, Container, Nav } from "react-bootstrap";

const Menu = () => {
  return (
  <>
    <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <i className="bi bi-palette fs-3"></i> Libreria101
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>Inicio</Nav.Link>
            <Nav.Link>Administrador</Nav.Link>
            <Nav.Link>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
};

export default Menu;