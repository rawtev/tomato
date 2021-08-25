import React from 'react';

function RestCards(props) {
    return (
        <div className="col-md-4 col-lg-4 col-sm-6 restCards justify-content-center">
            <div className="pic ">
                <div className="image d-inline-block">
                    <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="restImg" alt="burger"></img>
                </div>
                <div className="offer ">30% OFF</div>
                <div className="eta ">30 min</div>
            </div>
            <div className="titleRating">
                <div className="title d-inline-block">{props.title}</div>
                <div className="rating d-inline-block float-end">4.0 *</div>
            </div>
            <div className="varPrice ">
                <div className="var d-inline-block">Burger, Fast Food, Beverages</div>
                <div className="price d-inline-block float-end">₹300 for one</div>
            </div>
            <div className="notice">
                <div className="badge d-inline-block"></div>
                <div className="msg d-inline-block">50+ orders placed from here recently</div>
                <div className="badge d-inline-block"></div>
            </div>
        </div>
    )
}

export default RestCards;
