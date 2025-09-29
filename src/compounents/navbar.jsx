import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css";
import "../pages/about";

const App = () => {
  return (
    <div className="back">
    
      <header>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow-sm">
          <div className="container">
            <a className="navbar-brand "href="#home" id="protfo">
              Portfo<span className="text-danger">lio.</span>
            </a>

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
                  <a className="nav-link text-white" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#education">Education</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#team">Team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section
    
        className="hero-section text-center d-flex align-items-center justify-content-center text-white"
      >
        <div className="text">
          <h5>Hello, I'm</h5>
          <h1 className="fw-bold">GAYATHRI V</h1>
          <h3>
            I'm a <span className="text-danger">Web Developer</span>
          </h3>
          <br />
          <a href="#contact" className="btn btn-danger px-4 py-2">Hire Me</a>
        </div>
      </section>

  {/* About */}
      
    <section id="about" className="section about-section text-center py-5"> 
      <div className="container my-5">
                      <h2 className="text-center fw-bold mb-2">About me</h2> 
                      <p className="text-center text-danger fw-semibold mb-5">who i am</p> 
          <div className="row align-items-center"> 
             <div className="col-md-5 text-center mb-4 mb-md-0">
                      <img src="\src\assets\gayathri pic copy.jpg" alt="Profile" className="img-fluid rounded shadow " id="about-img"/>
              </div>
                 <div className="col-md-7 text-start">
                      <h4 className="fw-bold"> I’m Gayathri and I’m a{" "} <span className="text-danger">Problem Solver</span> </h4> 
                      <p className="mt-3 text-muted"> Enthusiastic and detail-oriented Full Stack Developer with a Bachelor’s degree in History and professional training in web development. 
                       Proficient in front-end and back-end technologies including HTML, CSS, JavaScript, React, SQL, MongoDB, Java, Spring Boot, and Bootstrap. 
                      Strong foundation in problem-solving, critical thinking, and teamwork, with proven ability to adapt quickly to new technologies.
                      Passionate about building responsive, scalable, and user-friendly applications, and eager to apply skills in real-world projects.
                      Demonstrates excellent communication, research, and presentation abilities, with a commitment to continuous learning and professional growth. 
                      </p> <button className="btn btn-danger mt-3 px-4 py-2 fw-semibold"> Resume </button>
                  </div>
            </div> 
        </div> 
  </section>


      <section id="projects" className="section projects-section text-center">
        <h2>Projects</h2>
        <p>This is the Projects section.</p>
      </section>

      <section id="skills" className="section skills-section text-center">
        <h2>Skills</h2>
        <p>This is the Skills section.</p>
      </section>

           <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-2">Contact me</h2>
        <p className="text-center text-danger mb-5">— get in touch —</p>

        <div className="row">
          {/* Left Column */}
          <div className="col-md-6 mb-4">
            <h4 className="fw-bold">Get in Touch</h4>
            <p>
              Serving our clients, solving problems and enhancing human experiences motivate
              everything we do. If you're as passionate about the possibilities as we are,
              discover the best digital opportunities for your Solution.
            </p>
            <p><i className="bi bi-person-fill text-danger"></i> <strong>Name:</strong> Gayathri V</p>
            <p><i className="bi bi-geo-alt-fill text-danger"></i> <strong>Address:</strong> Chennai, India</p>
            <p><i className="bi bi-envelope-fill text-danger"></i> <strong>Email:</strong> sathishkumarsaivaraj@gmail.com</p>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <form>
              <div className="row mb-3">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Name" required />
                </div>
                <div className="col">
                  <input type="email" className="form-control" placeholder="Email" required />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="Message.." required></textarea>
              </div>
              <button type="submit" className="btn btn-danger">Send message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-dark text-white text-center py-3 mt-5">
        Created By <strong>Gayathri</strong> | © 2025 All rights reserved.
      </div>
    </section>
    </div>
  );
};

export default App;
