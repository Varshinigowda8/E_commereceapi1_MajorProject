
# 🛒 E-Commerce REST API

A secure and scalable E-Commerce backend built with Node.js, Express.js, and MongoDB. Supports user authentication, product and category management, image uploads, and role-based access control.

---

## 🚀 Tech Stack

- **Backend**: Node.js 18+, Express.js 4.x  
- **Database**: MongoDB with Mongoose  
- **Authentication**: JWT + bcrypt  
- **File Uploads**: Multer (local or Cloudinary-ready)  
- **Security**: Helmet, CORS, rate limiting  
- **Documentation**: Swagger UI  
- **Testing**: Postman

---

## ⚙️ Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/ecommerce-api.git
   cd ecommerce-api
npm install
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
REFRESH_SECRET=your_refresh_token_secret
npm start
http://localhost:5000/api-docs
🔐 Authentication Endpoints
Method	Endpoint	Access	Description
POST	/api/auth/register	Public	Register new user
POST	/api/auth/login	Public	Login and get tokens
POST	/api/auth/logout	Private	Logout user
POST	/api/auth/refresh-token	Public	Get new access token

🛒 Product Endpoints
Method	Endpoint	Access	Description
GET	/api/products	Public	Get all products
POST	/api/products	Seller/Admin	Create product with image
PUT	/api/products/:id	Owner/Admin	Update product
DELETE	/api/products/:id	Owner/Admin	Delete product

📦 Category Endpoints
Method	Endpoint	Access	Description
GET	/api/categories	Public	Get all categories
POST	/api/categories	Admin only	Create category
PUT	/api/categories/:id	Admin only	Update category
DELETE	/api/categories/:id	Admin only	Delete category

🧪 Postman Collection
Test all endpoints with Postman. 🔗 Postman Collection Link

📄 .env.example
env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
REFRESH_SECRET=your_refresh_token_secret

📚 Swagger Documentation
Interactive API docs available at:

Code
http://localhost:5000/api-docs

🛠️ Future Enhancements
Cloudinary image storage
Email verification
Payment gateway integration
Docker containerization
Unit testing with Jest

