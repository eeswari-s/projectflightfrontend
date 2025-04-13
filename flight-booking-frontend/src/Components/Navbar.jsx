import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div className="flex items-center">
        <img src="/assets/flight-logo.png" alt="Flight" className="h-8 mr-2" />
        <span className="italic text-lg">Suki World</span>
      </div>
      <div>
      <Link to="/search-flights">
            <button className="mr-4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-200 transition">
              HOME
            </button>
          </Link>
      <Link to="/Special">
            <button className="mr-4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-200 transition">
              CAB 
            </button>
          </Link>
        <Link to="/hotels">
            <button className="mr-4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-200 transition">
              Hotels
            </button>
          </Link>
          <Link to="/tourist">
            <button className="mr-4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-200 transition">
              tourist places
            </button>
          </Link>
          <Link to="/ContactUs">
            <button className="mr-4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-200 transition">
              contact us
            </button>
          </Link>
          <Link to="/compareFlights">
            <button className="mr-4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-200 transition">
              Compare price
            </button>
          </Link>
         
      </div>
    </nav>
  
    </>
  );
};

export default Navbar;
