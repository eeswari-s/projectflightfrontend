import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SearchFlights from "./Components/SearchFlights";
import Booking from "./Pages/Booking";
import Flights from "./Pages/Flights";
import Payment from "./Components/Payment";
import PaymentSuccess from "./Components/PaymentSuccess";
import Footer from "./Components/Footer.jsx";
import FeatureSuccess from "./Components/FeatureSuccess";
import FlightServicePlaces from "./Components/FlightServicePlaces";
import FlightFeatures from "./Components/FlightFeatures.jsx";
import Hotels from "./Components/Hotels"; 
import Special from "./Components/Special.jsx";
import Tourist from "./Components/Tourist";
import ContactUs from "./Components/ContactUs";
import CompareFlights from "./Components/CompareFlights";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (

      <Router>
      
        {isAuthenticated && <search-flights />}
<div>
        <Routes>
         
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
        <Route path="/search-flights" element={<SearchFlights />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/special" element={<Special />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/tourist" element={<Tourist />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/compareFlights" element={<CompareFlights />} />
        </Routes>
        </div>
        <FlightFeatures />
        <FeatureSuccess />
        <FlightServicePlaces />
        
        <Footer />
      </Router>

  );
};

export default App;
