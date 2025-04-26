 🚀 Multi-Tenant SaaS Platform (MERN Stack)

A scalable, multi-tenant SaaS platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) where users can create workspaces, manage projects, collaborate with team members, and subscribe to plans.

---

🏗️ Tech Stack
- Frontend:React.js, TailwindCSS, React Router, Formik + Yup, Socket.io-client
- Backend: Node.js, Express.js, MongoDB Atlas, JWT, bcrypt, Socket.io, Stripe API
- Deployment: Vercel (frontend), Render/Railway (backend), MongoDB Atlas (database)
- State Management: React Context API + **LocalStorage** for persisting user sessions (token, user data).

---

 ✨ Features
- 🔐 User Authentication (JWT Based, token stored securely in Local Storage)
- 🏢 Workspace (Company) Creation
- 👥 Team Management with Role-Based Access (Admin/Manager/Employee)
- 📋 Project and Task Management with Drag-and-Drop (like Trello)
- 🔔 Real-Time Notifications (using Socket.io)
- 💵 Payment Integration (Stripe for subscriptions)
- ⚙️ Admin Panel for Monitoring Users and Activities
- 📨 Email Invitations (using Nodemailer)
- 🌑 Dark Mode Support (optional)
- 📱 Responsive Design (PWA-ready)

---

📂 Folder Structure

 Frontend
```
/src
  /components
  /pages
  /context
  /services
  /hooks
  /utils
  App.jsx
  main.jsx
  index.css
```

### Backend
```
/controllers
/users
/projects
/tasks
/companies

/routes
/users.js
/projects.js
/tasks.js
/companies.js

/models
/userModel.js
/companyModel.js
/projectModel.js
/taskModel.js

/services
/stripeService.js
/mailerService.js

/middlewares
/authMiddleware.js
/roleMiddleware.js

/config
/db.js
stripe.js

server.js
```

---

🛠️ Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/your-username/saas-platform.git
cd saas-platform
```

 2. Setup Backend
```bash
cd backend
npm install
```
- Create a `.env` file inside `/backend`:
```env
PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:3000
```
- Start the backend server:
```bash
npm run dev
```

3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

---

 🔐 Environment Variables Required
| Key | Description |
|:---|:---|
| MONGO_URI | MongoDB Connection URI |
| JWT_SECRET | Secret key for JWT authentication |
| STRIPE_SECRET_KEY | Stripe secret API key |
| CLIENT_URL | Frontend base URL (for CORS and redirects) |

---

🚀 Deployment
- Frontend → Deploy using [Vercel](https://vercel.com/)
- Backend → Deploy using [Render](https://render.com/) or [Railway](https://railway.app/)
- Database → Use [MongoDB Atlas](https://www.mongodb.com/atlas)



 📦 Storage & Session
- Frontend: 
  - User session (JWT Token, User Data) is stored securely in LocalStorage.
  - Authenticated APIs use token from LocalStorage automatically.

- Backend: 
  - JWT authentication middleware validates each API call using the token.

---

 🧑‍💻 Author
This project is ompletely made by me — Saurabh Sagar Shinde.  
Feel free to check out my GitHub and connect for collaborations! 🚀


LinkedIn: [https://www.linkedin.com/in/saurabh-shinde-252b83276/]



 📝 License
This project is licensed under the MIT License.


