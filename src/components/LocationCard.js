import React from "react";
import LocationDetails from "./LocationDetails";

const LocationCard = ({ location, flights }) => {
  return (
    <div>
      <h3>{location}</h3>
      {flights.map((flight) => (
        <LocationDetails
          key={
            flight.airline +
            flight.flight_number +
            flight.departure_at +
            flight.return_at
          }
          flight={flight}
        />
      ))}
    </div>
  );
};

export default LocationCard;
