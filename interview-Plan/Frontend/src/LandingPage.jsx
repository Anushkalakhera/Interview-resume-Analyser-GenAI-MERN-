import React from "react";
import { useNavigate } from "react-router";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">

      {/* NAVBAR */}
      <nav className="landing__nav">
        <h2 className="logo">Interview<span>AI</span></h2>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how">How it Works</a>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>
          Crack Your Dream Job with <span>AI-Powered</span> Strategy
        </h1>

        <p>
          Analyze job descriptions, match your resume, and get a personalized interview roadmap instantly.
        </p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/register")} className="primary">
            Get Started
          </button>
          <button className="secondary">
            Learn More
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <h2>Why Choose Us?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>Smart Resume Analysis</h3>
            <p>AI analyzes your resume and finds gaps instantly.</p>
          </div>

          <div className="feature-card">
            <h3>Job Matching</h3>
            <p>Compare your profile with job descriptions.</p>
          </div>

          <div className="feature-card">
            <h3>Interview Strategy</h3>
            <p>Get a step-by-step plan to crack interviews.</p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <h2>How It Works</h2>

        <div className="steps">
          <div className="step">1. Paste Job Description</div>
          <div className="step">2. Upload Resume</div>
          <div className="step">3. Get AI Plan</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Preparing Smarter Today</h2>
        <button onClick={() => navigate("/register")}>
          Get Started Free
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 InterviewAI. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Landing;