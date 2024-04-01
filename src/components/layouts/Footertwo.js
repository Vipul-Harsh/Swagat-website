import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Backtotop from "./Backtotop";
import logo from "../../assets/img/swagatlogo.png";
class Footertwo extends Component {
  render() {
    return (
      <Fragment>
        <Backtotop />
        <footer className="footer-two">
          <div className="footer-subscibe-area pt-70 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="subscribe-text text-center">
                    <div className="footer-logo mb-45">
                      <img src={logo} alt="logo" />
                    </div>
                    <p>
                      Join Our Newsletter for Exclusive Offers and Updates from
                      Swagat Hotel Bhiwadi: Be the first to know about our
                      seasonal specials, local attractions, and hotel news.
                    </p>
                    <form className="subscribe-form mt-50">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                      />
                      <button type="submit" className="bookbtn">
                        subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              "footer-widget-area pt-100 pb-50 " + this.props.footer.style
            }
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-sm-6 order-1">
                  {/* Site Info Widget */}
                  <div className="widget site-info-widget mb-50">
                    <div className="footer-logo mb-50">
                      <img src={logo} alt="logo" />
                    </div>
                    <p>
                      Experience luxury at Swagat Hotel, Bhiwadi's premier
                      retreat. Enjoy top-notch amenities and exceptional
                      service. Booknow for a memorable stay.
                    </p>
                    <div className="social-links mt-40">
                      <Link to="#" className="aboutbtn1">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="#" className="aboutbtn1">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="#" className="aboutbtn1">
                        <i className="fab fa-behance" />
                      </Link>
                      <Link to="#" className="aboutbtn1">
                        <i className="fab fa-linkedin" />
                      </Link>
                      <Link to="#" className="aboutbtn1">
                        <i className="fab fa-youtube" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-3 order-lg-2">
                  {/* Nav Widget */}
                  <div className="widget nav-widget mb-50">
                    <div>
                      <h4 className="widget-title">Services</h4>
                      <ul>
                        {/* <li>
                          <Link to="#" className="booktext">Resturent &amp; Bar</Link>
                        </li> */}
                        {/* <li>
                          <Link to="#" className="booktext">Gaming Zone</Link>
                        </li> */}
                        <li>
                          <Link to="/about" className="booktext">Swimming Pool</Link>
                        </li>
                        <li>
                          <Link to="/about" className="booktext">Banquet Hall</Link>
                        </li>
                        <li>
                          <Link to="/restaurant" className="booktext">Dining</Link>
                        </li>
                        <li>
                          <Link to="/about" className="booktext">Party Planning</Link>
                        </li>
                        <li>
                          <Link to="/room-grid" className="booktext">Spacious Rooms</Link>
                        </li>
                        <li>
                          <Link to="/contact" className="booktext">Tour Consultancy</Link>
                        </li>
                        <li>
                          <Link to="/contact" className="booktext">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 order-2 order-lg-3">
                  {/* Contact Widget */}
                  <div className="widget contact-widget mb-50">
                    <h4 className="widget-title">Contact Us</h4>
                    <div className="contact-lists">
                      <div className="contact-box">
                        <div className="icon">
                          <i className="flaticon-call" />
                        </div>
                        <div className="desc">
                          <h6 className="title">Phone Number</h6>
                          +987 876 765 76 577
                        </div>
                      </div>
                      <div className="contact-box">
                        <div className="icon">
                          <i className="flaticon-message" />
                        </div>
                        <div className="desc">
                          <h6 className="title">Email Address</h6>
                          <Link to="#">example@example.com</Link>
                        </div>
                      </div>
                      <div className="contact-box">
                        <div className="icon">
                          <i className="flaticon-location-pin" />
                        </div>
                        <div className="desc">
                          <h6 className="title">Office Address</h6>
                          B-294-295 A, RIICO CHOWK, BHIWADI, ALWAR RAJASTHAN, 301019
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area pt-30 pb-30">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-5 order-2 order-md-1">
                  <p className="copyright-text copyright-two">
                    &copy;<Link to="#">Swagat Palace </Link> - 2024 All Rights Reserved
                  </p>
                </div>
                <div className="col-lg-6 col-md-7 order-1 order-md-2">
                  <div className="footer-menu text-center text-md-right">
                    <ul>
                      <li>
                        <Link to="#">Terms of use</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Environmental Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Footertwo;
