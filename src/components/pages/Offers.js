import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/HeaderStyle2';
import Footer from '../layouts/Footertwo';
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/offers/Content';

const pagelocation = 'Special Offers'

class Offers extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Hotel Swagat - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
                <Content/>
                <Footer footer={{ style:"", logo:"assets/img/footer-logo.png" }}/>
            </Fragment>
        );
    }
}

export default Offers;