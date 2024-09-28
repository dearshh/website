 import React from 'react';
import healthImage from '../assets/asset k.jpeg';

const MainContent = () => {
  return (
    <main>
      <section id="home">
        <h2>Welcome to Technology Assistant Website !</h2>
        <p>Your problem is our priority. Lets solve your problem in here to get the answer.</p>
        <img src={healthImage}alt="health" />
      </section>
      <section id="about">
        <h2>About Us</h2>
        <p>We are dedicated to providing the best assistant technology website for helping our community.</p>
      </section>
      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Help solve your digital problem</li>
          <li>Learn with the assistant</li>
          <li>Your suggestion / question about the Assistant Technology Website.</li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: assistanttechonology23@gmail.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </main>
  );
};

export default MainContent;