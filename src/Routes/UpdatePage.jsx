import React from "react";
import { Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const { description, price, quantity, _id } = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updateInfo = { price, quantity, description };
    console.log(updateInfo);
    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "success...",
            text: "Toy Update successfully!",
          });
        }
      });
  };

  return (
    <div className="mt-5">
      <div
        className=" border border-light rounded-5  mb-5 mx-auto  p-5 w-75 text-white"
        style={{ background: "#FF69B4" }}
      >
        <h3 className="text-center pb-4">Update Toy</h3>
        <Form onSubmit={handleUpdate} className="row">
          <Form.Group className="mb-3 col-md-6">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              placeholder="Price"
              defaultValue={price}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 col-md-6">
            <Form.Label>Availabe Quantity</Form.Label>
            <Form.Control
              type="text"
              name="quantity"
              placeholder="Quantity"
              defaultValue={quantity}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Detail Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Description"
              defaultValue={description}
              required
            />
          </Form.Group>

          <button className="btn  btn-light mt-5" type="submit">
            Update
          </button>
        </Form>
      </div>
    </div>
  );
};

export default UpdatePage;
