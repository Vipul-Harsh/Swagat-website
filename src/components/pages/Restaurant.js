import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/HeaderStyle2';
import Footer from '../layouts/Footertwo';
import Breadcrumb from '../layouts/Breadcrumb';
import Instagram from '../sections/home-v2/Instagram';
import Content from '../sections/restaurant/Content';

const pagelocation = 'Dining'

class Restaurant extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Swagat Palace| {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <div style={{color:"black"}}>
                <Header />
                </div>
                
                <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
                <Content/>
                 <Instagram/> 
                <Footer footer={{ style:"", logo:"assets/img/footer-logo.png" }}/>
            </Fragment>
        );
    }
}

export default Restaurant;