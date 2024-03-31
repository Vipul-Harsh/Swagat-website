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
                  src={
                    process.env.PUBLIC_URL + "/assets/img/text-block/02 (1).jpg"
                  }
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
                  Welcome to Swagat Hotel, an exceptional destination in
                  Bhiwadi's vibrant hospitality scene. Committed to excellence,
                  we pride ourselves on delivering unparalleled guest
                  experiences with our attentive service and warm hospitality.
                  Our flexible policies, along with a safe and hygienic
                  environment, ensure that your comfort is our top priority.
                  Embark on a memorable journey with us and discover the perfect
                  blend of comfort and convenience at Swagat Hotel.
                </p>
                <Link to="/about" className="main-btn btn-filled mt-40 bookbtn">
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
