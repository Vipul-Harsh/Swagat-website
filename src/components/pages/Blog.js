import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/HeaderStyle2';
import Footer from '../layouts/Footertwo';
import Instagram from '../sections/home-v2/Instagram';
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/blog/Content';

const pagelocation = 'Blog'

class Blog extends Component {
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
                <Header />
                <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
                <Content catId={this.props.match.params.catId} tagId={this.props.match.params.tagId} userId={this.props.match.params.userId}/>
                <Instagram/>
                <Footer footer={{ style:"", logo:"assets/img/footer-logo.png" }}/>
            </Fragment>
        );
    }
}

export default Blog;