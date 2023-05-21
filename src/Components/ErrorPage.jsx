import React from "react";
import { Link, useRouteError } from "react-router-dom";
import useTitle from "./useTitle";

const ErrorPage = () => {
  useTitle("ErrorPage");
  const { error, status } = useRouteError();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
        <h2 className="my-2 fw-bold fs-1 " style={{ color: "#FF69B4" }}>
          <span className="fw-bold">Error</span> {status || 404}
        </h2>
        <p className="fs-2 fw-semibold  mb-5" style={{ color: "#FF69B4" }}>
          {error?.message}
        </p>
        <div className="text-center">
          <Link to="/">
            <button
              className="btn   rounded-3  text-light "
              style={{ backgroundColor: "#FF69B4" }}
            >
              Home
            </button>
          </Link>
        </div>
      </div>
      <div className="">
        <img src="404.webp" alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default ErrorPage;
