import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 
import gymImage1 from './images/20220920_190954.jpg'; 
import gymImage2 from './images/20220412_191203.jpg';
import gymImage3 from './images/20220927_212943.jpg';
import gymLogo from './images/326704517_573849660980222_6129729373636463252_n.png'; // Import the gym logo
import './Home.css'; // Import your custom CSS

const Home = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/contact', contactInfo);
      if (response.status === 201) {
        alert('Message sent successfully!');
        setContactInfo({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            {/* Add logo image before the gym name */}
            <img src={gymLogo} alt="Expander Gym Logo" className="me-2" style={{ height: '40px', width: '40px' }} />
            <span className="text-orange">Expander Gym</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-orange" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-orange" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-black text-orange text-center py-5">
        <h1 className="display-4">Welcome to Expander Gym</h1>
        <p className="lead">Your journey to fitness starts here!</p>
      </header>

      {/* Hero Section */}
      <section className="hero bg-orange text-black text-center py-5">
        <div className="container">
          <h2 className="display-5">Join Us Today!</h2>
          <p className="lead">Sign up for a free trial class and discover your potential!</p>
          <Link to="/register" className="btn btn-dark btn-lg">Get Started</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-5 bg-black text-orange">
        <div className="container">
          <h2 className="text-center mb-5">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow h-100 text-center bg-dark text-orange">
                <div className="card-body">
                  <h4 className="card-title">Personal Training</h4>
                  <p className="card-text">Get personalized training plans from our expert trainers.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow h-100 text-center bg-dark text-orange">
                <div className="card-body">
                  <h4 className="card-title">Group Classes</h4>
                  <p className="card-text">Join our energizing group classes for all fitness levels.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow h-100 text-center bg-dark text-orange">
                <div className="card-body">
                  <h4 className="card-title">Nutrition Coaching</h4>
                  <p className="card-text">Receive nutrition guidance tailored to your goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery py-5 bg-black text-orange">
        <div className="container">
          <h2 className="text-center mb-5">Gallery</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm bg-dark">
                <img
                  src={gymImage1}
                  alt="Gym Image 1"
                  className="card-img-top gallery-img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm bg-dark">
                <img
                  src={gymImage2}
                  alt="Gym Image 2"
                  className="card-img-top gallery-img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm bg-dark">
                <img
                  src={gymImage3}
                  alt="Gym Image 3"
                  className="card-img-top gallery-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials bg-orange text-black py-5">
        <div className="container">
          <h2 className="text-center mb-5">What Our Members Say</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow h-100 text-center bg-light">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>"Expander Gym transformed my lifestyle! Highly recommend!"</p>
                    <footer className="blockquote-footer">Sarah J.</footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow h-100 text-center bg-light">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>"The trainers here are fantastic and very supportive."</p>
                    <footer className="blockquote-footer">John D.</footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow h-100 text-center bg-light">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>"I love the group classes! They keep me motivated."</p>
                    <footer className="blockquote-footer">Emily R.</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact py-5 bg-black text-orange">
        <div className="container">
          <h2 className="text-center mb-5">Contact Us</h2>
          <form className="row g-3 justify-content-center" onSubmit={handleSubmit}>
            <div className="col-md-5">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control bg-dark text-orange"
                  id="name"
                  placeholder="Your Name"
                  value={contactInfo.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name" className="text-orange">Your Name</label>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control bg-dark text-orange"
                  id="email"
                  placeholder="Your Email"
                  value={contactInfo.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="text-orange">Your Email</label>
              </div>
            </div>
            <div className="col-md-10">
              <div className="form-floating mb-3">
                <textarea
                  className="form-control bg-dark text-orange"
                  id="message"
                  placeholder="Your Message"
                  value={contactInfo.message}
                  onChange={handleChange}
                  style={{ height: '150px' }}
                  required
                ></textarea>
                <label htmlFor="message" className="text-orange">Your Message</label>
              </div>
            </div>
            <div className="col-md-10 text-center">
              <button type="submit" className="btn btn-orange btn-lg">Send Message</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange text-black text-center py-4">
        <div className="container">
          <p>&copy; 2024 Expander Gym. All rights reserved.</p>
          <p>
            <Link to="/privacy-policy" className="text-black">Privacy Policy</Link> | 
            <Link to="/terms-of-service" className="text-black"> Terms of Service</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

                 
