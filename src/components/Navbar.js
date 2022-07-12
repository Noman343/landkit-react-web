import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import navImg from "../assets/brand.svg";
import { NavLink } from "react-router-dom";

export default function NavbarComp() {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="mt-3">
        <Container>
          <Navbar.Brand href="#">
            <img src={navImg} alt="nav logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto">
              <NavLink
                to="/"
                id="navlink"
                className={({ isActive }) =>
                  isActive
                    ? "activenav text-decoration-none pt-2 pb-2"
                    : "text-decoration-none pt-2 pb-2"
                }
                activenlassname="is-active"
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                id="navlink"
                className={({ isActive }) =>
                  isActive
                    ? "activenav text-decoration-none pt-2 pb-2"
                    : "text-decoration-none pt-2 pb-2"
                }
                activenlassname="is-active"
              >
                About
              </NavLink>

              {/* <Nav.Link href="#pricing" id="navlink">
                Contact
              </Nav.Link> */}
              <NavLink
                to="/carousel"
                id="navlink"
                className={({ isActive }) =>
                  isActive
                    ? "activenav text-decoration-none pt-2 pb-2"
                    : "text-decoration-none pt-2 pb-2"
                }
                activenlassname="is-active"
              >
                Contact
              </NavLink>

              <NavDropdown
                title={<span id="navlink">Dropdown</span>}
                id="collasible-nav-dropdown navlink"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item id="navlink">
                  <NavLink
                    to="/nothing"
                    id="navlink"
                    className={({ isActive }) =>
                      isActive
                        ? "activenav text-decoration-none pt-2 pb-2 ps-0 pe-0"
                        : "text-decoration-none pt-2 pb-2 ps-0 pe-0"
                    }
                    activenlassname="is-active"
                  >
                    Action
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item id="navlink">
                  <NavLink
                    to="/nothing"
                    id="navlink"
                    className={({ isActive }) =>
                      isActive
                        ? "activenav text-decoration-none pt-2 pb-2 ps-0 pe-0"
                        : "text-decoration-none pt-2 pb-2 ps-0 pe-0"
                    }
                    activenlassname="is-active"
                  >
                    Another Action
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item id="navlink">
                  <NavLink
                    to="/nothing"
                    id="navlink"
                    className={({ isActive }) =>
                      isActive
                        ? "activenav text-decoration-none pt-2 pb-2 ps-0 pe-0"
                        : "text-decoration-none pt-2 pb-2 ps-0 pe-0"
                    }
                    activenlassname="is-active"
                  >
                    Pages
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id="navlink">
                  <NavLink
                    to="/nothing"
                    id="navlink"
                    className={({ isActive }) =>
                      isActive
                        ? "activenav text-decoration-none pt-2 pb-2 ps-0 pe-0"
                        : "text-decoration-none pt-2 pb-2 ps-0 pe-0"
                    }
                    activenlassname="is-active"
                  >
                    News Letter
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Button className="primary lift pt-2 pb-2 ps-3 pe-3 ">
                  Buy Now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
