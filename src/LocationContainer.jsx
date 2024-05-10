import { useEffect, useState } from "react";
import BoldLocationUI from "./BoldLocationUI";
import LocationHOF from "./LocationHOF";
import LocationUI from "./LocationUI";
const LocationContainer = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coordinates = position.coords;
      setLocation({
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      });
    });
  }, [navigator]);
  let RedColored = LocationHOF(BoldLocationUI);
  let NewLOcationComponent = LocationHOF(LocationUI);
  return(<><RedColored location={location} /> <NewLOcationComponent location={location} /></>);
};
export default LocationContainer;
