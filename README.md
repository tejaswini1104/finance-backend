**Finance Data Processing & Access Control Backend**

**Overview**

This project is a backend system designed for a finance dashboard application. It enables users to manage financial records securely with role-based access control and provides aggregated insights for decision-making.

The system demonstrates API design, data modeling, authentication, authorization, and backend logic implementation.

**Features**
🔐 Authentication & Authorization
User Registration & Login
JWT-based Authentication
Role-based Access Control (Admin, Analyst, Viewer)

👥 User Roles
Admin → Full access (create, update, delete records & manage users)
Analyst → View records and access dashboard insights
Viewer → Read-only access

💰 Financial Records Management
Create financial records (income/expense)
View records
Update records
Delete records
Filter records by type and category

📊 Dashboard & Analytics
Total Income
Total Expense
Net Balance
Category-wise Summary
Aggregated financial insights

🛠️ Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Local)
ODM: Mongoose
Authentication: JSON Web Tokens (JWT)

📂 Project Structure
finance-backend/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── app.js
├── server.js
├── .env
└── package.json

⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/your-username/finance-backend.git
cd finance-backend
2️⃣ Install Dependencies
npm install
3️⃣ Configure Environment

Create .env file:

MONGO_URI=mongodb://127.0.0.1:27017/financeDB
4️⃣ Start MongoDB
mongod
5️⃣ Run Server
npx nodemon server.js
🔗 API Endpoints
🔐 Auth
POST /api/auth/register
POST /api/auth/login
💰 Records
POST /api/records
GET /api/records
PUT /api/records/:id
DELETE /api/records/:id
📊 Dashboard
GET /api/dashboard
🧪 Testing

Use Postman to test APIs:

Register user
Login → get JWT token

Add token in headers

Authorization: <token>
Test records & dashboard APIs
