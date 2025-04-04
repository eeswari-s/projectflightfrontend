import { useState } from "react";

const Tourist = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screenbg-gradient-to-r from-blue-400 to-blue-600 p-6">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-3/5  mb-8  flex flex-row items-center">
        
        {/* Image Section */}
        <div className="w-1/3">
          <img src="/assets/trichyhotel.jpeg" alt="Delhi" className="w-full h-auto rounded-lg" />
        </div>

        {/* Text Section */}
        <div className="w-2/3 px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Discover Comfort & Service</h2>
          <p className="text-gray-600 text-sm">
            Discover a blend of modern comfort and personalized service when you arrive at Courtyard Tiruchirappalli. 
            Located in the heart of Trichy, India, our hotel is the first international brand in the city. 
            Find iconic attractions including Our Lady of Lourdes Church, Srirangam Temple and the Rock Fort moments from our hotel. 
            Return and unwind in spacious rooms and suites with cutting-edge amenities like USB charging ports, 
            individual climate control and laptop-sized safes. After a busy day in Tiruchirappalli, dine at our hotel's Trichy Kitchen, 
            or stop by Soma Bar for a cocktail. We also offer T Lounge, featuring grab-and-go cuisine. 
            Jumpstart your day with a workout in our hotel fitness center or a swim in the outdoor pool, 
            before exploring the city via the nearby Trichy railway junction or the bus stand. 
            Those planning an event in Trichy love our 20,000 square feet of banquet space with catering. 
            An unforgettable experience awaits at Courtyard Tiruchirappalli.
          </p>
          <h1 className="text-5xl font-bold text-green-500 animate-bounce">RS.8500</h1>
          {/* Contact Button */}
          <div className="mt-4">
            <button 
              onClick={() => setShowContact(!showContact)} 
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-green-500 transition"
            >
              Contact
            </button>

            {/* Contact Number (Shown on Click) */}
            {showContact && (
              <p className="mt-2 text-gray-800 font-semibold">📞 +91 98765 43210</p>
              
            )}
          </div>
        </div>

      </div>










      <div className="bg-white p-6 rounded-lg shadow-2xl mb-8 w-3/5 flex flex-row items-center">
        
        {/* Image Section */}
        <div className="w-1/3">
          <img src="/assets/mumbai hotel.jpg" alt="Delhi" className="w-full h-auto rounded-lg" />
        </div>

        {/* Text Section */}
        <div className="w-2/3 px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Hotel Mumbai International </h2>
          <p className="text-gray-600 text-sm">
          Hotel Mumbai International is a budget-friendly stay located near Mumbai's international
           airport, perfect for travelers looking for convenience without splurging on luxury. 
           It offers clean, air-conditioned rooms with basic amenities like free Wi-Fi, a TV, 
           and a private bathroom. The hotel provides a simple but decent breakfast, and its
            24-hour front desk ensures assistance anytime you need it.
          </p>
          <h1 className="text-5xl font-bold text-green-500 animate-bounce">RS.5500</h1>
          {/* Contact Button */}
          <div className="mt-4">
            <button 
              onClick={() => setShowContact(!showContact)} 
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-green-500 transition"
            >
              Contact
            </button>

            {/* Contact Number (Shown on Click) */}
            {showContact && (
              <p className="mt-2 text-gray-800 font-semibold">📞 +91 97765 43210</p>
            )}
          </div>
        </div>

      </div>





      <div className="bg-white p-6 rounded-lg shadow-2xl w-3/5  mb-8  flex flex-row items-center">
        
        {/* Image Section */}
        <div className="w-1/3">
          <img src="/assets/madurai hotel.jpg" alt="Delhi" className="w-full h-auto rounded-lg" />
        </div>

        {/* Text Section */}
        <div className="w-2/3 px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Hotel O Nagamalaipudukottai Madurai</h2>
          <p className="text-gray-600 text-sm">
          You might be eligible for a Genius discount at Hotel O Nagamalaipudukottai Madurai.
           To check if a Genius discount is available for your selected dates sign in.
            Genius discounts at this property are subject to book dates, stay dates and other 
            available deals.Located within 11 km of Meenakshi Temple and 8.7 km of Aarapalayam Bus
             Terminus, Hotel O Nagamalaipudukottai Madurai provides rooms with air conditioning and a
              private bathroom in Madurai. With free WiFi, this 3-star hotel offers room service and a 
              24-hour front desk. The hotel features family rooms.Guest rooms at the hotel are equipped
               with a seating area, a flat-screen TV with satellite channels and a private bathroom with
                free toiletries and a bath or shower. The rooms include a desk.
          </p>
          <h1 className="text-5xl font-bold text-green-500 animate-bounce">RS.4000</h1>
          {/* Contact Button */}
          <div className="mt-4">
            <button 
              onClick={() => setShowContact(!showContact)} 
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-green-500 transition"
            >
              Contact
            </button>

            {/* Contact Number (Shown on Click) */}
            {showContact && (
              <p className="mt-2 text-gray-800 font-semibold">📞 +91 9856789023</p>
            )}
          </div>
        </div>

      </div>





      <div className="bg-white p-6 rounded-lg shadow-2xl w-3/5  mb-8  flex flex-row items-center">
        
        {/* Image Section */}
        <div className="w-1/3">
          <img src="/assets/chennai hotel.jpg" alt="Delhi" className="w-full h-auto rounded-lg" />
        </div>

        {/* Text Section */}
        <div className="w-2/3 px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">ANL Residency</h2>
          <p className="text-gray-600 text-sm">
          Ideally situated in the centre of Chennai, ANL Residency features free WiFi and free 
          private parking. The property is around 3.1 km from Government Museum Chennai, 3.5 km 
          from Fort Museum and 4.1 km from Ma Chidambaram Stadium. The property is non-smoking and
           is situated 1.3 km from Chennai Central Railway StationAt the hotel, the rooms have a desk 
           and a flat-screen TV. Featuring a private bathroom with a shower and free toiletries, rooms 
           at ANL Residency also feature a city view.Spencer Plaza Mall is 5 km from the accommodation, 
           while Pondy Bazaar is 8.3 km from the property. Chennai International Airport is 17 km away.
          </p>
          <h1 className="text-5xl font-bold text-green-500 animate-bounce">RS.15000</h1>
          {/* Contact Button */}
          <div className="mt-4">
            <button 
              onClick={() => setShowContact(!showContact)} 
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-green-500 transition"
            >
              Contact
            </button>

            {/* Contact Number (Shown on Click) */}
            {showContact && (
              <p className="mt-2 text-gray-800 font-semibold">📞 +91 999993333</p>
            )}
          </div>
        </div>
      </div>




      <div className="bg-white p-6 rounded-lg shadow-2xl w-3/5  mb-8  flex flex-row items-center">
        
        {/* Image Section */}
        <div className="w-1/3">
          <img src="/assets/coimbature.jpg" alt="Delhi" className="w-full h-auto rounded-lg" />
        </div>

        {/* Text Section */}
        <div className="w-2/3 px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Super Townhouse Srm Kuppakonam Pudur</h2>
          <p className="text-gray-600 text-sm">
          Comfortable Accommodations: Super Townhouse Srm Kuppakonam Pudur in Coimbatore offers four-star
           comfort with air-conditioned rooms featuring private bathrooms, tea and coffee makers, work desks,
            and free WiFi throughout the property.Exceptional Facilities: Guests can enjoy a bar and relax
             in the on-site lounge. The hotel provides a shared kitchen, family rooms, room service, and 
             luggage storage, ensuring a pleasant stay.Convenient Location: Located 9.3 mi from Coimbatore
              International Airport, the hotel is close to attractions such as Codissia Trade Fair Complex 
              (6.8 mi), Coimbatore Junction (2.5 mi), and Podanur Junction (7.5 mi).
          </p>
          <h1 className="text-5xl font-bold text-green-500 animate-bounce">RS.8500</h1>
          {/* Contact Button */}
          <div className="mt-4">
            <button 
              onClick={() => setShowContact(!showContact)} 
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-green-500 transition"
            >
              Contact
            </button>

            {/* Contact Number (Shown on Click) */}
            {showContact && (
              <p className="mt-2 text-gray-800 font-semibold">📞 +91 8870436271</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Tourist;
