import { useQuery } from "react-query";
import moment from "moment";
import axios, { CancelToken } from "axios";

export default function useCheapestTickets({ search }) {
  const { destination, origin, depart, ret, curr } = search;

  return useQuery(
    ["cheapestTickets", { origin, destination, depart, ret, curr }],
    () => {
      const source = CancelToken.source();

      const promise = axios
        .get(
          `/v1/prices/cheap?origin=${origin}&destination=${destination}&depart_date=${moment(
            depart
          ).format("YYYY-MM")}&return_date=${moment(ret).format(
            "YYYY-MM"
          )}&currency=${curr}`,
          {
            headers: {
              "x-access-token": `${process.env.REACT_APP_FLIGHTDATA_API_KEY}`,
            },
            cancelToken: source.token,
          }
        )
        .then((res) => {
          return res.data;
        });

      promise.cancel = () => {
        source.cancel("Query cancelled");
      };

      return promise;
    },
    {
      enabled: origin,
    }
  );
}
