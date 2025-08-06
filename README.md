GiftsNGears - Gifts & Autoparts Ordering and Delivery WebApp

https://ibb.co/rGGpdcg4

GiftsNGears is a full-stack platform specializing in gifts and auto parts, featuring a comprehensive admin portal for real-time content management. Built with React, Node.js, and MongoDB.

Live Demo: https://wears-n-gears.vercel.app/

Key Features
🛒 User-Facing Store
Product Catalog: Browse gifts and auto parts with category filters

Secure Checkout: Razorpay payment gateway integration

Order Tracking: Real-time status updates

Shopping Cart: Intuitive cart management

Sales Analytics: Dashboard with purchase trends

🛠️ Admin Portal
Live Inventory Management: Add/update products and categories

Order Processing: Update status (Pending → Accepted → Delivered)

Banner Customization: Control homepage promotions

Real-time Sync: Instant updates to live site

Sales Reporting: Track performance metrics

Tech Stack
Frontend:
https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white

Backend:
https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white

Database:
https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white

Payment:
https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF

Screenshots
User Interface

Admin Portal
Dashboard	Product Management
https://admin-dashboard.png <!-- Add image -->	https://admin-products.png <!-- Add image -->
Sales analytics overview	Add/edit products and categories
Order Management	Banner Control
https://admin-orders.png <!-- Add image -->	https://admin-banners.png <!-- Add image -->
Update order status in real-time	Customize homepage promotions
Getting Started
Prerequisites
Node.js (v16+)

MongoDB Atlas account or local instance

Razorpay merchant account

Installation
Clone the repository:

bash
git clone https://github.com/your-username/GiftsNGears.git
cd GiftsNGears
Install dependencies:

bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
Set up environment variables (.env in backend):

env
MONGODB_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
JWT_SECRET=your_jwt_secret
Run the application:

bash
# Start backend
cd backend
npm start

# Start frontend (in new terminal)
cd frontend
npm start

Access the application:

User site: http://localhost:3000
Admin portal: http://localhost:3000/admin (Use admin credentials)

Future Enhancements
- Mobile app integration
- AI-powered product recommendations
- Multi-vendor marketplace support
- Advanced sales forecasting
