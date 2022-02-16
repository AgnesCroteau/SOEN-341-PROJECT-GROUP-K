import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="/">Boreal.ca</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/inventory">Inventory</Nav.Link>
          <Nav.Link href="/">Sign In</Nav.Link>
          <Nav.Link href="/">Log In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;