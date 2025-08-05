# 🏥 MediSphere

<div align="center">

![MediSphere Banner](https://github.com/ahtasham67/MediSphere_L2-T1_ORACLEDB/assets/121820860/3666f427-ad41-4012-859b-a712e8d80e42)

**A Complete Healthcare Solution Platform**

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Oracle DB](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white)](https://www.oracle.com/database/)
[![EJS](https://img.shields.io/badge/EJS-90C53F?style=for-the-badge&logo=ejs&logoColor=white)](https://ejs.co/)

</div>

## 📋 Overview

MediSphere is a comprehensive healthcare management platform that bridges the gap between patients and healthcare providers. Built with modern web technologies and Oracle Database, it offers a seamless experience for medical consultations, appointment booking, and doctor-patient interactions.

## ✨ Features

- 🔐 **Secure Authentication** - User registration and login with session management
- 👨‍⚕️ **Doctor Profiles** - Comprehensive doctor information and specializations
- 📅 **Appointment Booking** - Easy-to-use appointment scheduling system
- 💬 **Consultation Management** - Online consultation platform
- 🎨 **Responsive Design** - Mobile-friendly interface with modern UI/UX
- 🔍 **Doctor Search** - Find doctors by specialization and availability
- 📊 **Dashboard** - Personalized user dashboards for patients and doctors

## 🛠️ Tech Stack

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **Oracle Database** - Primary database for data storage
- **EJS** - Template engine for server-side rendering

### Frontend

- **HTML5** - Markup language
- **CSS3** - Styling with modern design patterns
- **JavaScript** - Client-side interactivity

### Dependencies

- **bcrypt** - Password hashing
- **express-session** - Session management
- **body-parser** - Request parsing
- **cors** - Cross-origin resource sharing
- **multer** - File upload handling
- **nodemon** - Development server auto-restart

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- Oracle Database
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ahtasham67/MediSphere_L2-T1_ORACLEDB.git
   cd MediSphere_L2-T1_ORACLEDB
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Database**

   - Set up Oracle Database
   - Update connection details in `Database/database.js`
   - Default credentials: `c##bookstore/bookstore`

4. **Environment Setup**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Start the application**

   ```bash
   npm start
   # or
   nodemon db.js
   ```

6. **Access the application**
   - Open browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
MediSphere_L2-T1_ORACLEDB/
├── 📄 db.js                 # Main server file
├── 📄 index.js              # Alternative entry point
├── 📦 package.json          # Dependencies and scripts
├── 📂 Database/             # Database configuration and queries
│   ├── auth.js
│   ├── database.js
│   └── DB-specified-doctors.js
├── 📂 Routes/               # Express route handlers
│   ├── consultation.js
│   ├── landing.js
│   ├── login.js
│   ├── selecteddoctor.js
│   └── signup.js
├── 📂 Middlewares/          # Custom middleware functions
│   ├── auth.js
│   ├── appointments.js
│   └── controllers/
├── 📂 views/                # EJS templates
│   ├── index.ejs
│   ├── login.ejs
│   ├── signup.ejs
│   └── ...
├── 📂 public/               # Static assets
│   ├── 🎨 CSS files
│   ├── 🖼️ Images
│   └── 📄 HTML files
└── 📂 CSS/                  # Additional stylesheets
```

## 🎯 Key Features Breakdown

### 🔒 Authentication System

- Secure user registration and login
- Password encryption using bcrypt
- Session-based authentication
- Role-based access control

### 👩‍⚕️ Doctor Management

- Doctor profile creation and management
- Specialization categorization
- Availability scheduling
- Rating and review system

### 📅 Appointment System

- Real-time appointment booking
- Calendar integration
- Automated notifications
- Appointment history tracking

### 💻 User Interface

- Responsive design for all devices
- Intuitive navigation
- Modern and clean UI
- Accessibility features

## 🔧 API Endpoints

| Method | Endpoint          | Description            |
| ------ | ----------------- | ---------------------- |
| GET    | `/landing`        | Landing page           |
| POST   | `/login`          | User authentication    |
| POST   | `/signup`         | User registration      |
| GET    | `/consultation`   | Consultation interface |
| GET    | `/selecteddoctor` | Doctor selection       |

## 🎥 Demo

[📹 **Watch Full Demonstration**](https://drive.google.com/file/d/1MkpLkjxcCU6kxPLmPiA1bPef0tRtM-su/view?usp=drive_link)


## 👥 Team

- **Ahtashamul Haque** - [@ahtasham67](https://github.com/ahtasham67)
- **Tanzim Tousif

<div align="center">

**Made with ❤️ for better healthcare accessibility**

</div>
