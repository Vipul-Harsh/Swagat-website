import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogpost from '../../data/blog.json';
import blogcategory from '../../data/blogcategory.json';
import blogtags from '../../data/blogtags.json';
import instaposts from '../../data/instaposts.json';
import twitterpost from '../../data/twitterpost.json'

function setCategoriesCount() {
    for (let i = 0; i < blogcategory.length; i++) {
        var count = blogpost.filter(post => { return post.categories.includes(parseInt(blogcategory[i].id)) });
        count = count.length;
        blogcategory[i].count = count;
    }
}
setCategoriesCount();

function changeToMonth(month) {
    var months = [ "January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December" ];
    return months[month];
}

function setDemoDate() {
    var today = new Date();
    blogpost.slice(0,3).map((post, i) => (
        post.timestamp = today.getTime() - ( 3 * 24 * 60 * 60 * 1000 ),
        // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
        // in the blog.json object
        post.postdate = `${changeToMonth(today.getMonth())} ${today.getDate() - 2}, ${today.getFullYear()}`
    ));
}
setDemoDate();

class Blogsidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                {/* Search Widget */}
                <div className="widget search-widget mb-40">
                    <h5 className="widget-title ">Search Objects</h5>
                    <form action="#">
                        <input type="text" placeholder="Search your keyword..." />
                        <button type="submit" className='bookbtn'><i className="far fa-search" /></button>
                    </form>
                </div>
                {/* Popular Post Widget */}
                <div className="widget popular-feeds mb-40">
                    <h5 className="widget-title">Recent Feeds</h5>
                    <div className="popular-feed-loop">
                        {blogpost.filter( post => { return post.timestamp < new Date(post.postdate) } ).map((item, i) => (
                            <div key={i} className="single-popular-feed">
                                <div className="feed-img">
                                    <img src={process.env.PUBLIC_URL + "/" + item.gridimg} alt={item.title} />
                                </div>
                                <div className="feed-desc">
                                    <h6><Link to={"/blog-details/" + item.id} className="booktext">{item.title.slice(0, 40)}...</Link></h6>
                                    <span className="time"><i className="far fa-calendar-alt" /> {item.postdate}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Categories Widget */}
                <div className="widget categories-widget mb-40">
                    <h5 className="widget-title">Categories</h5>
                    <ul>
                        {blogcategory.map((item, i) => (
                            <li key={i} >
                                <Link to={"/blog/cat/" + item.id} className="aboutbtn1">{item.title}<span className='boo'>{item.count}</span></Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Social Icon Widget */}
                <div className="widget socail-widget mb-40">
                    <h5 className="widget-title">Never Miss News</h5>
                    <ul>
                        <li><Link to="#" className="aboutbtn1"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link to="#" className="aboutbtn1"><i className="fab fa-twitter" /></Link></li>
                        <li><Link to="#" className="aboutbtn1"><i className="fab fa-behance" /></Link></li>
                        <li><Link to="#" className="aboutbtn1"><i className="fab fa-linkedin" /></Link></li>
                        <li><Link to="#" className="aboutbtn1"><i className="fab fa-pinterest" /></Link></li>
                    </ul>
                </div>
                {/* Twitter Feeds Widget */}
                <div className="widget twitter-feed-widget mb-40">
                    <h5 className="widget-title">Twitter Feeds</h5>
                    <div className="twitter-looop">
                        {twitterpost.map((item, i) => (
                            <div key={i} className="single-twitter">
                                <Link to="#">{item.tweet}</Link>
                                <span className="date">{item.tweetdate}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Instagram Feeds Widget */}
                <div className="widget instagram-feed-widget mb-40">
                    <h5 className="widget-title">Instagram Feeds</h5>
                    <ul>
                        {instaposts.map((item, i) => (
                            <li key={i}><img src={process.env.PUBLIC_URL + "/" + item.img} alt="img" /></li>
                        ))}
                    </ul>
                </div>
                {/* Popular Tags Widget */}
                <div className="widget popular-tag-widget mb-40">
                    <h5 className="widget-title">Popular Tags</h5>
                    <ul>
                        {blogtags.map((item, i) => (
                            <li key={i}>
                                <Link to={"/blog/tag/" + item.id} className="aboutbtn1">{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Banner Ad Widget */}
                <div className="widget banner-ad-widget">
                    <img src={process.env.PUBLIC_URL + "/assets/img/banner-widget.jpg"} alt="banner" />
                </div>
            </div>
        );
    }
}

export default Blogsidebar;