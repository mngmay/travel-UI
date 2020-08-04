import React from "react";
import LocationDetails from "./LocationDetails";
import { v4 as uuidv4 } from "uuid";

const LocationCard = ({ location, flights }) => {
  return (
    <div>
      <h3>{location}</h3>
      {flights.map((flight) => (
        <LocationDetails key={uuidv4()} flight={flight} />
      ))}
    </div>
  );
};

export default LocationCard;
