import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/gym-light.png";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
export default function Header() {
  const [NavBg, setNavBg] = useState(false);
  const [show, setshow] = useState(true);
  const lastScroll = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
      if (scrollY > lastScroll.current && scrollY > 100) {
        setshow(false);
      } else {
        setshow(true);
      }
      lastScroll.current = scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar
        expand="lg"
        className={`nav p-0 translate- ${NavBg ? "nav-scrolled" : "bg-transparent"} ${show ? "" : "isShow"}`}
      >
        <Container className="h-100">
          <Navbar.Brand href="#hero">
            <div className="logo">
              <img src={logo} alt="" className="w-100 h-100 object-fit-cover" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0 h-100">
            <Nav className="me-auto gap-4 h-100 align-items-center">
              <Link
                to="hero"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                spy
                activeClass="active-link"
                className="nav_items"
              >
                Home
              </Link>
              <Link
                spy
                activeClass="active-link"
                to="about"
                className="nav_items"
              >
                About
              </Link>
              <Link
                spy
                activeClass="active-link"
                to="results2"
                className="nav_items"
              >
                Results
              </Link>
              <Link
                spy
                activeClass="active-link"
                to="whyUs"
                className="nav_items"
              >
                Why us
              </Link>
              <Link
                spy
                activeClass="active-link"
                to="coaches"
                className="nav_items"
              >
                Coaches
              </Link>
              <Link
                spy
                activeClass="active-link"
                to="questions"
                className="nav_items"
              >
                FAQ
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
