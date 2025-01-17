import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/HeaderMain';
import Footer from '../layouts/Footerthree';
import Content from '../sections/home-v2/Content';

const pagelocation = 'Homepage'

class Hometwo extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title> Swagat Palace | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Content/>
                <Footer footer={{ style:"", logo:"assets/img/footer-logo.png" }}/>
            </Fragment>
        );
    }
}

export default Hometwo;