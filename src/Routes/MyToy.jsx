import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../Components/useTitle";

const MyToy = () => {
  useTitle("MyToy");
  const { user } = useContext(AuthContext);
  const [myToy, setMyToy] = useState([]);

  useEffect(() => {
    fetch(
      `https://toy-land-for-kids-server.vercel.app/myToys?sellerEmail=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToy(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://toy-land-for-kids-server.vercel.app/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToy.filter((mt) => mt._id !== id);

              setMyToy(remaining);
            }
          });
        }
      });
  };
  const handleAscending = () => {
    fetch(
      `https://toy-land-for-kids-server.vercel.app/ascendingToys?sellerEmail=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToy(data);
      });
  };
  const handleDescending = () => {
    fetch(
      `https://toy-land-for-kids-server.vercel.app/descendingToys?sellerEmail=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToy(data);
      });
  };

  return (
    <div className="overflow-md-scroll " style={{ minHeight: "80vh" }}>
      <h2 style={{ color: "#FF69B4" }} className="text-center">
        MY Toys
      </h2>
      <div className="text-center my-3">
        <button
          className="btn text-white me-2 "
          style={{ backgroundColor: "#FF69B4" }}
          onClick={handleDescending}
        >
          Price in Descending order
        </button>
        <button
          className="btn text-white "
          style={{ backgroundColor: "#FF69B4" }}
          onClick={handleAscending}
        >
          Price in Ascending order
        </button>
      </div>
      <Table responsive hover style={{ backgroundColor: "#FF69B4" }}>
        <thead className="fw-bold ">
          <tr>
            <th>Toy Picture</th>
            <th>Seller </th>
            <th>Seller Email </th>
            <th>Toy Name</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Available Quantity</th>
            <th>Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myToy.map((toy) => (
            <tr key={toy._id} className="text-white">
              <td>
                <img
                  src={toy.toyPhotoUrl}
                  alt=""
                  style={{ width: 70, height: 70 }}
                />
              </td>
              <td>{toy.sellerName}</td>
              <td>{toy.sellerEmail}</td>
              <td>{toy.toyName}</td>
              <td>{toy.subCategory}</td>
              <td>{toy.price}$ </td>
              <td>{toy.rating} </td>
              <td>{toy.quantity}</td>
              <td>{toy.description}</td>
              <td>
                <Link to={`/update/${toy._id}`}>
                  <button className="btn btn-light">Update</button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-light"
                  onClick={() => handleDelete(toy._id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default MyToy;
