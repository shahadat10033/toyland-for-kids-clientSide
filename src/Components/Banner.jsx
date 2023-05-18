import React from "react";
import { Carousel } from "react-bootstrap";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="mb-5 pb-5">
            <h3>ToyLand: Unleash the Joy of Childhood</h3>
            <p>
              Welcome to ToyLand, your ultimate destination for the best
              selection of toys, where dreams come true and childhood memories
              are made.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="mb-5 pb-5">
            <h3>Where Fun Never Ends!</h3>
            <p>
              Explore a world of endless fun and excitement at Toys Galore, your
              one-stop destination for the most captivating toys and games that
              ignite imaginations and create lifelong memories.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="mb-5 pb-5">
            <h3>Where Imagination Knows No Bounds!</h3>
            <p>
              Extraordinary adventures come to life through a captivating
              collection of toys, empowering children to dream, create, and
              explore boundless possibilities.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
