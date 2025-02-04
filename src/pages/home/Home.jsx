import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <main className="main-body-container">
      <section className="main-container">
        <article className="main-hero-content">
          <div className="hero-text">
            <h2>Welcome to</h2>
            <h1>UI Komponents</h1>
            <h3>Awesome UI styles for you.</h3>
          </div>
          <div className="hero-img">
            <img src="/assets/images/heroprev.png" alt="" />
          </div>
        </article>
        <article className="main-section-content">
          <div className="content-text">
            <h2>Shadows</h2>
            <p>Enhance depth and aesthetics with subtle or strong shadows.</p>
            <Link to="/shadows" className="example-btn">
              Show more
            </Link>
          </div>
          <div className="content-image">
            <img src="assets/images/home-shadows.png" alt="shadows" />
          </div>
        </article>
        <article className="main-section-content">
          <div className="content-text">
            <h2>Buttons</h2>
            <p>Interactive elements with various styles for a modern UI.</p>
            <Link to="/buttons" className="example-btn">
              Show more
            </Link>
          </div>
          <div className="content-image">
            <img src="assets/images/home-buttons.png" alt="buttons" />
          </div>     
        </article>
        <article className="main-section-content">
          <div className="content-text">
            <h2>Cards</h2>
            <p>Organize content visually with stylish, customizable cards.</p>
            <Link to="/cards" className="example-btn">
              Show more
            </Link>
          </div>
          <div className="content-image">
            <img src="assets/images/home-cards.png" alt="cards" />
          </div>
        </article>
      </section>
    </main>
  );
}

export default Home;
