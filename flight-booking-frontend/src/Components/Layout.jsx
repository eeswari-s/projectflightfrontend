import { Outlet, useNavigate } from "react-router-dom";

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

      <Outlet />
    </div>
  );
};

export default Layout;
