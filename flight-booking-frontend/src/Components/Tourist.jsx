import Navbar from "./Navbar";

const Tourist = () => {
    
    const touristPlaces = [
      { img: "/assets/mumbai toturist.jpg", text: "The Elephanta Caves" },
      { img: "/assets/delhi air.jpg", text: "The Air Force Museum in Delhi" },
      { img: "/assets/bangalore.jpg", text: "Fun World, one of Bangalore’s beloved amusement parks" },
      { img: "/assets/gandhi.jpg", text: "Gandhi Memorial Museum-madurai" },
      { img: "/assets/coimbature mus.jpg", text: "Gedee Car Museum-coimbature" },
      { img: "/assets/wonderfulcarving.jpg", text: "Pancha Rathas-chennai" },
    ];
  
    return (
      <>
     <Navbar/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 p-6">
        <h2 className="text-3xl font-bold text-white mb-6">Top Tourist Destinations</h2>
        
        
        <div className="grid grid-cols-3 gap-6">
          {touristPlaces.map((place, index) => (
            <div key={index} className="bg-white shadow-xl rounded-lg p-4 w-60 flex flex-col items-center">
             
              <div className="w-full">
                <img src={place.img} alt="Tourist Place" className="rounded-lg w-full h-40 object-cover" />
              </div>
  
            
              <div className="text-gray-700 text-center mt-3">
                <p className="text-sm">{place.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  };
  
  export default Tourist;
  
  