// employee.js

const mongoose = require('mongoose');

// Define the Employee schema
const EmployeeSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
});

// Create the Employee model
const Employee = mongoose.model('Emp', EmployeeSchema);

module.exports = Employee;
