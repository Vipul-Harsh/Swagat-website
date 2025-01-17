import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/menu/Content';
import Instagram from '../sections/home-v2/Instagram';
const pagelocation = 'Menu'

class Menu extends Component {
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
                <Footer />
            </Fragment>
        );
    }
}

export default Menu;