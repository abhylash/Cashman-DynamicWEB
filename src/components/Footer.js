import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Resources</h4>
          <ul className="links">
            <li><a href="#">Budgeting Tips</a></li>
            <li><a href="#">Investment Guides</a></li>
            <li><a href="#">Saving Strategies</a></li>
            <li><a href="#">Debt Management</a></li>
            <li><a href="#">Retirement Planning</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Tools</h4>
          <ul className="links">
          <li><Link to="/expense-tracker">Expense Tracker</Link></li>
            <li><Link to="/income-calculator">Income Calculator</Link></li>
            <li><Link to="/savings-calculator">Savings Calculator</Link></li>
            <li><Link to="/investment-calculator">Investment Calculator</Link></li>
            <li><Link to="/financial-goals-planner">Financial Goals Planner</Link></li>
         
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
          <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/cookie-policy">Cookie Policy</Link></li>
            <li><Link to="/security">Security</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>
       


<div className="footer-col">
<h4>Newsletter</h4>
<p>
  Subscribe to our newsletter for a weekly dose
  of news, updates, helpful tips, and
  exclusive offers.
</p>
<form action="#">
  <input type="text" placeholder="Your email" required />
  <button type="submit">SUBSCRIBE</button>
</form>
<div className="icons">
  <i className="fab fa-facebook-f"></i>
  <i className="fab fa-twitter"></i>
  <i className="fab fa-linkedin"></i>
  <i className="fab fa-github"></i>
</div>
</div>
</div>
</section>
);
};

export default Footer;

