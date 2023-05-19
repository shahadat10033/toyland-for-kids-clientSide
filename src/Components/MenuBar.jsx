import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { Spinner } from "react-bootstrap";
import { Tooltip } from "react-tooltip";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";

const MenuBar = () => {
  const { user, loader, auth, setLoader } = useContext(AuthContext);
  //   sign out
  const logOut = () => {
    setLoader(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Swal.fire({
          icon: "success",
          title: "success...",
          text: "Log out successfully!",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: ` <p>something gone wrong</p>`,
        });
      });
  };

  if (loader) {
    <Spinner animation="border" variant="warning" />;
  }
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
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-3 text-primary ps-5"
                        : "ps-5 text-decoration-none mt-3 text-light"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/allToy"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-3 text-primary ps-5"
                        : "ps-5 text-decoration-none mt-3 text-light"
                    }
                  >
                    All Toys
                  </NavLink>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-3 text-primary ps-5"
                        : "ps-5 text-decoration-none mt-3 text-light"
                    }
                  >
                    My Toys
                  </NavLink>
                  <NavLink
                    to="/addToy"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-3 text-primary ps-5"
                        : "ps-5 text-decoration-none mt-3 text-light"
                    }
                  >
                    Add a Toy
                  </NavLink>
                  <NavLink
                    to="/blogs"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none mt-3 text-primary ps-5"
                        : "ps-5 text-decoration-none mt-3 text-light"
                    }
                  >
                    Blogs
                  </NavLink>
                  <span className="mt-2">
                    {user ? (
                      <span className="ms-5">
                        <span
                          className="me-2"
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content={user?.displayName}
                        >
                          <img
                            src={user?.photoURL}
                            alt=""
                            style={{
                              width: 40,
                              height: 40,
                              borderRadius: 50,

                              border: "2px solid yellow",
                            }}
                          />
                        </span>
                        <Tooltip id="my-tooltip" />
                        <button className="btn btn-light " onClick={logOut}>
                          Log out
                        </button>
                      </span>
                    ) : (
                      <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? ""
                            : isActive
                            ? " text-decoration-none  text-white ms-5 btn  btn-primary text-light"
                            : "ms-5 text-decoration-none  text-light btn btn-light text-dark"
                        }
                      >
                        log in
                        {/* <span style={{ marginTop: 10 }}>Log in</span> */}
                      </NavLink>
                    )}
                  </span>
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
