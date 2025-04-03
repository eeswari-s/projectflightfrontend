import SearchFlights from "./SearchFlights.jsx";

const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div className="flex items-center">
        <img src="/assets/flight.png" alt="Flight" className="h-8 mr-2" />
        <span className="italic text-lg">Suki World</span>
      </div>
      <div>
        <button className="mr-4">Special</button>
   
      </div>
    </nav>
    <SearchFlights />
    </>
  );
};

export default Navbar;
