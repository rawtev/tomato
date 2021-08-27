import { React } from 'react';
import Carasoul from './Components/Carasoul';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Restaurant from './Components/Restaurant';
import { Switch, Route } from 'react-router-dom';
import RestaurantClick from './Components/RestaurantClick';


function App() {
  return (
    <div className="mainBody">
      
      <div className="headerBody">
        <Header />
      </div>
      <div className="carasoulBody">
        <Carasoul />
      </div>
      <div className="restaurantBody">
        <Restaurant />
      </div>
      <div className="footerBody">
        <Footer />
      </div>
    </div>
  )
}

export default App;
