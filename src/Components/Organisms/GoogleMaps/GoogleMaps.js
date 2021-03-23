import React,{useContext, useState} from 'react'
import { Grid, Card, Hidden,Typography } from '@material-ui/core';
import Geocode from "react-geocode";
import Map from 'google-map-react';
import StaticVar from "../../../Config/StaticVar"
import RoomIcon from '@material-ui/icons/Room';
import { LocationContext, setDataAddress, setDataCoordinates } from "../../../Contexts/Location";

const AnyReactComponent = () => <RoomIcon style={{textAlign:"center",transform:"translate(-50%,-50%)",fontSize:35,color:"#F15D2A",position:"absolute"}}/>;

function GoogleMaps(props) {
  const [currentLatLng,setCurrentLatLng] = useState({
    lat:0,
    lng:0
  })
  
  const { location, locationDispatch } = useContext(LocationContext);

  const changeLocation = (e) =>{
    // console.log("e",e)
    var lat = e.lat
    var lng = e.lng
    setDataCoordinates({lat,lng},locationDispatch)

    Geocode.setApiKey(StaticVar.GOOGLE_APIKEY);
 
    // set response language. Defaults to english.
    Geocode.setLanguage("en");
    
    // set response region. Its optional.
    // A Geocoding request with region=es (Spain) will return the Spanish city.
    Geocode.setRegion("id");
    
    // Enable or disable logs. Its optional.
    // Geocode.enableDebug();

    Geocode.fromLatLng(lat, lng).then(
        response => {
            const address = response.results[0].formatted_address;
            setDataAddress(address,locationDispatch);
        },
        error => {
            console.error(error);
        }
    );
  }

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: props.height ? props.height : '50vh', width: '100%' }}>
        <Map
          bootstrapURLKeys={{ key: StaticVar.GOOGLE_APIKEY}}
          defaultCenter={location.coordinates}
          center={props.lat && props.lng ? props : location.coordinates}
          defaultZoom={props.zoom}
          onClick={(e)=>changeLocation(e)}

        >
          <AnyReactComponent
            lat={props.lat ? props.lat : location.coordinates.lat}
            lng={props.lng ? props.lng : location.coordinates.lng}
          />
        </Map>
      </div>
    );
}

export default GoogleMaps;