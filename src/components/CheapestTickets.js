import React from "react";
import useCheapestTickets from "../hooks/useCheapestTickets";
import LocationCard from "./LocationCard";
import Grid from "@material-ui/core/Grid";

export default function CheapestTickets(search) {
  const ticketInfo = useCheapestTickets(search);
  console.log(ticketInfo);

  return ticketInfo.isLoading ? (
    "Loading..."
  ) : ticketInfo.isError ? (
    ticketInfo.error.message
  ) : (
    <Grid container>
      {ticketInfo.data?.data ? (
        Object.entries(ticketInfo.data.data).map((l) => (
          <LocationCard
            key={l[0]}
            location={l[0]}
            flights={Object.values(l[1])}
          />
        ))
      ) : (
        <div className="noResults">No results found</div>
      )}
    </Grid>
  );
}
