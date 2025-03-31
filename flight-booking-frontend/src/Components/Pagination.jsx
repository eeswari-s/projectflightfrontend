import React from "react";
import "../styles/Pagination.css";

const Pagination = ({ totalFlights, flightsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalFlights / flightsPerPage);

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
      <span>Page {currentPage} of {totalPages}</span>
      <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
