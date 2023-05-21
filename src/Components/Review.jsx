import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Review = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 300,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <div style={{ backgroundColor: "#FF69B4" }} className="my-5 py-5 ">
      <div className="text-white">
        {" "}
        <h2 className="text-center fw-bold">Client testimonials</h2>
        <h4 className="text-center">What People Say</h4>
      </div>
      <div className="row">
        <div className="col-md-6" data-aos="fade-right" data-aos-once="false">
          <div className="bg-light border rounded-5 m-5 p-4">
            <Rating style={{ maxWidth: 180 }} value={5} readOnly />

            <p>
              {` "My kids absolutely love the Toyland website! The colorful and
              interactive design instantly grabs their attention. Its a perfect
              virtual playground where they can explore a wide variety of toys
              and games. Kudos to the team for creating such a fantastic
              platform." `}
            </p>
            <div className="d-flex">
              <img
                src="man1.jfif"
                alt=""
                style={{ width: 60, height: 60, borderRadius: "50%" }}
              />
              <div>
                <span>Jhon donne</span>
                <br />
                <small>Austin, TX</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-left" data-aos-once="false">
          <div className="bg-light border rounded-5 m-5 p-4">
            <Rating style={{ maxWidth: 180 }} value={5} readOnly />
            <p>
              {` "As a parent, safety is my concern, Toyland exceeded my
              expectations. It very much ensures age-appropriate recommendations and
              provides detailed information about the safety measures for each
              toy. I feel confident letting kids play with digital toyland." `}
            </p>
            <div className="d-flex">
              <img
                src="man2.jfif"
                alt=""
                style={{ width: 60, height: 60, borderRadius: "50%" }}
              />
              <div>
                <span>Ricky Clarke</span>
                <br />
                <small>New york , NY</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
