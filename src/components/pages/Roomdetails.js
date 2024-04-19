import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/HeaderStyle2';
import Footer from '../layouts/Footertwo';
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/room-details/Content';
import Instagram from '../sections/home-v2/Instagram';
const pagelocation = 'Room Details'

class Roomdetails extends Component {
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
                <Header />
                <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
                <Content roomId={this.props.match.params.id}/>
                <Instagram/>
                <Footer footer={{ style:"", logo:"assets/img/footer-logo.png" }}/>
            </Fragment>
        );
    }
}

export default Roomdetails;