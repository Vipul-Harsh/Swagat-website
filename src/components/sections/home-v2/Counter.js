import React, { Fragment } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const countPost = [
    {
        icon: "assets/img/icon/01.png",
        count: 40,
        prefix: "+",
        title: "Rooms Available"
    },
    {
        icon: "assets/img/icon/02.png",
        count: 95,
        prefix: "%",
        title: "Guest Satisfaction Rate"
    },
    {
        icon: "assets/img/icon/03.png",
        count: 15,
        prefix: "+",
        title: "Years in Hospitality"
    },
    {
        icon: "assets/img/icon/04.png",
        count: 5000,
        prefix: "+",
        title: "Happy Guests Served"
    }
]


function Counter(props) {
    const [focus, setFocus] = React.useState(false);
    return (
        <div className="row row1">
            {countPost.map((item, i) => (
                <div key={i} className="col-lg-3 col-md-6 col-6">
                    <div className="counter-box">
                        <div className="icon">
                            <img src={process.env.PUBLIC_URL + "/" + item.icon} alt="" />
                        </div>
                        <h4>
                            <CountUp start={focus ? 0 : null} end={parseInt(item.count)} duration={5} redraw={true}>
                                {({ countUpRef }) => (
                                    <Fragment>
                                        <span ref={countUpRef} className="counter" />
                                        <VisibilitySensor
                                            onChange={isVisible => {
                                                if (isVisible) {
                                                    setFocus(true);
                                                }
                                            }}
                                        >
                                            <span>{item.prefix}<span className="plus-icon"></span></span>
                                        </VisibilitySensor>
                                    </Fragment>
                                )}
                            </CountUp>
                        </h4>
                        <span className="title">{item.title}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Counter;