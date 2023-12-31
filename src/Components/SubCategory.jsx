import { Rating } from "@smastrom/react-rating";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";
import { AuthContext } from "../firebase/AuthProvider";

const SubCategory = () => {
  const [toy, setToy] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      "https://toy-land-for-kids-server.vercel.app/subCategory?subCategory=elephant"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToy(data);
      });
  }, []);

  const handleAnimal = (animal) => {
    const url = `https://toy-land-for-kids-server.vercel.app/subCategory?subCategory=${animal}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToy(data);
      });
  };
  const handleAlert = () => {
    user ||
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to log in first to view details",
      });
  };

  return (
    <div className="text-center">
      <h2 className="mb-3" style={{ color: "#FF69B4" }}>
        Shop By Category
      </h2>
      <Tabs>
        <TabList>
          <Tab onClick={() => handleAnimal("elephant")}>Elephant</Tab>
          <Tab onClick={() => handleAnimal("dinosaur")}>Dinosaur</Tab>
          <Tab onClick={() => handleAnimal("dog")}>Dog</Tab>
        </TabList>

        <TabPanel className="d-flex justify-content-around overflow-scroll">
          {toy.map((t) => (
            <div key={t._id} className="m-3">
              <Card
                style={{
                  minWidth: "12rem",
                  maxWidth: "18rem",
                  minHeight: "30rem",
                }}
                className=" my-3 "
              >
                <Card.Img variant="top" src={t.toyPhotoUrl} />
                <Card.Body
                  style={{ backgroundColor: "#FF69B4" }}
                  className="text-white"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Title className="text-start">{t.toyName}</Card.Title>
                    <Card.Title className="d-flex">
                      {t.rating}
                      <Rating
                        style={{ maxWidth: 120 }}
                        value={t.rating}
                        readOnly
                      />
                    </Card.Title>
                  </div>

                  <Card.Text>Price: {t.price}$</Card.Text>
                  <Link to={`/toy/${t._id}`}>
                    <button className="btn btn-light " onClick={handleAlert}>
                      View Details
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </TabPanel>
        <TabPanel className="d-flex justify-content-around overflow-scroll">
          {toy.map((t) => (
            <div key={t._id} className="m-3">
              <Card
                style={{
                  minWidth: "12rem",
                  maxWidth: "18rem",
                  minHeight: "30rem",
                }}
                className=" my-3 "
              >
                <Card.Img variant="top" src={t.toyPhotoUrl} />
                <Card.Body
                  style={{ backgroundColor: "#FF69B4" }}
                  className="text-white"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Title className="text-start">{t.toyName}</Card.Title>
                    <Card.Title className="d-flex">
                      {t.rating}
                      <Rating
                        style={{ maxWidth: 120 }}
                        value={t.rating}
                        readOnly
                      />
                    </Card.Title>
                  </div>

                  <Card.Text>Price: {t.price}$</Card.Text>
                  <Link to={`/toy/${t._id}`}>
                    <button className="btn btn-light " onClick={handleAlert}>
                      View Details
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </TabPanel>
        <TabPanel className="d-flex justify-content-around overflow-scroll">
          {toy.map((t) => (
            <div key={t._id} className="m-3">
              <Card
                style={{
                  minWidth: "12rem",
                  maxWidth: "18rem",
                  minHeight: "30rem",
                }}
                className=" my-3 "
              >
                <Card.Img variant="top" src={t.toyPhotoUrl} />
                <Card.Body
                  style={{ backgroundColor: "#FF69B4" }}
                  className="text-white"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Title className="text-start">{t.toyName}</Card.Title>
                    <Card.Title className="d-flex">
                      {t.rating}
                      <Rating
                        style={{ maxWidth: 120 }}
                        value={t.rating}
                        readOnly
                      />
                    </Card.Title>
                  </div>

                  <Card.Text>Price: {t.price}$</Card.Text>
                  <Link to={`/toy/${t._id}`}>
                    <button className="btn btn-light " onClick={handleAlert}>
                      View Details
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubCategory;
