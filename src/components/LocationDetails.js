import React from "react";
import moment from "moment";

const LocationDetails = (flight) => {
  const ticket = flight.flight;

  return (
    <div>
      <div>Price: {ticket.price}</div>
      <div>Airline: {ticket.airline}</div>
      <div>Flight #: {ticket.flight_number}</div>
      <div>Departure: {moment(ticket.departure_at).format("LLL")} UTC</div>
      <div>Return: {moment(ticket.return_at).format("LLL")} UTC</div>
    </div>
  );
};

export default LocationDetails;
