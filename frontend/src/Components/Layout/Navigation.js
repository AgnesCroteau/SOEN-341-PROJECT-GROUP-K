import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { useCart } from "../Cart";
import { Link } from "react-router-dom";

function Navigation() {
  
  const items = useCart();

  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">Boreal.ca</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>
          <Nav.Link as={Link} to="/cartpage">Cart ({items.length})</Nav.Link>
          <Nav.Link as={Link} to="/editprofile">Manage My Profile</Nav.Link>
          <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
          <Nav.Link as={Link} to="/login">Log In</Nav.Link>
          <Nav.Link as={Link} to="/">Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
