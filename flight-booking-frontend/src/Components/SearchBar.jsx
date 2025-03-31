import React, { useState } from "react";
import axios from "axios";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [departureFrom, setDepartureFrom] = useState("");
  const [goingTo, setGoingTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/flights/search`, {
        params: { departureFrom, goingTo, departureDate },
      });
      onSearch(response.data);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  return (
    <div className="search-container">
         <div className="search-box">
      <input type="text" placeholder="From" value={departureFrom} onChange={(e) => setDepartureFrom(e.target.value)}  className="search-input"/>
      <input type="text" placeholder="To" value={goingTo} onChange={(e) => setGoingTo(e.target.value)}  className="search-input"/>
      <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)}  className="search-input"/>
      <button onClick={handleSearch}>Search</button>
    </div>
    </div>
  );
};

export default SearchBar;
