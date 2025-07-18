import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="App">
      
      {/* Hero Section */}
      <header
        className="hero text-center text-white py-5"
        style={{ background: "#1e293b" }}
        data-aos="zoom-in"
      >
        <h1 className="fw-bold">Ramadhan Salim</h1>
        <p className="lead">Full Stack Developer | React | Python | MySQL</p>
        <a
href="https://wa.me/254719622849?text=Hello%20Salim,%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you."
  className="btn btn-success mt-2 fw-bold"
  target="_blank"
  rel="noreferrer"
>
  <i className="bi bi-whatsapp"></i> Text Me on WhatsApp
</a>

      </header>

      {/* About Section */}
      <section className="container py-5" id="about" data-aos="fade-up">
        <h2 className="text-center mb-4">About Me</h2>
        <p className="text-center fs-5">
          Hi, I’m <strong>Ramadhan Salim</strong>, a certified Full-Stack Software Developer trained at <strong>Modcom Institute</strong>. I specialize in building fast, scalable, and user-focused web applications using modern technologies.
        </p>
        <p className="text-center fs-5">
          I have a strong passion for <strong>clean code</strong>, performance optimization, and intuitive user experiences. Beyond formal training, I’ve undertaken multiple <strong>self-initiated projects</strong> that demonstrate my ability to solve real-world problems through code.
        </p>
        <p className="text-center fs-5">
          I thrive in collaborative environments, embrace continuous learning, and am committed to delivering quality software solutions that make a meaningful impact.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-light py-5" id="skills" data-aos="fade-right">
        <div className="container">
          <h2 className="text-center mb-4">My Skills</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">

            {[
              { name: "React", value: 90, color: "info" },
              { name: "Node.js", value: 75, color: "success" },
              { name: "MongoDB", value: 70, color: "dark" },
              { name: "HTML/CSS", value: 95, color: "warning" },
              { name: "Python", value: 90, color: "primary" },
              { name: "MySQL", value: 80, color: "secondary" },
              { name: "Kotlin", value: 90, color: "danger" },
            ].map((skill, index) => (
              <div className="col" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card p-3 shadow-sm">
                  <h5>{skill.name}</h5>
                  <div className="progress">
                    <div
                      className={`progress-bar bg-${skill.color}`}
                      role="progressbar"
                      style={{ width: `${skill.value}%` }}
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {skill.value}%
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container py-5" id="projects" data-aos="fade-up">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row g-4">
          <div className="col-md-6" data-aos="zoom-in">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Tour Booking Website</h5>
                <p className="card-text">A full-stack application for booking local tour guides across Kenya.</p>
                <a       href="https://github.com/Salimhac" className="btn btn-primary" target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Transcription Practice App</h5>
                <p className="card-text">An app for Swahili/English transcription training, built with React.</p>
                <a       href="https://github.com/Salimhac" className="btn btn-primary" target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-5 text-center text-white" style={{ background: "#0f172a" }} data-aos="fade-up">
  <div className="container">
    <h2 className="mb-4">Let's Collaborate</h2>
    <p className="fs-5">
      I'm open to working with other developers on exciting projects, open-source contributions, or startup ideas.
      Let's build something impactful together!
    </p>

    {/* WhatsApp Button */}
    <a
      href="https://wa.me/254719622849?text=Hey%20Salim%2C%20I'm%20interested%20in%20collaborating%20with%20you%20on%20a%20project."
      className="btn btn-success fw-bold m-2"
      target="_blank"
      rel="noreferrer"
    >
      <i className="bi bi-whatsapp"></i> Message Me on WhatsApp
    </a>

    {/* GitHub Button */}
    <a
      href="https://github.com/Salimhac"
      className="btn btn-dark fw-bold m-2"
      target="_blank"
      rel="noreferrer"
    >
      <i className="bi bi-github"></i> Visit My GitHub
    </a>
  </div>
</section>

      {/* Footer */}
      <footer className="text-white text-center py-3" style={{ background: "#1e293b" }}>
        <p className="mb-0">&copy; {new Date().getFullYear()} Ramadhan Salim. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
