import { React } from 'react';
import RestCards from './RestCards';
import restData from '../restData';
import "C:/Users/Vikas/Desktop/JS/zomatopro/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "C:/Users/Vikas/Desktop/JS/zomatopro/node_modules/bootstrap/dist/js/bootstrap.bundle";


function Restaurant() {
    return (
        <div className="col-md-9 col-lg-9 col-sm-12 rest">
            <div className="restHeader">
                Delivery Restaurants in Bhilai
            </div>
            <div className="row d-flex justify-content-around">
                {restData.map((elem, index) => {
                    console.log(elem);
                    return (
                        <RestCards
                            title={elem.restaurant_name}
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Restaurant;
