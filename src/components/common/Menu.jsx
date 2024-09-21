import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
  <>
    <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to='/' >
          <i className="bi bi-palette fs-3"></i> Libreria101
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end to='/' className='nav-link'>Inicio</NavLink>
            <NavLink  end to='/Administrador' className='nav-link'>Administrador</NavLink>
            <NavLink end to='/login' className='nav-link'>Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
};

export default Menu;