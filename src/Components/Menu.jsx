import React from 'react';
import RestInfo from './RestInfo';

function Menu() {
    return (
        <div>
            <div className="overviewTitle">Hari Raj - Menu</div>
            <div>
                <img className="menuCard" src="https://b.zmtcdn.com/data/menus/086/16730086/8819adfbe0ea97008e6d080b982ff5ef.jpg"></img>
                <div>Food Menu</div>
                <div>2 Pages</div>
            </div>
                <hr></hr>
            <div>
                <RestInfo/>
            </div>
        </div>
    )
}

export default Menu;
