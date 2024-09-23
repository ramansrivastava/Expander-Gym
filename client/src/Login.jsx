import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return; // Exit early if there are validation errors
    }

    try {
      const response = await axios.post('http://localhost:3001/login', formData);

      // Check for successful response
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        setFormData({ email: '', password: '' });
        setErrors({});
        navigate('/'); // Redirect to home page
      } else {
        setErrors({ submit: 'Invalid email or password. Please try again.' });
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setErrors({ submit: 'Invalid email or password. Please try again.' });
        } else {
          setErrors({ submit: 'An error occurred. Please try again later.' });
        }
      } else {
        setErrors({ submit: 'An error occurred. Please check your network.' });
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
