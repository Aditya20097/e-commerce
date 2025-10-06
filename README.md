🛍️ Klicksy

Klicksy is a modern full-stack e-commerce web app offering a seamless shopping experience with secure Stripe payment integration, responsive design, and an intuitive admin dashboard.

🌐 Live Demo: https://klicksy-frontend.vercel.app

🚀 Features

🧾 Product listing, search & filtering

🛒 Add to cart, update quantity, and checkout

💳 Secure payments via Stripe

👤 User authentication (signup/login/logout)

📦 Order tracking & order history

🛠️ Admin dashboard to manage products & orders

📱 Fully responsive for all devices

🔒 JWT-based authentication & role protection

🧩 Tech Stack

Frontend: React + Vite + Tailwind CSS
Backend: Node.js + Express.js
Database: MongoDB (Mongoose)
Payments: Stripe API
Hosting: Vercel (Frontend) & (Backend) & ( Admin)

# Clone repo
git clone https://github.com/Aditya20097/klicksy.git
cd klicksy

# Install dependencies
npm install

# Create .env file
VITE_BACKEND_URL=http://localhost:4000
STRIPE_PUBLIC_KEY=.......
STRIPE_SECRET_KEY=.......

# Run frontend
npm run dev
# Run Backend
cd backend
npm start

💰 Stripe Payment Flow

User proceeds to checkout.

Frontend sends order details to backend.

Backend creates a Stripe Payment Intent.

Stripe securely handles payment.

Order status updates after confirmation.

Use Stripe test cards (e.g. 4242 4242 4242 4242) during testing.


# Future Enhancements

Wishlist & Favorites

Discount coupons

Email notifications

Admin analytics dashboard

PWA & mobile optimization

👨‍💻 Author

Aditya
📧 [raj.aditya10999@gmail.com]

🔗 klicksy-frontend.vercel.app
