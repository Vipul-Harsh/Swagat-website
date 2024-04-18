import React, { Component } from "react";
import { Link } from "react-router-dom";
import category from "../../../data/category.json";
import $ from "jquery";
import "magnific-popup";

class Aboutpage extends Component {
  componentDidMount() {
    function popup() {
      $(".popup-video").magnificPopup({
        type: "iframe",
      });
    }
    popup();
  }
  render() {
    return (
      <section className="about-section pt-115 pb-80">
        <div className="container">
          <div
            className="video-wrap video-wrap-two video-about mb-60"
            style={{
              backgroundImage:
                "url(" +
                process.env.PUBLIC_URL +
                "/assets/img/text-block/07.jpg)",
            }}
          >
            <a
              rel={"external"}
              href="https://www.youtube.com/embed/EEJFMdfraVY"
              className="popup-video" style={{background:"transparent"}}
            >
              
            </a>
          </div>
          <div className="section-title about-title text-center">
            <span className="title-tag">
              since <span className="price2">1994</span>
            </span>
            <h2>
              Swagat Palace <br /> Premier lodging and unmatched service for 15+
              years.
            </h2>
          </div>
          <ul className="about-features">
            {category.slice(0, 5).map((item, i) => (
              <li key={i}>
                <Link to="#" className="vegicon">
                  <i className={item.icon} />
                  <i className={"hover-icon " + item.icon} />
                  <span className="title">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="about-text-box">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-img">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/img/text-block/05.jpg"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-text">
                  <span>Restaurant</span>
                  <h3>Experience In-House Dining at Swagat Palace. </h3>
                  <p>
                    Explore exquisite restaurant offerings, exceptional
                    amenities, and unparalleled services at Swagat Hotel
                    Bhiwadi. With a blend of luxury and convenience, we ensure a
                    memorable stay for every guest. Dive into a world of comfort
                    and hospitality with us.
                  </p>
                  <Link to="/contact" className="main-btn btn-filled bookbtn">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text-box">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-text">
                  <span>Banquet Halls</span>
                  <h3>
                    Plan Your Events with Our Exclusive Baquet Halls
                  </h3>
                  <p>
                    Discover the expansive banquet halls at Swagat Hotel in
                    Bhiwadi. Elevate your events with our hall's luxurious
                    ambiance and advanced amenities. With ample space, it's the
                    perfect venue for any occasion. Don't miss out click 'Book
                    Now' to make your event memorable with us!
                  </p>
                  <Link to="/contact" className="main-btn btn-filled bookbtn">
                    Book Now
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-img">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/img/text-block/08.jpg"
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Aboutpage;
