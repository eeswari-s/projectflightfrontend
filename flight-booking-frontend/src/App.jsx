import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SearchFlights from "./Components/SearchFlights";
import Booking from "./Pages/Booking";
import Flights from "./Pages/Flights";
import ErrorBoundary from "./Components/ErrorBoundary";
import Payment from "./Components/Payment";
import BookingConfirmation from "./Components/BookingConformation/BookingConformation";
import PaymentSuccess from "./Components/PaymentSuccess";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ErrorBoundary>
      <Router>
      
        {isAuthenticated && <Navbar />}

        <Routes>
         
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
        <Route path="/search-flights" element={<SearchFlights />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />

          <Route path="/" element={<BookingConfirmation bookingDetails={{ flightId: '123', bookingId: 'abc123', flightName: 'Flight XYZ' }} />} />
          <Route path="/success" element={<PaymentSuccess />} />

        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
