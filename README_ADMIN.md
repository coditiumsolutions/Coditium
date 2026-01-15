# Admin Login System Setup Guide

## Database Setup

The system uses Neon PostgreSQL database. The connection string is already configured in `server/index.js`.

## Default Admin Credentials

- **Username:** `admin`
- **Password:** `admin123`

## Installation Steps

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Configure Email (Optional):**
   - Edit `server/index.js` and update email configuration
   - For Gmail, you need to use an App Password
   - Update `EMAIL_USER` and `EMAIL_PASS` in the code

3. **Start the Server:**
   ```bash
   npm run server
   ```
   Server will run on `http://localhost:5000`

4. **Start React App (in another terminal):**
   ```bash
   npm start
   ```
   App will run on `http://localhost:3000`

   OR run both together:
   ```bash
   npm run dev
   ```

## Database Tables

The system automatically creates two tables:

1. **demo_requests** - Stores demo request form submissions
   - id, name, email, phone, company, requirements, created_at

2. **admin_users** - Stores admin user accounts
   - id, username, password (hashed), email, created_at

## API Endpoints

- `POST /api/demo-request` - Submit demo request
- `POST /api/admin/login` - Admin login
- `GET /api/admin/demo-requests` - Get all demo requests
- `GET /api/admin/users` - Get all admin users
- `POST /api/admin/users` - Create new admin user
- `PUT /api/admin/users/:id` - Update admin user password
- `DELETE /api/admin/users/:id` - Delete admin user

## Access Admin Panel

1. Go to: `http://localhost:3000/admin/login`
2. Login with: `admin` / `admin123`
3. You'll be redirected to the dashboard

## Features

- ✅ Admin login system
- ✅ Demo request form saves to database
- ✅ Email notification to users
- ✅ Admin dashboard with demo requests
- ✅ Admin user management (add, edit, delete)
- ✅ Protected routes

## Notes

- Make sure the server is running before submitting demo requests
- Email functionality requires proper email configuration
- Default admin user is created automatically on first server start


