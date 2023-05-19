import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const AllToy = () => {
  const [allToy, setAllToy] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
      });
  }, []);

  return (
    <div className="m-3">
      <Marquee>
        <h2 style={{ color: "#FF69B4" }} className="text-center">
          All toys are here
        </h2>
      </Marquee>
      <Table hover responsive style={{ backgroundColor: "#FF69B4" }}>
        <thead className="fw-bold">
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
                <button className="btn btn-light">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllToy;
