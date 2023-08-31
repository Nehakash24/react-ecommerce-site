import React from 'react';

import './Footer.css'; // Import your custom CSS for footer styles

const Footer = () => {
  return (
    <footer className="bg-dark text-light footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>At Trendyshop, our mission is to enrich your life by offering a diverse range of products that cater to your unique needs and preferences. Whether you're seeking fashion-forward apparel, cutting-edge electronics, or exquisite jewelry, we've curated a collection that's sure to delight.</p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: Trendyshop@gmail.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: Connaught Place, 123 Street, Delhi, India</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/" className="social-icon"><i className="fa fa-facebook"></i></a>
              <a href="https://twitter.com/" className="social-icon"><i className="fa fa-twitter"></i></a>
              <a href="https://www.instagram.com/" className="social-icon"><i className="fa fa-instagram"></i></a>
              <a href="https://www.linkedin.com/" className="social-icon"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">© 2023 Your E-Commerce Store. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
