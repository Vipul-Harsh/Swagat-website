import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/HeaderStyle2';
import Footer from '../layouts/Footer';
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/restaurant/Content';

const pagelocation = 'Restaurants'

class Restaurant extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Hotel Miranda - React Template | {pagelocation}</title>
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
                <Footer />
            </Fragment>
        );
    }
}

export default Restaurant;