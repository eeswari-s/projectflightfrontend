import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";

const Layout = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"); // ✅ If not logged in, send to Login
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <Navbar />
      <Outlet /> {/* ✅ If logged in, this will render Flights */}
    </div>
  );
};

export default Layout;
