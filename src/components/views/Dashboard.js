import React, { useState } from "react";
import CheapestTickets from "../CheapestTickets";
import SearchForm from "../SearchForm/SearchForm";
import CurrencyDropDown from "../SearchForm/CurrencyDropDown";
import DatePicker from "../SearchForm/DatePicker";
import PredictiveInputField from "../SearchForm/PredictiveInputField";

const Dashboard = () => {
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
    <div className="view dashboard">
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
    </div>
  );
};

export default Dashboard;
