# ✈️ Flight Booking and Reservation System

A full-stack web application for booking flights, viewing available seats, making payments, and receiving booking confirmation with PDF via email.

---

## 🛠 Tech Stack

### 🔹 Frontend
- React + Vite
- Tailwind CSS
- Axios
- Stripe (for payment checkout)

### 🔹 Backend
- Node.js + Express.js
- MongoDB + Mongoose
- Nodemailer (for sending emails with PDF)
- PDFKit (to generate booking confirmation)

---

## 📦 Features

- 🔐 User Authentication (Register/Login)
- ✈️ Browse Available Flights
- 🪑 Select & Reserve Seat
- 💳 Secure Payment via Stripe
- 📧 Email confirmation with attached PDF (Booking Summary)
- ✅ Admin can track all bookings

---

## 🔧 Project Structure

### 📁 Backend (`/backend`)
/controllers

authController.js

bookingController.js

paymentController.js

pdfGenerator.js

/routes

authRoutes.js

flightRoutes.js

paymentRoutes.js

/models

User.js

Booking.js

Flight.js

config/

database.js

mailTransport.js

.env

server.js

shell
Copy
Edit

### 📁 Frontend (`/client`)
/src

/Pages

Login.jsx

Register.jsx

Flights.jsx

Booking.jsx

PaymentPage.jsx ✅

/components

Navbar.jsx

/utils

axiosInstance.js

App.jsx

main.jsx

tailwind.config.js

.env ✅

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/flight-booking-system.git
cd flight-booking-system
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
🔐 Create a .env file in /backend:

ini
Copy
Edit
PORT=3000
MONGO_URI=your_mongodb_uri
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
Start the server:

bash
Copy
Edit
npm run dev
3. Frontend Setup
bash
Copy
Edit
cd client
npm install
Create a .env file in /client:

ini
Copy
Edit
VITE_STRIPE_PUBLIC_KEY=your_stripe_publishable_key
Start the frontend:

bash
Copy
Edit
npm run dev
🧪 Testing the Flow
Register or login

Select a flight and seat

Click "Book Now" → goes to Booking form

Click "Pay Now" → Stripe checkout
📎 API Endpoints
🔐 Auth
POST /api/auth/register

POST /api/auth/login

✈️ Flights
GET /api/flights

GET /api/flights/:id

🪑 Booking
POST /api/book

💳 Payment
POST /api/create-checkout-session

POST /api/payment/payment-success ✅

📩 Email Sample
After successful payment, the user receives:

Booking confirmation message
