import React from 'react';
//import multiple from '../assets/images/multiple.svg';
import work1 from '../assets/images/work1.png';
import work2 from '../assets/images/work2.png';



const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="skills__container bd-grid">          
        <div>
          <h2 className="skills__subtitle">Simple money tracker</h2>
          <p className="skills__text">
            Our app provides a simple money tracker, allowing you to record daily transactions in seconds. Easily categorize your expenses and income into clear categories like Expense: Food, Shopping or Income: Salary, Gift. This helps you keep track of where your money is going effortlessly. Stay organized and maintain control over your finances with minimal effort.
          </p>
          <div><img src={work1} alt="Simple money tracker" className="skills__img" /></div>
        </div>
        <br />
      <div className="skills__container bd-grid">          
        <div>
          <h2 className="skills__subtitle">The whole picture in one place</h2>
          <p className="skills__text">
            Our app offers one comprehensive report to give you a clear view of your spending patterns. Understand where your money comes and goes with easy-to-read graphs and visualizations. This helps you make informed financial decisions and plan for the future. Get the whole picture of your financial health in one convenient place.
          </p>
          <div><img src={work2} alt="The whole picture in one place" className="skills__img" /></div>
        </div>
      </div>

      <div className="skills__container bd-grid">          
        <div>
          <h2 className="skills__subtitle">Painless budgeting</h2>
          <p className="skills__text">
            Our app offers one comprehensive report to give you a clear view of your spending patterns. Understand where your money comes and goes with easy-to-read graphs and visualizations. This helps you make informed financial decisions and plan for the future. Get the whole picture of your financial health in one convenient place.
          </p>
          <div><img src={work2} alt="The whole picture in one place" className="skills__img" /></div>
        </div>
      </div>
        
      </div>
    </section>
  );
};

export default Services;
