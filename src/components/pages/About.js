import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/HeaderStyle2';
import Footer from '../layouts/Footertwo';
import Instagram from '../sections/home-v2/Instagram';
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/about/Content';

const pagelocation = 'About Us'

class About extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Swagat Palace | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
                <Content/>
                 <Instagram/> 
                <Footer footer={{ style:"", logo:"assets/img/footer-logo.png" }}/>
            </Fragment>
        );
    }
}

export default About;