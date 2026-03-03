import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/gym-light.png";
export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="nav p-0">
        <Container className="h-100">
          <Navbar.Brand href="#home">
            <div className="logo">
              <img src={logo} alt="" className="w-100 h-100 object-fit-cover"/>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0 h-100">
            <Nav className="me-auto gap-4 h-100 align-items-center">
              <Nav.Link href="#home" className="nav_items">Home</Nav.Link>
              <Nav.Link href="#About" className="nav_items">About</Nav.Link>
              <Nav.Link href="#WhyUs" className="nav_items">Why us</Nav.Link>
              <Nav.Link href="#Coaches" className="nav_items">Coaches</Nav.Link>
              <Nav.Link href="#Questions" className="nav_items">FAQ</Nav.Link>
              <Nav.Link href="#Testimonials" className="nav_items">Testimonials</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
