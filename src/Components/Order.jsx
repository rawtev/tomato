import React from 'react';
import ATCinfo from './ATCinfo';
import ItemCard from './ItemCard';
import RestInfo from './RestInfo';
import { useState } from 'react';

function Order() {
    const [atcinfo, setATCinfo] = useState("");

    const changeState = (state) => {
        return(
            setATCinfo (state)
        )
    }

    console.log(atcinfo);

    return (
        <>
            <div className="d-flex order mb-4">
                <div className="categoryContainer">
                    <ul className="itemCategory">
                        <li>Recommended</li>
                        <li>Breakfast</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                    </ul>
                </div>
                <div className="itemCardContainer">
                    <div className="itemCardHeader">Order Online</div>
                    <div>
                        <div className="itemCardCategory">Recommended</div>
                        <div className="itemCardList">
                            <ItemCard change={changeState} chckState={atcinfo}/>
                            <ItemCard change={changeState} chckState={atcinfo}/>
                            <ItemCard change={changeState} chckState={atcinfo}/>
                            <ItemCard change={changeState} chckState={atcinfo}/>
                            <ItemCard change={changeState} chckState={atcinfo}/>
                            <ItemCard change={changeState} chckState={atcinfo}/>
                            <ItemCard change={changeState} chckState={atcinfo}/>
                            <ItemCard change={changeState} chckState={atcinfo}/>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            { (atcinfo) ? <ATCinfo/> : <></>}
            <RestInfo />
        </>
    )
}

export default Order;
