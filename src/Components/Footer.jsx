import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer"
        style={{ backgroundColor: "#FF69B4", padding: "20px", color: "white" }}
      >
        <div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h3>About Us</h3>

              <p>
                Welcome to Toyland, your ultimate destination for high-quality
                toys . Explore our vast collection of toys and let your children
                imagination soar.
              </p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h3>Customer Support</h3>
              Please let us know any issues or answer any questions you may
              have. Your satisfaction is our top priority.
            </div>
            <div className="col-md-3 col-sm-6">
              <h3>Contact Us</h3>
              <p>E-37 ,Nayanagar</p>
              <p>Dhamrai,Dhaka</p>
              <p>Phone: 01676420675</p>
              <p>Email: shahadat10023@gmail.com</p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h3>Follow Us</h3>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.facebook.com"
                    className="text-decoration-none text-white"
                  >
                    <img
                      src="fb.png"
                      alt=""
                      style={{ width: 25, height: 25, borderRadius: "50%" }}
                    ></img>
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    className="text-decoration-none text-white"
                  >
                    <img
                      src="twit.png"
                      alt=""
                      style={{ width: 25, height: 25, borderRadius: "50%" }}
                    ></img>
                    Twitter
                  </a>
                </li>
                <li>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      className="text-decoration-none text-white"
                    >
                      <img
                        src="github.png"
                        alt=""
                        style={{ width: 25, height: 25, borderRadius: "50%" }}
                      ></img>
                      Github
                    </a>
                  </li>
                  <a
                    href="https://www.instagram.com"
                    className="text-decoration-none text-white"
                  >
                    <img
                      src="instra.png"
                      alt=""
                      style={{ width: 25, height: 25, borderRadius: "50%" }}
                    ></img>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                {new Date().getFullYear()} kids Toyland. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
