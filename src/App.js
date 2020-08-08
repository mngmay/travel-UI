import React, { useState } from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dashboard from "./components/Dashboard";
import CheapestTickets from "./components/CheapestTickets";
import SearchForm from "./components/SearchForm/SearchForm";
import CurrencyDropDown from "./components/SearchForm/CurrencyDropDown";
import Header from "./components/Header";
import Clouds from "./components/Clouds";
import PredictiveInputField from "./components/SearchForm/PredictiveInputField";

function App() {
  const [search, setSearch] = useState({
    destination: "",
    origin: "",
    depart: "",
    ret: "",
    curr: "USD",
  });

  const handleChange = (e) => {
    if (e.target.name === "origin") {
      setSearch({ ...search, [e.target.name]: e.target.value.slice(0, 4) });
    } else {
      setSearch({ ...search, [e.target.name]: e.target.value });
    }
    console.log(search);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Clouds />
      <Dashboard>
        <SearchForm>
          <PredictiveInputField
            label="origin"
            placeholder="SEA"
            search={search}
            setSearch={setSearch}
            handleChange={handleChange}
          />
          <PredictiveInputField
            label="destination"
            placeholder="BOS"
            search={search}
            setSearch={setSearch}
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
