
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
function Home() {
  return (
    <div className="text-center mt-5">
      <h1 className="display-4 fw-bold text-primary">Welcome to Home</h1>
      <p className="lead text-muted">This is the modern styled Home page.</p>
    </div>
  );
}

function About() {
  return (
    <div className="text-center mt-5">
      <h1 className="display-4 fw-bold text-success">About Us</h1>
      <p className="lead text-muted">Learn more about our journey and values.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="text-center mt-5">
      <h1 className="display-4 fw-bold text-danger">Contact Us</h1>
      <p className="lead text-muted">We would love to hear from you!</p>
    </div>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            MyPortfolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/about" element={<about />} />
        <Route path="/contact" element={<contact />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; 2025 MyPortfolio. All rights reserved.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;

