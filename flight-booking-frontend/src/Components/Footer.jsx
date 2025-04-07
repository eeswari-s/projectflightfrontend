import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 mt-auto">
      <div className="container mx-auto px-6">
        {/* Social Media Icons */}
      

        {/* Services Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <i className="fas fa-hotel text-3xl mb-2"></i>
            <h3 className="text-lg font-semibold">Hotels</h3>
          </div>
          <div>
            <i className="fas fa-car text-3xl mb-2"></i>
            <h3 className="text-lg font-semibold">Car Rentals</h3>
          </div>
          <div>
            <i className="fas fa-plane text-3xl mb-2"></i>
            <h3 className="text-lg font-semibold">Flights</h3>
          </div>
          <div>
            <i className="fas fa-umbrella-beach text-3xl mb-2"></i>
            <h3 className="text-lg font-semibold">Tourism</h3>
          </div>
        </div>
        <hr></hr>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-2xl mt-4 hover:text-gray-400"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-2xl mt-4 hover:text-gray-400"></i>
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp text-2xl mt-4 hover:text-gray-400"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter text-2xl mt-4 hover:text-gray-400"></i>
          </a>
        </div>
        <hr></hr>
       
        <div className="text-center mt-6">
          <p>© 2025 Flight Booking. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
