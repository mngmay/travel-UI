import { useQuery } from "react-query";
import axios, { CancelToken } from "axios";

const useAutoComplete = (term) => {
  return useQuery(
    ["airport", term],
    () => {
      const source = CancelToken.source();

      const promise = axios
        .get(`/places2?term=${term}&locale=en&types[]=airport`, {
          headers: {
            "x-access-token": `${process.env.REACT_APP_FLIGHTDATA_API_KEY}`,
          },
          cancelToken: source.token,
        })
        .then((res) => {
          return res.data;
        });

      promise.cancel = () => {
        source.cancel("Query cancelled");
      };

      return promise;
    },
    {
      enabled: term,
    }
  );
};

export default useAutoComplete;
