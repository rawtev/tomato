import { React } from 'react';
import RestCards from './RestCards';
import { Route, Switch, NavLink } from 'react-router-dom';
import restData from '../restData';
import "C:/Users/Vikas/Desktop/JS/zomatopro/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "C:/Users/Vikas/Desktop/JS/zomatopro/node_modules/bootstrap/dist/js/bootstrap.bundle";
import RestaurantClick from './RestaurantClick';


function Restaurant() {
    return (
        <div className="col-md-9 col-lg-9 col-sm-12 rest ">
            <div className="restHeader">
                Delivery Restaurants in Bhilai
            </div>
            <div className="row d-flex justify-content-evenly">
                {restData.map((elem, index) => {
                    return (
                        <NavLink className="NavLink" to={`/rest/order`} >
                            <RestCards
                                title={elem.restaurant_name}
                                key={index}
                                eta={elem.eta}
                                discount={elem.discount}
                                rating={elem.rating}
                                variety={elem.cuisines}
                                price={elem.price_range}
                                img={elem.img_url}
                                // onclick={<RestaurantClick title={elem.restaurant_name} />}
                            // {
                            // <Switch>
                            //     <Route path={`/rest`}><RestaurantClick /> </Route> 
                            // </Switch>
                            // }
                            // 
                            />
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default Restaurant;
