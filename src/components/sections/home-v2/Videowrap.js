import React, { Component } from 'react';
import $ from 'jquery';
import 'magnific-popup';

class Videowrap extends Component {
    componentDidMount() {
        function popup() {
            $('.popup-video').magnificPopup({
                type: 'iframe'
            });
        }
        popup();
    }
    render() {
        return (
            <section className="video-wrap  video-wrap-two" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/05.jpg)",height:"800px" }}>
               <a
              rel={"external"}
              href="https://www.youtube.com/embed/EEJFMdfraVY"
              className="popup-video"
            >
              <i className="fas fa-play" />
            </a>
            </section>
        );
    }
}

export default Videowrap;