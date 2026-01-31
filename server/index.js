const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_4kuF5ElPwYIJ@ep-hidden-glitter-ahgmt62b-pooler.c-3.us-east-1.aws.neon.tech/Coditium?sslmode=require&channel_binding=require',
  ssl: {
    rejectUnauthorized: false
  }
});

// Initialize database tables
const initializeDatabase = async () => {
  try {
    // Create demo_requests table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS demo_requests (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        company VARCHAR(255),
        requirements TEXT,
        status VARCHAR(50) DEFAULT 'Pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Add status column if it doesn't exist (for existing tables)
    try {
      await pool.query('ALTER TABLE demo_requests ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT \'Pending\'');
    } catch (err) {
      // Column might already exist, ignore error
    }

    // Create admin_users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insert default admin user (username: admin, password: admin123)
    const adminExists = await pool.query('SELECT * FROM admin_users WHERE username = $1', ['admin']);
    if (adminExists.rows.length === 0) {
      const bcrypt = require('bcrypt');
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await pool.query(
        'INSERT INTO admin_users (username, password, email) VALUES ($1, $2, $3)',
        ['admin', hashedPassword, 'admin@coditium.com']
      );
      console.log('Default admin user created: admin / admin123');
    }

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

// Initialize database on startup
initializeDatabase();

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// API Routes

// Submit demo request
app.post('/api/demo-request', async (req, res) => {
  try {
    const { name, email, phone, company, requirements } = req.body;

    // Save to database
    const result = await pool.query(
      'INSERT INTO demo_requests (name, email, phone, company, requirements) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, phone, company, requirements]
    );

    // Send email to user (confirmation)
    const userMailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Demo Request Received - Coditium',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #002e5b;">Thank you for your Demo Request!</h2>
          <p>Dear ${name},</p>
          <p>We have received your demo request. Our team will contact you soon.</p>
          <p><strong>Your Details:</strong></p>
          <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Phone: ${phone || 'N/A'}</li>
            <li>Company: ${company || 'N/A'}</li>
            <li>Requirements: ${requirements || 'N/A'}</li>
          </ul>
          <p>Best regards,<br>Coditium Team</p>
        </div>
      `
    };

    // Send email to admin (notification)
    // If ADMIN_EMAIL is not set, fall back to EMAIL_USER so at least one admin inbox gets notified
    const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;
    
    // Debug: Log environment variables
    console.log('🔍 Email Configuration Debug:');
    console.log(`   EMAIL_USER: ${process.env.EMAIL_USER || 'NOT SET'}`);
    console.log(`   ADMIN_EMAIL: ${process.env.ADMIN_EMAIL || 'NOT SET'}`);
    console.log(`   Selected adminEmail: ${adminEmail}`);
    console.log(`   User email (request): ${email}`);
    
    const adminMailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: adminEmail,
      subject: 'New Demo Request - Coditium',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #002e5b;">New Demo Request Received</h2>
          <p>A new demo request has been submitted through the website.</p>
          <p><strong>Request Details:</strong></p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
            <li><strong>Company:</strong> ${company || 'N/A'}</li>
            <li><strong>Requirements:</strong> ${requirements || 'N/A'}</li>
            <li><strong>Submitted At:</strong> ${new Date().toLocaleString()}</li>
          </ul>
          <p>Please review this request in the admin dashboard.</p>
        </div>
      `
    };

    try {
      // Send email to user
      await transporter.sendMail(userMailOptions);
      console.log(`✅ Confirmation email sent to user: ${email}`);
      
      // Always send notification email to adminEmail (ADMIN_EMAIL or EMAIL_USER)
      // Skip if admin email is same as user email (to avoid duplicate)
      if (adminEmail && adminEmail.toLowerCase() !== email.toLowerCase()) {
        console.log(`📧 Attempting to send admin notification to: ${adminEmail}`);
        
        try {
          await transporter.sendMail(adminMailOptions);
          console.log(`✅ Notification email sent to admin: ${adminEmail}`);
        } catch (adminEmailError) {
          console.error('❌ Admin notification email failed:', adminEmailError.message);
          console.error('Full error:', adminEmailError);
          // Continue even if admin email fails
        }
      } else if (adminEmail && adminEmail.toLowerCase() === email.toLowerCase()) {
        console.log(`⚠️ Admin email (${adminEmail}) is same as user email. Skipping admin notification to avoid duplicate.`);
        // Still send admin notification but with a note
        try {
          adminMailOptions.subject = 'New Demo Request - Coditium (You submitted this request)';
          await transporter.sendMail(adminMailOptions);
          console.log(`✅ Admin notification sent (same email as user): ${adminEmail}`);
        } catch (adminEmailError) {
          console.error('❌ Admin notification email failed:', adminEmailError.message);
        }
      } else {
        console.log('⚠️ No admin email configured (ADMIN_EMAIL / EMAIL_USER). Skipping admin notification.');
      }
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError.message);
      console.error('Full error:', emailError);
      // Continue even if email fails
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error submitting demo request:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Admin login
app.post('/api/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const bcrypt = require('bcrypt');

    const result = await pool.query('SELECT * FROM admin_users WHERE username = $1', [username]);
    
    if (result.rows.length === 0) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const user = result.rows[0];
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    res.json({ 
      success: true, 
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all demo requests (protected)
app.get('/api/admin/demo-requests', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM demo_requests ORDER BY created_at DESC');
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching demo requests:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update demo request status
app.put('/api/admin/demo-requests/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const result = await pool.query(
      'UPDATE demo_requests SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    );
    
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error updating demo request status:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete demo request
app.delete('/api/admin/demo-requests/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM demo_requests WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting demo request:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all admin users (protected)
app.get('/api/admin/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, username, email, created_at FROM admin_users ORDER BY created_at DESC');
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create new admin user
app.post('/api/admin/users', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const bcrypt = require('bcrypt');
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO admin_users (username, password, email) VALUES ($1, $2, $3) RETURNING id, username, email, created_at',
      [username, hashedPassword, email]
    );

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update admin user password
app.put('/api/admin/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const bcrypt = require('bcrypt');
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'UPDATE admin_users SET password = $1 WHERE id = $2 RETURNING id, username, email',
      [hashedPassword, id]
    );

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete admin user
app.delete('/api/admin/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM admin_users WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Test endpoint to check email configuration
app.get('/api/test-email-config', (req, res) => {
  const config = {
    EMAIL_USER: process.env.EMAIL_USER || 'NOT SET',
    ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'NOT SET',
    EMAIL_PASS: process.env.EMAIL_PASS ? '***SET***' : 'NOT SET',
    selectedAdminEmail: process.env.ADMIN_EMAIL || process.env.EMAIL_USER || 'NOT SET'
  };
  res.json({ success: true, config });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`📧 Email Config Test: http://localhost:${PORT}/api/test-email-config`);
});

