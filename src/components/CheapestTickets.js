import React, { useState } from "react";
import useCheapestTickets from "../hooks/useCheapestTickets";
import LocationCard from "./LocationCard";
import Grid from "@material-ui/core/Grid";

export default function CheapestTickets(props) {
  const ticketInfo = useCheapestTickets(props);
  const [numberOfPosts, setNumberOfPosts] = useState(6);
  let posts;
  console.log("ticketInfo", ticketInfo.data?.data);

  if (ticketInfo.data?.data) {
    // turn each city's prices into an array
    // sort/get minimum price
    // sort all entries by minimum price
    // display the top 6

    console.log(
      "ticket values",
      Object.entries(ticketInfo.data?.data)
        .map((entry) => [
          entry[0],
          Object.values(entry[1]).sort((a, b) =>
            a.price > b.price ? 1 : -1
          )[0].price,
        ])
        .sort((a, b) => (a[1] > b[1] ? 1 : -1))
    );
    let cheapest = Object.entries(ticketInfo.data?.data)
      .map((entry) => [
        entry[0],
        Object.values(entry[1]).sort((a, b) => (a.price > b.price ? 1 : -1))[0]
          .price,
      ])
      .sort((a, b) => (a[1] > b[1] ? 1 : -1))
      .slice(0, numberOfPosts)
      .map((val) => (val = val[0]));
    console.log("cheapest", cheapest);
    posts = Object.entries(ticketInfo.data.data).filter((entry) =>
      cheapest.includes(entry[0])
    );
    console.log("POSTS", posts);
  }

  return ticketInfo.isLoading ? (
    "Loading..."
  ) : ticketInfo.isError ? (
    ticketInfo.error.message
  ) : (
    <Grid container>
      {posts ? (
        posts.map((l) => (
          <LocationCard
            key={l[0]}
            location={l[0]}
            currency={props.search.curr}
            flights={Object.values(l[1])}
          />
        ))
      ) : (
        <div className="noResults">No results found</div>
      )}
    </Grid>
  );
}
