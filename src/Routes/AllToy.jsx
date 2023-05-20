import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import useTitle from "../Components/useTitle";
import { AuthContext } from "../firebase/AuthProvider";

const AllToy = () => {
  useTitle("AllToy");
  const [allToy, setAllToy] = useState([]);
  const { user } = useContext(AuthContext);
  const handleSearch = (e) => {
    e.preventDefault();
    let name = e.target.toyName.value;
    console.log(name);
    if (name) {
      name = name.replace(/\s/g, "+");
      name = name.toLowerCase();
      console.log(name);
      fetch(`http://localhost:5000/toyName?toyName=${name}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAllToy(data);
          if (data.length === 0) {
            Swal.fire({
              icon: "error",
              title: "Toy Not Found...",
              text: "Tray again and check spelling!",
            });
          }
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
      });
  }, []);
  const handleAlert = () => {
    user ||
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to log in first to view details",
      });
  };
  return (
    <div>
      <Form className="mt-5 mx-auto w-50 text-center" onSubmit={handleSearch}>
        <Form.Control
          placeholder="Toy Name"
          type="text"
          name="toyName"
          className="bg-light text-dark"
        />
        <button
          type="submit"
          style={{ backgroundColor: "#FF69B4" }}
          className="btn text-white"
        >
          Search
        </button>
      </Form>

      <div className="overflow-sm-scroll">
        <Marquee>
          <h2 style={{ color: "#FF69B4" }} className="text-center">
            All toys are here
          </h2>
        </Marquee>
        <Table hover responsive style={{ backgroundColor: "#FF69B4" }}>
          <thead className="fw-bold ">
            <tr>
              <th>Seller </th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Single Toy</th>
            </tr>
          </thead>
          <tbody>
            {allToy.map((toy) => (
              <tr key={toy._id} className="text-white">
                <td>{toy.sellerName}</td>
                <td>{toy.toyName}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <Link to={`/toy/${toy._id}`}>
                    <button className="btn btn-light" onClick={handleAlert}>
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllToy;
