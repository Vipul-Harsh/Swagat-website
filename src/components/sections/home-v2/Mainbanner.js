import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const bannerPosts = [
    {
        photo: "assets/img/banner/01.jpg",
        tag: 'Where Comfort Meets Convenience',
        title: "Welcome to Hotel Swagat",
    },
    {
        photo: "assets/img/banner/02.jpg",
        tag: 'Where Comfort Meets Convenience',
        title: "Welcome to Hotel Swagat",
    },
];

class Mainbanner extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            fade: true,
            arrows: false,
        };
        return (
            <Slider className="banner-area banner-style-two" id="bannerSlider" {...settings}>
                {bannerPosts.map((item, i) => (
                    <div key={i} className="single-banner d-flex align-items-center justify-content-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="banner-content text-center">
                                        
                                        <h1 className="title" dangerouslySetInnerHTML={{ __html: item.title }}/>
                                        <span className="promo-tag">{item.tag}</span>
                                        <ul>
                                            <li>
                                                <Link className="main-btn btn-filled bookbtn" to="/contact">Book Now</Link>
                                            </li>
                                            <li>
                                                <Link className="main-btn btn-border aboutbtn" to="/about">About Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* banner bg */}
                        <div className="banner-bg" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.photo + ")" }} />
                        <div className="banner-overly" />
                    </div>
                ))}
            </Slider>
        );
    }
}

export default Mainbanner;