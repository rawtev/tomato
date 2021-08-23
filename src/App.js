import { React, useEffect } from 'react';
import Carasoul from './Components/Carasoul';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Restaurant from './Components/Restaurant';

function App() {

  

  const objdata = useEffect(() => {
    fetch("https://documenu.p.rapidapi.com/restaurants/search/fields?restaurant_phone=5854420444", {
      "method": "GET",
      "headers": {
        "x-api-key": "e91acf096df5c63233c6bc2439fe2297",
        "x-rapidapi-key": "3010f70b90mshec8708346c0f422p199e48jsn4af9510fe474",
        "x-rapidapi-host": "documenu.p.rapidapi.com"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        // const record = data.data;
        console.log(data.data);
        // Restaurant(data.data); 
        // dispRest(data.data);

      })
  }, [])

  console.log("Objdata",objdata);
  return (
    <div className="mainBody">
      <div className="headerBody">
        <Header />
      </div>
      <div className="carasoulBody">
        <Carasoul />
      </div>
      <div className="restaurantBody">
        {
          
              <Restaurant
                record={objdata} />
            
          }
        
      </div>
      <div className="footerBody">
        <Footer />
      </div>
    </div>
  )
}

export default App;
