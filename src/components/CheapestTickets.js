import React from "react";
import useCheapestTickets from "../hooks/useCheapestTickets";
import LocationCard from "./LocationCard";

export default function CheapestTickets(search) {
  const ticketInfo = useCheapestTickets(search);
  console.log(ticketInfo);

  return ticketInfo.isLoading ? (
    "Loading..."
  ) : ticketInfo.isError ? (
    ticketInfo.error.message
  ) : (
    <div>
      {ticketInfo.data?.data
        ? Object.entries(ticketInfo.data.data).map((l) => (
            <LocationCard
              key={l[0]}
              location={l[0]}
              flights={Object.values(l[1])}
            />
          ))
        : "No results found"}
    </div>
  );
}
