import React from 'react';
import recurring from '../assets/images/recurring.svg';
import travel from '../assets/images/travel.svg';
import saving from '../assets/images/saving.svg';
import debt from '../assets/images/debt.svg';
import scan from '../assets/images/scan.svg';
import multiple from '../assets/images/multiple.svg';


const Features = () => {
    return (
      <section className="work section" id="features">
        <h2 className="section-title">Features our users love</h2>
  
        <div className="work__container bd-grid">
          <div className="worktext">
            <center>
              <img src={multiple} alt="Multiple devices" />
              <h1>Multiple Devices</h1>
              <p>Safely synchronize across devices with Bank standard security.</p>
            </center>
          </div>
  
          <div className="worktext">
            <center>
              <img src={recurring} alt="Recurring transaction" />
              <h1>Recurring transaction</h1>
              <p>Get notified of recurring bills and transactions before due date.</p>
            </center>
          </div>
  
          <div className="worktext">
            <center>
              <img src={travel} alt="Travel Mode" />
              <h1>Travel Mode</h1>
              <p>All currencies supported with up-to-date exchange rate.</p>
            </center>
          </div>
  
          <div className="worktext">
            <center>
              <img src={saving} alt="Saving Plan" />
              <h1>Saving Plan</h1>
              <p>Keep track on savings process to meet your financial goals.</p>
            </center>
          </div>
  
          <div className="worktext">
            <center>
              <img src={debt} alt="Debt and Loans" />
              <h1>Debt and Loans</h1>
              <p>Manage your debts, loans and payment process in one place.</p>
            </center>
          </div>
  
          <div className="worktext">
            <center>
              <img src={scan} alt="Scan Receipt" />
              <h1>Scan Receipt</h1>
              <p>Take pictures of your receipts to auto-process and organize them.</p>
            </center>
          </div>
        </div>
      </section>
    );
  };
  

export default Features;
