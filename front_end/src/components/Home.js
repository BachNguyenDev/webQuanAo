import React, { Component } from 'react';
import Ao from './Ao';
import Quan from './Quan';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <header>
          <h1>Welcome to Torano</h1>
        </header>
        <main>
          <section id="products">
            <h2>Our Products</h2>
            <Ao/>
            <Quan/>
          </section>
          <section id="about">
            <h2>About Us</h2>
            <p>Torano is your ultimate destination for high-quality clothing. We offer a wide range of stylish and comfortable apparel for men, women, and kids.</p>
          </section>
          <section id="contact">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to contact us:</p>
            <ul>
              <li>Email: info@torano.com</li>
              <li>Phone: 123-456-7890</li>
            </ul>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 Torano. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default Home;
