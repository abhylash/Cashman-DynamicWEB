import React, { useState } from 'react';
import '../styles/FinanceTools.css';

const SavingsCalculator = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');

  const calculateSavings = () => {
    return (parseFloat(income) - parseFloat(expenses)).toFixed(2);
  };

  return (
    <section className="savings-calculator bd-grid" id="savings-calculator">
      <div className="savings-calculator__data">
        <h1 className="savings-calculator__title">Savings Calculator</h1>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Total Income"
          className="savings-calculator__input"
        />
        <input
          type="number"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
          placeholder="Total Expenses"
          className="savings-calculator__input"
        />
        <h2 className="savings-calculator__subtitle">Total Savings: ${income && expenses ? calculateSavings() : 0}</h2>
      </div>
    </section>
  );
};

export default SavingsCalculator;
