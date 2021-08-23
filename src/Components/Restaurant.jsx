import {React,useEffect} from 'react';
import RestCards from './RestCards';
import "C:/Users/Vikas/Desktop/JS/zomatopro/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "C:/Users/Vikas/Desktop/JS/zomatopro/node_modules/bootstrap/dist/js/bootstrap.bundle";


function Restaurant(record) {
    return (
        <div className="col-md-9 rest">
            <div className="restHeader">
                Delivery Restaurants in Bhilai
            </div>
            <div className="row container cardContainer">
                {/* {record.map((elem, index) => { */}
                    {console.log("Restaurant")}
                    <RestCards/>
                    <RestCards/>
                    <RestCards/>
                    <RestCards/>
                    <RestCards/>
                {/* })} */}
            </div>
        </div>
    )
}

export default Restaurant;
