import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Header() {
    return (
        <div className="head ">
            <div className="headRow ">
                <div className="logo ">
                    <p id="tomato">tomato</p>
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
            <div className="delTakeout">
                <ul className="lists">
                    <li className="active"><h4>Delivery</h4></li>
                    <li className=""><h4>Dining Out</h4></li>
                    <li className=""><h4>Nightlife</h4></li>
                    <li className=""><h4>Nutrition</h4></li>
                </ul>
            </div>
            <div className="filterBody">
                <ul className="filter">
                    <li>Filters</li>
                    <li>Rating</li>
                    <li>Safe and Hygienic</li>
                    <li>Pure Veg</li>
                    <li>Delivery Time</li>
                    <li>Great Offers</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;