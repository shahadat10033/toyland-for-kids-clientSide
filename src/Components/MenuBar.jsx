import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="sticky-top ">
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className=""
          style={{
            backgroundColor: "#FF69B980",
          }}
        >
          <Container fluid>
            <div className="text-white d-flex align-items-center  ">
              <span className="me-2">
                <Link>
                  {" "}
                  <img
                    src="toyLogo.webp"
                    alt=""
                    style={{ width: 30, height: 30, borderRadius: "50%" }}
                  ></img>
                </Link>
              </span>
              <Link className="text-decoration-none text-white">
                <span className="fw-bold fs-2  ">KIDS TOYLAND</span>
              </Link>
            </div>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="text-white bg-white"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ backgroundColor: "#FF69B980" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/" className="text-decoration-none text-white me-5">
                    Home
                  </Link>
                  <Link to="/" className="text-decoration-none text-white me-5">
                    All Toys
                  </Link>
                  <Link to="/" className="text-decoration-none text-white me-5">
                    My Toys
                  </Link>
                  <Link to="/" className="text-decoration-none text-white me-5">
                    Add a Toy
                  </Link>
                  <Link
                    to="/blogs"
                    className="text-decoration-none text-white me-5"
                  >
                    Blogs
                  </Link>
                  {/* {user ? (
                 
                      <img></img>
                    
                  ) : (
                    <Link>
                      <button>Log in</button>
                    </Link>
                  )} */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default MenuBar;
