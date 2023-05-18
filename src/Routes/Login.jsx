import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const Login = () => {
  const { googleSignUp } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="row d-flex align-items-center ">
      <div className="col-md-6">
        <img src="login.png" alt="" className="w-100" />
      </div>
      <div className="col-md-6">
        <div
          className=" border border-light rounded-5  mb-5 p-5 w-75 text-white"
          style={{ background: "#FF69B4" }}
        >
          {" "}
          <Form onSubmit={handleLogin}>
            <h3 className="text-center">Login Form</h3>
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
              Login
            </button>
            <br />
            <Form.Text className="text-white">
              New to this website?
              <Link to="/register">
                <span className="underline ">Register here</span>
              </Link>
            </Form.Text>
            <br />
          </Form>
          <hr />
          <div className="text-center"> Alternative Sign in</div>
          <br />
          <button className="btn btn-light " onClick={googleSignUp}>
            <span>
              <img
                src="google.svg"
                alt=""
                style={{ width: 20, height: 20 }}
              ></img>
            </span>
            google sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
