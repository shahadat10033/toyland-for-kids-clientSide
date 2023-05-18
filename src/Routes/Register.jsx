import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {};

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
              <Form.Text className="text-white">{}</Form.Text>
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
