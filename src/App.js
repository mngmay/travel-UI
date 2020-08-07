import React, { useState } from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dashboard from "./components/Dashboard";
import CheapestTickets from "./components/CheapestTickets";
import SearchForm from "./components/SearchForm/SearchForm";
import CurrencyDropDown from "./components/SearchForm/CurrencyDropDown";
import InputField from "./components/SearchForm/InputField";
import Header from "./components/Header";
import Clouds from "./components/Clouds";

import useAutoComplete from "./hooks/useAutoComplete";

function App() {
  const [search, setSearch] = useState({
    destination: "",
    origin: "",
    depart: "",
    ret: "",
    curr: "USD",
    predictiveSearch: [],
  });

  const autoCompleteResults = useAutoComplete(search.origin);
  console.log("AutoComplete Test", autoCompleteResults);

  const handleChange = (e) => {
    const predictions = [];
    setSearch({ ...search, [e.target.name]: e.target.value });
    // predictions = autoCompleteResults.map(
    //   (result) =>
    //     (result = { city_code: result.city_code, city_name: result.city_name })
    // );
    console.log("predictions", predictions);
    console.log(search);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Clouds />
      <Dashboard>
        <SearchForm>
          <InputField
            label="origin"
            placeholder="SEA"
            handleChange={handleChange}
          />
          <InputField
            label="destination"
            placeholder="BOS"
            handleChange={handleChange}
          />
          <CurrencyDropDown search={search} handleChange={handleChange} />
        </SearchForm>
        <CheapestTickets search={search} />
      </Dashboard>
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
