const FlightServicePlaces = () => {
    const places = [
      "Chennai", "Mumbai", "Bangalore", "New Delhi", "Madurai",
      "Trichy", "Pondicherry", "Hyderabad", "Visakhapatnam", "Agra",
      "Lucknow", "Kolkata", "Pune", "Jaipur", "Kochi",
      , "Salem", "Coimbatore"
    ];
  
    return (
      <section className="bg-gradient-to-b from-white to-sky-200 py-10">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Available Flight Service Places
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 md:px-12">
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-lg text-center font-medium text-gray-700 hover:bg-blue-100 transition"
            >
              {place}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FlightServicePlaces;
  