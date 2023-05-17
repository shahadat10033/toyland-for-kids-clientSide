import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="">
        <img src="404.webp" alt="" className="img-fluid" />
      </div>
      <div>
        <h2 className="my-2 fw-bold fs-1 " style={{ color: "#FF69B4" }}>
          <span className="fw-bold">Error</span> {status || 404}
        </h2>
        <p className="fs-2 fw-semibold  mb-5" style={{ color: "#FF69B4" }}>
          {error?.message}
        </p>
        <Link
          to="/"
          className="px-5 py-3 font-semibold rounded  text-light text-decoration-none"
          style={{ backgroundColor: "#FF69B4" }}
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
