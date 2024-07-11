import React from 'react';
import { Link } from 'react-router-dom';
import perfil from '../assets/images/perfil.png';

const Home = () => {
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">Welcome to Your Finance Tracker!<br />A platform where you can <span className="home__title-color">Master</span><br />your Financial Planning</h1>
        <p className="home__description">Take control of your financial future with our comprehensive tracking and planning tools. Start budgeting, saving, and investing wisely today.</p>
        <a href="#features" className="button">Explore Features</a>
      </div>
      <div className="home__image">
        <img src={perfil} alt="Personal Finance Tracker" />
      </div>
      <div className="home__content">
        <h2 className="home__subtitle">Why Choose Our Finance Tracker?</h2>
        <p className="home__text">
          Our platform is designed to help you achieve your financial goals through easy-to-use tools and insightful data. Whether you're looking to create a budget, track your expenses, or plan for the future, we provide everything you need to stay on top of your finances. Here are some of the key features:
        </p>
        <ul className="home__list">
          <li><strong>Budgeting:</strong> Create and manage your budget with customizable categories and real-time tracking.</li>
          <li><strong>Expense Tracking:</strong> Keep an eye on your spending habits and identify areas for improvement.</li>
          <li><strong>Investment Planning:</strong> Plan your investments wisely with our detailed analysis tools.</li>
          <li><strong>Goal Setting:</strong> Set and achieve your financial goals with personalized plans and reminders.</li>
          <li><strong>Reports and Insights:</strong> Gain valuable insights with detailed reports on your financial activity.</li>
        </ul>
        <p className="home__text">
          Join our community of savvy financial planners and start your journey towards financial freedom today. Our tools are designed to be intuitive and effective, making financial management accessible for everyone.
        </p>
        <h2 className="home__subtitle">User Testimonials</h2>
        <p className="home__text">
          "This finance tracker has transformed the way I manage my money. The budgeting tool is incredibly easy to use and has helped me save more each month." - <strong>Jane D.</strong>
        </p>
        <p className="home__text">
          "I love the investment planning feature. It's given me the confidence to make informed decisions about my portfolio." - <strong>John S.</strong>
        </p>
        
        <h2 className="home__subtitle">Get Started Today</h2>
        <p className="home__text">
          It's never too late to take control of your finances. Sign up today and discover how our personal finance tracker can help you achieve financial success. With our user-friendly interface and powerful tools, you'll be on your way to mastering your financial planning in no time.
        </p>
        

        <Link to="/SignUp" className="button">
                Sign Up Now
              </Link>



      </div>
    </section>
  );
};

export default Home;
