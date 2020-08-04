import { useQuery } from "react-query";
import axios from "axios";

export default function useCheapestTickets(search) {
  console.log("getCheapestTickets Hook", search);
  const { destination, origin, depart, ret, curr } = search.search;

  return useQuery("cheapestTickets", () => {
    return axios
      .get(
        `/v1/prices/cheap?origin=${origin}&destination=${destination}&depart_date=${depart}&return_date=${ret}&currency=${curr}`,
        {
          headers: {
            "x-access-token": `${process.env.REACT_APP_FLIGHTDATA_API_KEY}`,
          },
        }
      )
      .then((res) => res.data);
  });
}
