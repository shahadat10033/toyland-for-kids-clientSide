import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { Tooltip } from "react-tooltip";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
import "react-tooltip/dist/react-tooltip.css";

const MenuBar = () => {
  const { user, loader, auth, setLoader } = useContext(AuthContext);
  //   sign out
  const logOut = () => {
    setLoader(true);
    signOut(auth)
      .then(() => {
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
    <div>
      <h2 className="text-center fw-bold fs-1">Loading....</h2>
    </div>;
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
                        ? " ps-5 text-decoration-none ps-5 mt-3 ps-5 "
                        : "text-light ps-5 text-decoration-none mt-3 "
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
                        ? "  mt-3 text-decoration-none  ps-5 text-primary"
                        : " text-light ps-5 text-decoration-none mt-3 "
                    }
                  >
                    All Toys
                  </NavLink>
                  {user && (
                    <NavLink
                      to="/myToy"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? ""
                          : isActive
                          ? " text-decoration-none text-primary ps-5 mt-3 "
                          : " mt-3 text-light ps-5 text-decoration-none"
                      }
                    >
                      My Toys
                    </NavLink>
                  )}
                  {user && (
                    <NavLink
                      to="/addToy"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? ""
                          : isActive
                          ? " text-decoration-none text-primary ps-5 mt-3 "
                          : " mt-3 text-light ps-5 text-decoration-none"
                      }
                    >
                      Add a Toy
                    </NavLink>
                  )}
                  <NavLink
                    to="/blogs"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? " text-decoration-none text-primary ps-5 mt-3 "
                        : " mt-3 text-light ps-5 text-decoration-none"
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
                          <Tooltip id="my-tooltip" />
                          <img
                            src={user?.photoURL}
                            alt=""
                            style={{
                              borderRadius: 50,
                              border: "1px solid #FF69B980",
                              width: 40,
                              height: 40,
                            }}
                          />
                        </span>

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
                            ? " text-decoration-none  text-white ms-5 btn  btn-dark text-light"
                            : "ms-5 text-decoration-none  text-light btn btn-light text-dark"
                        }
                      >
                        log in
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
