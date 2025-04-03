import BookingPage from "./BookingPage";
import PaymentPage from "./PaymentPage";

const CheckoutPage = () => {
  const bookingId = "662c1a2e4f1c2a6b8f1a4e12"; // ✅ Replace with actual booking ID
  const amount = 5000; // ✅ Replace with actual amount

  return (
    <div className="flex justify-between p-6">
      {/* Left - Booking Details */}
      <div className="w-1/2 p-4">
        <BookingPage bookingId={bookingId} />
      </div>

      {/* Right - Payment */}
      <div className="w-1/2 p-4 flex justify-center items-center">
        <PaymentPage bookingId={bookingId} amount={amount} />
      </div>
    </div>
  );
};

export default CheckoutPage;
