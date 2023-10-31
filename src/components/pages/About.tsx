import React from "react";
import "./About.css"; // You can create a separate CSS file for styling if needed.
import Header from "../../common/Header";

function About() {
  return (
    <>
      <Header />
      <div className="about-page">
        <h2>About Us</h2>
        <p>
          Welcome to Fantastic Tours Vlog! We are passionate about helping you
          explore the world through our carefully curated tours and adventures.
          Whether you're seeking thrilling adventures in the wild or immersing
          yourself in diverse cultures, we have the perfect experience waiting
          for you.
        </p>

        <section className="about-section">
          {/* <img src={teamImage} alt="Our Team" className="section-image" /> */}
          <h3>Our Team</h3>
          <p>
            Meet our dedicated team of travel experts and guides. We're here to
            make your journey memorable and hassle-free. With our local
            knowledge and love for travel, you're in good hands.
          </p>
        </section>

        <section className="about-section">
          {/* <img src={missionImage} alt="Our Mission" className="section-image" /> */}
          <h3>Our Mission</h3>
          <p>
            Our mission is to inspire and enable travelers to explore the beauty
            of the world. We believe that travel has the power to transform
            lives, foster connections, and create lifelong memories. We are
            committed to providing exceptional experiences that exceed your
            expectations.
          </p>
        </section>

        <section className="about-section">
          <h3>Our Story</h3>
          <p>
            Fantastic Tours Vlog was founded in 2010 by a group of travel
            enthusiasts who wanted to share their passion for exploration with
            the world. Over the years, we've grown into a leading travel company,
            offering a wide range of unforgettable experiences.
          </p>
        </section>

        <section className="about-section">
          <h3>Our Values</h3>
          <p>
            At Fantastic Tours Vlog, our values drive everything we do. We are
            committed to sustainability, responsible travel, and giving back to
            the communities we visit. We prioritize your safety, comfort, and
            enjoyment in every trip we plan.
          </p>
        </section>

        <p>
          Thank you for choosing Fantastic Tours Vlog for your next adventure.
          We can't wait to help you discover your next great escape!
        </p>
        
      </div>
    </>
  );
}

export default About;
