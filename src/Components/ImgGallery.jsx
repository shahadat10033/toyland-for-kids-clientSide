import React from "react";
import Marquee from "react-fast-marquee";

const ImgGallery = () => {
  return (
    <div className="">
      <h1 className="text-center" style={{ color: "#FF69B4" }}>
        Toy Gallery
      </h1>

      <Marquee speed={100} direction="right">
        <div className="row">
          <div className="col-md-4">
            <img src="1.jfif" alt="Image 1" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src="4.jfif" alt="Image 2" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src="3.jfif" alt="Image 3" className="img-fluid" />
          </div>
        </div>
      </Marquee>
      <Marquee speed={100} direction="left">
        <div className="row">
          <div className="col-md-4">
            <img src="2.jfif" alt="Image 4" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src="5.jfif" alt="Image 5" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <img src="6.jfif" alt="Image 6" className="img-fluid" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default ImgGallery;
