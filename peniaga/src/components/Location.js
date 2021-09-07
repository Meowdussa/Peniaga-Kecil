import React, {useState, useRef} from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./Location.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Icon } from "leaflet";
const opencage = require('opencage-api-client');

//BCN {"lat": 41.38658717375506, "lng": 2.156753540039063}
//NY {"lat": 40.730610, "lng": -73.935242}
//JITRA {"lat": 6.2644, "lng": 100.4202}                      

const OCD_API_KEY = process.env.REACT_APP_OCD_API_KEY; 

 function Location (props) {
   const [markers, setMarkers] = useState([])
   const [input, setInput] = useState("")
   const map = useRef(null);



    // Add a marker to the map, by clicking on it
    const addMarker = (e) => {
      console.log(e.latlng);
      setMarkers([...markers, e.latlng])
    }  
    
    const updateInput=(e)=>{
      setInput(e.target.value);
    }


    // Adds marker to map and flies to it with an animation
    const addLocation =() =>{
      opencage
        .geocode({ q: input, key: OCD_API_KEY})
        .then(data => {
          // Found at least one result
          if (data.results.length > 0){
              console.log("Found: " + data.results[0].formatted);
              const latlng = data.results[0].geometry;
              console.log(latlng);
              setMarkers([...markers, latlng])
              let mapInst = map.current.leafletElement;
              mapInst.flyTo(latlng, 12);
          } else alert("No results found!!");

        })
        .catch(error => {
          console.log('error', error.message);
        });


    }

  


  return (
    <div className="App mt-3">

      <h3 className="mytitle">Place your shop</h3>
      <Map ref={map} center={[6.2644, 100.4202]}
        onClick={addMarker}
      zoom={15}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; Map tiles by <a href="http://leaflet-extras.github.io/leaflet-providers/preview/#filter=OpenStreetMap.Mapnik">Mapnik</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
          {markers.map((position, idx) => 
          <Marker key={`marker-${idx}`} position={position}>
            <Popup>
          <span>Lat:{position.lat.toFixed(5)}</span>
          <br></br>
          <span>Lng:{position.lng.toFixed(5)}</span>
            </Popup>
          </Marker>
        )}
      </Map>
      <br></br>
      <div className="container">
      <div className="form-inline mb-3">
          <input
            className="form-control flex-primary-1"
            onChange={e => updateInput(e)}
            value={input}
          />

          <button
            className="btn btn-primary ml-2"
            onClick={() => addLocation()}
          >
            Submit your location
          </button>
        </div>
        </div>
    </div>
  );


  }

export default Location;