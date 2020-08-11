import React, { useState } from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dashboard from "./components/Dashboard";
import CheapestTickets from "./components/CheapestTickets";
import SearchForm from "./components/SearchForm/SearchForm";
import CurrencyDropDown from "./components/SearchForm/CurrencyDropDown";
import DatePicker from "./components/SearchForm/DatePicker";
import Header from "./components/Header";
import Clouds from "./components/Clouds";
import PredictiveInputField from "./components/SearchForm/PredictiveInputField";
import Footer from "./components/Footer/Footer";

function App() {
  const [search, setSearch] = useState({
    destination: "",
    origin: "",
    depart: Date.now(),
    ret: Date.now(),
    curr: "USD",
  });

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
    console.log(search);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Clouds />
      <Dashboard>
        <SearchForm>
          <div className="search locations">
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
          </div>
          <div className="search dates">
            <DatePicker
              label="Departure"
              name="depart"
              search={search}
              setSearch={setSearch}
              handleChange={handleChange}
            />
            <DatePicker
              label="Return"
              name="ret"
              search={search}
              setSearch={setSearch}
              handleChange={handleChange}
            />
          </div>
          <CurrencyDropDown search={search} handleChange={handleChange} />
        </SearchForm>
        <CheapestTickets search={search} />
      </Dashboard>
      <Footer />
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
