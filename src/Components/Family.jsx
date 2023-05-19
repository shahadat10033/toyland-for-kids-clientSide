import React from "react";
import { Accordion } from "react-bootstrap";

const Family = () => {
  return (
    <div className="mx-2 mb-5">
      <h1 className="text-center" style={{ color: "#FF69B4" }}>
        Welcome To Our Family
      </h1>
      <p>
        A place where imagination and play come to life for the whole family! We
        understand that animals hold a special place in our hearts, captivating
        our minds with their beauty, grace, and sometimes even their quirkiness.
        Our website aims to celebrate the incredible diversity of the animal
        kingdom and bring that joy into your home through an extensive
        collection of animal toys.
      </p>
      <div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {" "}
              <p className="fw-bold fs-3" style={{ color: "#FF69B4" }}>
                How Kids Toyland Started?
              </p>{" "}
            </Accordion.Header>
            <Accordion.Body>
              The story of Kids Toyland is one filled with passion, creativity,
              and a deep understanding of the importance of play in a childs
              development. It all began several years ago when our founder, Md
              Shahadat Hossain, noticed a lack of quality and imaginative toys
              in the market for her own children.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {" "}
              <p className="fw-bold fs-3" style={{ color: "#FF69B4" }}>
                What is our Mission ?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              Our mission at Kids Toyland is to ignite imagination, inspire
              learning, and create joy-filled moments for children and families
              through our carefully curated collection of toys. We believe that
              play is a fundamental part of childhood, and we are dedicated to
              providing high-quality, safe, and educational toys that foster
              creativity, curiosity, and growth.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <p className="fw-bold fs-3" style={{ color: "#FF69B4" }}>
                Describe Something about value added service?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              At Kids Toyland, we offer personalized toy recommendations based
              on your childs age, interests, and developmental needs. Our
              gift-wrapping service adds a special touch to your presents, and
              we even provide options for customization, making each gift
              unique. Visit our physical store to experience toy demonstrations
              and play zones, where children can explore and interact with the
              toys before making a decision. Our website features educational
              resources, including articles and guides, to support parents in
              maximizing the benefits of play-based learning. We pride ourselves
              on delivering exceptional customer support, ensuring your shopping
              experience with us is smooth and enjoyable.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              {" "}
              <p className="fw-bold fs-3" style={{ color: "#FF69B4" }}>
                What is our Social Responsibility?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              We are committed to social responsibility. We prioritize ethical
              sourcing, support philanthropic causes, and promote sustainability
              in our operations. Our dedication to safety, quality, and
              educational outreach further reinforces our commitment to making a
              positive impact on children and the community.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Family;
