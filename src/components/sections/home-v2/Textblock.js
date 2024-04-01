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
                  Welcome to Swagat Hotel, Where every visit promises a distinctive experience.
                  Nestled in the heart of Bhiwadi, we are more than just a hotel ,
                  we are a home away from home. With our warm hospitality,
                  personalized service, and attention to detail, we strive to
                  create memorable experiences that keep our guests coming back
                  time and again. Whether you're here for business or leisure,
                  let us be a part of your journey . Discover what sets Swagat Hotel apart from Other.
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
