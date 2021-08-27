import React from 'react';
import { NavLink } from 'react-router-dom';

import RestaurantClick from './RestaurantClick';
import { Switch, Route ,BrowserRouter } from 'react-router-dom';

function RestCards(props) {
    return (
        <>
            {/* <NavLink to={`/rest`}> */}
                <div className="col-md-4 col-lg-4 col-sm-6 restCards justify-content-center">
                    <div className="pic ">
                        <div className="image d-inline-block">
                            <img src={props.img} className="restImg" alt="burger"></img>
                        </div>
                        <div className="offer ">{props.discount}% OFF</div>
                        <div className="eta ">{props.eta} min</div>
                    </div>
                    <div className="titleRating">
                        <div className="title d-inline-block">{props.title}</div>
                        <div className="rating d-inline-block float-end">{props.rating} *</div>
                    </div>
                    <div className="varPrice ">
                        <div className="var d-inline-block">{props.variety}</div>
                        <div className="price d-inline-block float-end">{props.price}300 for one</div>
                    </div>
                    <div className="notice">
                        <div className="badge d-inline-block"></div>
                        <div className="msg d-inline-block">50+ orders placed from here recently</div>
                        <div className="badge d-inline-block"></div>
                    </div>
                </div>
            {/* </NavLink> */}
        </>
    )
}

export default RestCards;
