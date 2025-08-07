# GiftsNGears - Gifts & Autoparts Ordering and Delivery WebApp

GiftsNGears is a platform specializing in ordering and delivering of gifts and auto parts, featuring a comprehensive admin portal for real-time content management. Built with React, Node.js, and MongoDB.

- Live Demo: https://wears-n-gears.vercel.app/
  
![a2evus](https://github.com/user-attachments/assets/e04f5a43-05ae-43e2-9c9b-01eba647659c)
![a2exsi](https://github.com/user-attachments/assets/8e84944d-7f5f-4772-ae04-c4ff5fd0f617)
![a2ezr0](https://github.com/user-attachments/assets/95161db9-b15e-458e-8f38-879c7ec6a3d3)

##### Key Features
🛒 User-Facing Store
- Product Catalog: Browse gifts and auto parts with category filters
- Secure Checkout: Razorpay payment gateway integration
- Order Tracking: Real-time status updates
- Shopping Cart: Intuitive cart management
- Sales Analytics: Dashboard with purchase trends

🛠️ Admin Portal
- Live Inventory Management: Add/update products and categories
- Order Processing: Update status (Pending → Accepted → Delivered)
- Banner Customization: Control homepage promotions
- Real-time Sync: Instant updates to live site
- Sales Reporting: Track performance metrics

![a2exxk](https://github.com/user-attachments/assets/cb21650b-579d-40d9-9d05-85b28ba834de)
![a2ezov](https://github.com/user-attachments/assets/49a1ba3e-0377-4ff5-beca-0db383d90ec4)

##### Tech Stack

- Frontend:
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

- Backend:
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

- Database:
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

- Payment:
![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF)

- GiftsNGears Server - https://github.com/Phaham/wears_n_gears_server
- GiftsNGears Admin - https://github.com/Phaham/wears_n_gears_admin

##### Installation
- Clone the repository:

```bash
git clone https://github.com/phaham/GiftsNGears.git
cd GiftsNGears
```
```bash
# Backend
cd server
npm install
```
##### Frontend
```
cd client
npm install
```
##### Set up environment variables (.env in backend):

```env
MONGODB_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
JWT_SECRET=your_jwt_secret
```

```bash
# Start backend
cd server
npm start
```
##### Start frontend (in new terminal)
```
cd client
npm start
```

##### Future Enhancements
- Mobile app integration
- AI-powered product recommendations
- Multi-vendor marketplace support
- Advanced sales forecasting
