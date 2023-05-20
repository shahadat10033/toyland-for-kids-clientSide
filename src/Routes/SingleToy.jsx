import { Rating } from "@smastrom/react-rating";
import React from "react";
import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import useTitle from "../Components/useTitle";

const SingleToy = () => {
  useTitle("SingleToy");
  const {
    description,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
    toyName,
    toyPhotoUrl,
  } = useLoaderData();

  return (
    <div>
      <h2 className="text-center" style={{ color: "#FF69B4" }}>
        Toy Details
      </h2>
      <Card style={{ width: "24rem" }} className="mx-auto my-3 ">
        <Card.Img variant="top" src={toyPhotoUrl} />
        <Card.Body
          style={{ backgroundColor: "#FF69B4" }}
          className="text-white"
        >
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title>{toyName}</Card.Title>
            <Card.Title className="d-flex">
              {rating}
              <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
            </Card.Title>
          </div>
          <Card.Text>{description}</Card.Text>
          <span>{sellerName}</span>
          <br></br>
          <span>{sellerEmail}</span>
          <div className="d-flex justify-content-between mt-3">
            <Card.Text>Availabe Quantity : {quantity}</Card.Text>
            <Card.Text>Price: {price}$</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleToy;
