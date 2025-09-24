import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';

const App = () => {
  return (
    <div id="Home" className="row">
     <div className="col-sm-6 text-align-centre">
      <header>
        <nav className="navbar navbar-expand-lg" id="navbar-body">
          <div className="container">
            <a className="navbar-brand" href="#">
              Portfo<span>lio.</span>
            </a>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li>
                  <a className="nav-link" href="/Home.html">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/HTML/about us.html">
                    About
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#education">
                    Education
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#team">
                    Team
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </header>

      {/* Hero Section */}
      <section className="hero-section text-center py-5">
        <div>
          <h5>Hello, I'm</h5>
          <h1>GAYATHRI V</h1>
          <h3>
            I'm a <span className="highlight">Web Developer</span>
          </h3>
          <br />
          <a href="#contact" className="btn btn-custom">
            Hire Me
          </a>
        </div>
      </section>
    </div>
    </div>
  );
};

export default App;
