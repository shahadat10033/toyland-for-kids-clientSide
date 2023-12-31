import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { AuthContext } from "../firebase/AuthProvider";
import useTitle from "../Components/useTitle";

const AddToy = () => {
  useTitle("AddToy");
  const { user } = useContext(AuthContext);
  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyPhotoUrl = form.toyPhotoUrl.value;
    const name = form.toyName.value;
    const toyName = name.toLowerCase();
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const newToy = {
      toyPhotoUrl,
      toyName,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    console.log(newToy);

    fetch("https://toy-land-for-kids-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "success...",
            text: " Toy added successfully!",
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
        <h3 className="text-center pb-4">Add A Toy</h3>
        <Form onSubmit={handleAddToy} className="row">
          <Form.Group className="mb-3 col-md-6">
            <Form.Label>Toy Picture</Form.Label>
            <Form.Control
              type="text"
              name="toyPhotoUrl"
              placeholder="Toy-Photo-Url"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 col-md-6">
            <Form.Label>Toy Name</Form.Label>
            <Form.Control
              type="text"
              name="toyName"
              placeholder="Toy Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 col-md-6">
            <Form.Label>Seller Name</Form.Label>
            <Form.Control
              type="text"
              name="sellerName"
              placeholder="Seller Name"
              defaultValue={user?.displayName}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 col-md-6">
            <Form.Label>Seller Email</Form.Label>
            <Form.Control
              type="Seller Email"
              name="sellerEmail"
              defaultValue={user?.email}
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 col-md-6">
            <Form.Label>Sub-Category</Form.Label>
            <Form.Control
              type="text"
              name="subCategory"
              placeholder="sub-category"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 col-md-6">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              placeholder="Price"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 col-md-6">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="text"
              name="rating"
              placeholder="Rating"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 col-md-6">
            <Form.Label>Availabe Quantity</Form.Label>
            <Form.Control
              type="text"
              name="quantity"
              placeholder="Quantity"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Detail Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Description"
              required
            />
          </Form.Group>

          <button className="btn  btn-light mt-5" type="submit">
            Add Toy
          </button>
        </Form>
      </div>
    </div>
  );
};

export default AddToy;
