import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../layouts/Loader';
import classNames from 'classnames';
import rooms from '../../../data/room.json';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: rooms,
            currentPage: 1,
            itemsPerPage: 6,
            loading: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        var paginationContent = event.target.closest('.pagination-content');

        if (paginationContent) {
            paginationContent.scrollIntoView();
        }

        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                currentPage: Number(event.target.getAttribute('data-page')),
                loading: false
            });
        }, 2000);

    }
    render() {
        const { items, currentPage, itemsPerPage } = this.state;

        // Logic for displaying items
        const indexOfLastitem = currentPage * itemsPerPage;
        const indexOfFirstitem = indexOfLastitem - itemsPerPage;
        const currentitems = items.slice(indexOfFirstitem, indexOfLastitem);

        const renderitems = currentitems.map((item, i) => {
            return <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                <div className="room-box mb-30">
                    <div className="room-img-wrap">
                        <div className="room-img" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.gridimage + ")" }} />
                    </div>
                    <div className="room-desc">
                        <ul className="icons">
                            {item.amenities.slice(0, 7).map((item, i) => (
                                <li key={i}><i className={item.icon} /></li>
                            ))}
                        </ul>
                        <h4 className="title "><Link  className="booktext" to={"/room-details/" + item.id}>{item.title}</Link></h4>
                        <p>{item.text.slice(0,75)}...</p>
                        <span className="price price2"> &#8377;{item.price}/{item.period}</span>
                        <Link to={"/room-details/" + item.id} className="book-btn booktext">Book Now</Link>
                    </div>
                </div>
            </div>
        });
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPagination = pageNumbers.map(number => {
            const activeCondition = this.state.currentPage === number ? 'active' : ''
            return (
                <Fragment key={number}>
                    {pageNumbers.length > 1 ? <li className={classNames({ "active": activeCondition })}>
                        <Link to="#" data-page={number} onClick={this.handleClick} className="bookbtn">{number}</Link>
                    </li> : ''}
                </Fragment>
            );
        });
        return (
            <section className="room-section room-grid-style pt-120  pb-80 pagination-content">
                <div className="container">
                    <div className="row justify-content-center room-gird-loop">
                        {/* Post Start */}
                        {this.state.loading === false ? renderitems : <Loader />}
                        {/* Post End */}
                    </div>
                    <div className="pagination-wrap">
                        {pageNumbers.length > 1 ?
                            <ul>
                                {/* Prev */}
                                {/* to show previous, we need to be on the 2nd or more page */}
                                {pageNumbers.length > 1 && this.state.currentPage !== 1 ?
                                    <li className="booktext">
                                        <Link to="#" data-page={this.state.currentPage - 1}  className="aboutbtn" onClick={this.handleClick}>
                                            <i className="far fa-angle-double-left" />
                                        </Link>
                                    </li>
                                    : ''}
                                {/* Prev */}
                                {renderPagination}
                                {/* Next */}
                                {/* to show next, we should not be on the last page */}
                                {pageNumbers.length > 1 && this.state.currentPage !== pageNumbers.length ? <li>
                                    <Link to="#" data-page={parseInt(this.state.currentPage + 1)}   onClick={this.handleClick}>
                                        <i className="far fa-angle-double-right" />
                                    </Link>
                                </li>
                                    : ''}
                                {/* Next */}
                            </ul> : ''}
                        {/* Pagination End */}
                    </div>
                </div>
            </section>

        );
    }
}

export default Content;