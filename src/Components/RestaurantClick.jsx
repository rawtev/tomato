import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { NavLink, Route, Switch } from 'react-router-dom';
import Overview from './Overview';
import Order from './Order';
import Reviews from './Reviews';
import Menu from './Menu';
import Photos from './Photos';
import Footer from './Footer';
import Sticky from 'react-sticky-el';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import DirectionsIcon from '@material-ui/icons/Directions';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ShareIcon from '@material-ui/icons/Share';

function RestaurantClick(props) {
    return (
        <div className="RestClckbdy">
            <div className="head row w-100">
                <div className="headRow col-md-9 col-lg-9 col-sm-12">
                    <div className="logo ">
                        <NavLink to="/"><p id="tomato">tomato</p></NavLink>
                    </div>
                    <div className="search">
                        <div className="location">
                            <LocationOnIcon className="locationIcon" />
                            <p>Bhilai</p>
                        </div>
                        <div className="searchbar">
                            <p>|</p>
                            <SearchIcon />
                            <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
                        </div>
                    </div>
                    <div className="user">
                        <h2>User</h2>
                    </div>
                </div>
            </div>
            <h1>{props.title}</h1>
            <hr></hr>
            <div className="row justify-content-center">
                <div className="col-md-9 col-lg-9 col-sm-12 stickyContainer">
                    {/*Images group*/}
                    <div className="images row d-flex align-items-center justify-content-lg-start">
                        <div className="image1cont col-lg-8 col-md-8 col-sm-12">
                            <img id="image1" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="row fourimg ">
                                <div className="image2cont my-1 col-lg-6 col-md-6 col-sm-6">
                                    <img className="image2" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                                </div>
                                <div className="image2cont my-1 col-lg-6 col-md-6 col-sm-6">
                                    <img className="image2" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                                </div>
                                <div className="image2cont my-1 col-lg-6 col-md-6 col-sm-6">
                                    <img className="image2" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                                </div>
                                <div className="image2cont my-1 col-lg-6 col-md-6 col-sm-6">
                                    <img className="image2" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Title and rating */}
                        <div className="row RestClckdetails">
                            <div className="row d-flex">
                                <div className="col-md-8 RestClcktitle">Hari Raj</div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-4 mt-2">
                                                    <div className="delRating">4.2 *</div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="delCount">5,236</div>
                                                    <div className="delRev">Delivery Reviews</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-4 mt-2">
                                                    <div className="delRating">4.0 *</div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="delCount">4,532</div>
                                                    <div className="delRev">Delivery Reviews</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Variety Address and hours */}
                            <div className="row">
                                <div className="RestClckVar">Indian, Fast Food, Beverages </div>
                                <div className="RestClckAdd">Civic Centre, Bhilai</div>
                                <div className="RestClckTime">10 am - 10 pm </div>
                            </div>

                            {/* Buttons */}
                            <div className="mt-3 row">
                                <ul className="RestClckbtn">
                                    <li className="RestBtn align-items-center addReview"><StarOutlineIcon className="starIcon"/> Add Review</li>
                                    <li className="RestBtn"><DirectionsIcon/>Direction</li>
                                    <li className="RestBtn"><BookmarkBorderOutlinedIcon/>Bookmark</li>
                                    <li className="RestBtn"><ShareIcon/>Share</li>
                                </ul>
                            </div>

                            {/* Menu */}
                            <div className="row">
                                <ul className="RestClckMenu">
                                    <NavLink className="toggleLinks" to="/rest/overview">Overview</NavLink>
                                    <NavLink className="toggleLinks" to="/rest/order">Order Online</NavLink>
                                    <NavLink className="toggleLinks" to="/rest/review">Reviews</NavLink>
                                    <NavLink className="toggleLinks" to="/rest/menu">Menu</NavLink>
                                    <NavLink className="toggleLinks" to="/rest/photos">Photos</NavLink>
                                    <hr></hr>
                                </ul>
                            </div>
                            {/* Menu components */}

                            <div>
                                <Switch>
                                    <Route exact path="/rest/overview" component={Overview}></Route>
                                    <Route exact path="/rest/order" component={Order}></Route>
                                    <Route exact path="/rest/review" component={Reviews}></Route>
                                    <Route exact path="/rest/menu" component={Menu}></Route>
                                    <Route exact path="/rest/photos" component={Photos}></Route>
                                </Switch>
                            </div>
                        </div>
                </div>
                <div className="footerBody">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default RestaurantClick;
