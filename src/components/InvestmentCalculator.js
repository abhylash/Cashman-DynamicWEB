import React, { useState } from 'react';
import '../styles/FinanceTools.css';

const InvestmentCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');

  const calculateInvestment = () => {
    return (principal * Math.pow((1 + rate / 100), time)).toFixed(2);
  };

  return (
    <section className="investment-calculator bd-grid" id="investment-calculator">
      <div className="investment-calculator__data">
        <h1 className="investment-calculator__title">Investment Calculator</h1>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="Principal Amount"
          className="investment-calculator__input"
        />
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Annual Interest Rate (%)"
          className="investment-calculator__input"
        />
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Time (Years)"
          className="investment-calculator__input"
        />
        <h2 className="investment-calculator__subtitle">Future Value: ${principal && rate && time ? calculateInvestment() : 0}</h2>
      </div>
    </section>
  );
};

export default InvestmentCalculator;
