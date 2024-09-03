 import React from 'react';
import healthImage from '../assets/asset k.jpeg';

const MainContent = () => {
  return (
    <main>
      <section id="home">
        <h2>Welcome to Health & Wellness</h2>
        <p>Your health is our priority. Discover tips and services to keep you healthy and happy.</p>
        <img src={healthImage}alt="health" />
      </section>
      <section id="about">
        <h2>About Us</h2>
        <p>We are dedicated to providing the best health and wellness services to our community.</p>
      </section>
      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Nutrition Counseling</li>
          <li>Fitness Programs</li>
          <li>Mental Health Support</li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: info@healthwellness.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </main>
  );
};

export default MainContent;