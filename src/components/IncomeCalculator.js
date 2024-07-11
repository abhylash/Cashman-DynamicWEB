import React, { useState } from 'react';
import '../styles/FinanceTools.css';

const IncomeCalculator = () => {
  const [incomes, setIncomes] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const addIncome = () => {
    if (description && amount) {
      setIncomes([...incomes, { description, amount: parseFloat(amount) }]);
      setAmount('');
      setDescription('');
    }
  };

  const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);

  return (
    <section className="income-calculator bd-grid" id="income-calculator">
      <div className="income-calculator__data">
        <h1 className="income-calculator__title">Income Calculator</h1>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Income Source"
          className="income-calculator__input"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="income-calculator__input"
        />
        <button onClick={addIncome} className="income-calculator__button">Add Income</button>
        <h2 className="income-calculator__subtitle">Total Income: ${totalIncome}</h2>
        <ul className="income-calculator__list">
          {incomes.map((income, index) => (
            <li key={index} className="income-calculator__list-item">{income.description}: ${income.amount}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default IncomeCalculator;
