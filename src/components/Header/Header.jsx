import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/gym-light.png";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function Header() {
  const [active, setactive] = useState("home");
  const [NavBg, setNavBg] = useState(false);
  const [isopen, setisOpen] = useState(null);
  const [show, setshow] = useState(true);
  const lastScroll = useRef(0);
  const sections = [
    "home",
    "about",
    "results2",
    "whyUs",
    "coaches",
    "questions",
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop + 200;
          const height = section.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetTop + height) {
            current = id;
          }
        }
      });
      if (current) {
        setactive(current);
      }
      if (scrollY > 100) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
      if (scrollY > lastScroll.current && scrollY > 100 && !isopen) {
        setshow(false);
      } else {
        setshow(true);
      }
      if (scrollY < 200) {
        setactive("home");
      }

      lastScroll.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isopen]);
  return (
    <>
      <Navbar
        expand="lg"
        className={`nav p-0 ${NavBg ? "nav-scrolled" : "bg-transparent"} ${show ? "" : "isShow"} `}
      >
        <Container className="h-100">
          <Navbar.Brand href="#">
            <div className="logo">
              <img src={logo} alt="" className="w-100 h-100 object-fit-cover" />
            </div>
          </Navbar.Brand>
          <div
            onClick={() => {
              setisOpen(!isopen);
            }}
            className="nav_toggle d-xl-none"
          >
            <span
              className={`nav_toggle_icon ${isopen ? "active" : ""}`}
            ></span>
          </div>
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0 h-100">
            <Nav className="me-auto gap-4 h-100 align-items-center">
              {sections.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => {
                    if (id === "home") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`nav_items ${active === id ? "active-link" : ""}`}
                >
                  {id}
                </a>
              ))}
            </Nav>
          </Navbar.Collapse>
          <div className={`open_menu ${isopen ? "open" : ""}`}>
            <div className="px-3 py-2">
              <Nav className="flex-column">
                {sections.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => {
                      if (id === "home") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                      setisOpen(false);
                    }}
                    className={`nav_items ${active === id ? "active-link" : ""}`}
                  >
                    {id}
                  </a>
                ))}
              </Nav>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
