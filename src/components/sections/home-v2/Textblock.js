import React, { Component } from "react";
import { Link } from "react-router-dom";

class Textblock extends Component {
  render() {
    return (
      <section className="text-block pt-115 pb-115">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7">
              <div className="text-img text-center text-lg-left mb-small">
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/text-block/02.jpg"}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-8 col-sm-10">
              <div className="block-text">
                <div className="section-title mb-20">
                  <span className="title-tag">About Us</span>
                  <h2>Explore Our Essence</h2>
                </div>
                <p>
                  Discover Swagat Hotel, a standout choice in Bhiwadis
                  hospitality landscape. Boasting a solid 3.3 out of 5 rating,
                  we excel in guest satisfaction and service. With flexible
                  policies and a welcoming environment, we prioritize your
                  comfort and convenience. Secure, hygienic, and memorable your
                  perfect stay awaits at Swagat Hotel.
                </p>
                <Link to="/about" className="main-btn btn-filled mt-40">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Textblock;
