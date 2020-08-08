import { useQuery } from "react-query";
import axios, { CancelToken } from "axios";

const useAutoComplete = (code) => {
  return useQuery(
    ["city", code],
    () => {
      const source = CancelToken.source();

      const promise = axios
        .get(`/places2?term=${code}&locale=en&types[]=city`, {
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
      enabled: code,
    }
  );
};

export default useAutoComplete;
