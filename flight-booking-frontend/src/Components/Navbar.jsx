import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div className="flex items-center">
        <img src="/assets/flight.png" alt="Flight" className="h-8 mr-2" />
        <span className="italic text-lg">Suki World</span>
      </div>
      <div>
        <button className="mr-4">Special</button>
        <Link to="/login">
          <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-green-500">
            Login/Signup
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
