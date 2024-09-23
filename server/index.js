// index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Employee = require('./models/employee'); // Import the Employee model
const Contact = require('./models/contact'); // Import the Contact model

// Create an Express application
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Use express.json() to parse JSON bodies

// MongoDB connection
const MONGO_URI = 'mongodb://127.0.0.1:27017/employee'; // Replace with your actual database name
mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Employee.findOne({ email: email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Check if the password matches
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Login successful
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// Signup route
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await Employee.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new employee
    const newEmployee = new Employee({ username, email, password });
    await newEmployee.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Contact form route
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new Contact document
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Respond with a success message
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
const PORT = 3001; // You can change this if needed
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
