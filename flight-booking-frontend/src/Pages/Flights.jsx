import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../Components/SearchBar";
import FlightCard from "../Components/FlightCard";
import Pagination from "../Components/Pagination";
import "../styles/Flights.css";

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage] = useState(10);
  const [filteredFlights, setFilteredFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/flights");
        setFlights(response.data);
        setFilteredFlights(response.data);
      } catch (error) {
        console.error("Error fetching flights:", error);
      }
    };
    fetchFlights();
  }, []);

  const handleSearch = (searchResults) => {
    setFilteredFlights(searchResults);
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = filteredFlights.slice(indexOfFirstFlight, indexOfLastFlight);

  return (
    <div className="flights-container">
      <SearchBar onSearch={handleSearch} />
      <div className="flights-list">
        {currentFlights.length > 0 ? (
          currentFlights.map((flight) => <FlightCard key={flight._id} flight={flight} />)
        ) : (
          <p>No flights found.</p>
        )}
      </div>
      <Pagination
        totalFlights={filteredFlights.length}
        flightsPerPage={flightsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Flights;
