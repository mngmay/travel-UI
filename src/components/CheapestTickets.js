import React from "react";
import useCheapestTickets from "../hooks/useCheapestTickets";
import LocationCard from "./LocationCard";

export default function CheapestTickets(search) {
  const ticketInfo = useCheapestTickets(search);

  console.log("Ticket info", ticketInfo.data);
  let locations = [];

  if (ticketInfo.data) {
    locations = Object.entries(ticketInfo.data.data);
    console.log("Locations", locations);
  }

  return ticketInfo.isLoading ? (
    "Loading..."
  ) : ticketInfo.isError ? (
    ticketInfo.error.message
  ) : (
    <div>
      {locations.map((l) => (
        <LocationCard
          key={l[0]}
          location={l[0]}
          flights={Object.values(l[1])}
        />
      ))}
    </div>
  );
}
