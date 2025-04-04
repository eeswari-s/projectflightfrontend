const FlightFeatures = () => {
    const features = [
      {
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        title: "Comfortable Travel",
        description: "Spacious seating and smooth journeys with top-quality service.",
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        title: "Best Deals & Offers",
        description: "Grab the lowest prices and exciting offers on every booking.",
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/1519/1519702.png",
        title: "24x7 Customer Support",
        description: "Get help anytime for bookings, changes or questions.",
      },
    ];
  
    return (
      <section className="bg-sky-100 py-10">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3 text-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-700">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FlightFeatures;
  