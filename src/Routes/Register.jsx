import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../Components/useTitle";

const Register = () => {
  useTitle("Register");
  const { emailRegister, profileUpdate, logOut } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.username.value;
    const image = form.photoURL.value;
    const password = form.password.value;
    const email = form.email.value;
    console.log(name, image, password, email);
    emailRegister(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "success...",
          text: "Registration successfully!",
        });

        logOut();
        profileUpdate(name, image);
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: ` <p>${errorMessage}</p>`,
        });
      });

    form.reset();
  };

  return (
    <div className="row d-flex align-items-center ">
      <div className="col-md-6">
        <img src="register.png" alt="" className="w-100" />
      </div>
      <div className="col-md-6">
        <div
          className=" border border-light rounded-5  mb-5 p-5 w-75 text-white"
          style={{ background: "#FF69B4" }}
        >
          {" "}
          <Form onSubmit={handleRegister}>
            <h3 className="text-center">Registration Form</h3>

            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                name="photoURL"
                placeholder="photo url"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />

              {/* <Form.Text className="text-white">{error}</Form.Text> */}
            </Form.Group>

            <button className="btn btn-light" type="submit">
              Submit
            </button>
            <br />
            <Form.Text className="text-white">
              Already have an account?
              <Link to="/login">
                <span className="underline ">Login here</span>
              </Link>
            </Form.Text>
            <br />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
