import React from "react";
import Marquee from "react-fast-marquee";

const Blogs = () => {
  return (
    <div className="mx-4 mb-4 ">
      <Marquee speed={100}>
        <h2 className="text-center my-2" style={{ color: "#FF69B4" }}>
          Some Important Queries
        </h2>
      </Marquee>
      Q1.What is an access token and refresh token? How do they work and where
      should we store them on the client-side?
      <br></br>
      A1. An access token is a credential that represents the authorization
      granted to a client to access specific resources or perform certain
      actions. A refresh token is a long-lived credential that is used to obtain
      a new access token when the current one expires. Initially, the client
      exchanges the users credentials to obtain both an access token and a
      refresh token. The access token is then used to authenticate subsequent
      requests to the servers protected resources.
      <br />
      <br />
      Q2.Compare SQL and NoSQL databases?
      <br />
      A2.SQL databases use structured data models and predefined schemas, while
      NoSQL databases offer flexible schemas and various data models.
      <br />
      SQL databases scale vertically, while NoSQL databases scale horizontally.
      <br />
      SQL databases use SQL as a query language, while NoSQL databases have
      their own query languages or APIs.
      <br />
      SQL databases follow ACID properties for strong data consistency, while
      NoSQL databases prioritize performance and scalability over immediate
      consistency.
      <br />
      SQL databases are suitable for complex querying and applications requiring
      strong data integrity, while NoSQL databases excel in handling
      unstructured, rapidly changing data and high scalability needs.
      <br />
      <br />
      Q3.What is express js? What is Nest JS ?
      <br />
      A3.Express.js is a minimal and flexible web application framework for
      Node.js, allowing developers to handle HTTP requests and define routes
      easily. <br />
      Nest.js is a progressive TypeScript framework built on Express.js,
      providing a structured and modular approach for building scalable
      server-side applications with dependency injection and decorators.
      <br />
      <br />
      Q4.What is MongoDB aggregate and how does it work?
      <br />
      A4. MongoDBs aggregate is a powerful aggregation framework that allows
      data processing and analysis by combining multiple stages, such as
      filtering, grouping, sorting, and performing mathematical operations, on
      collections of documents. It provides a flexible and efficient way to
      perform complex data transformations and aggregations within the database.
    </div>
  );
};

export default Blogs;
