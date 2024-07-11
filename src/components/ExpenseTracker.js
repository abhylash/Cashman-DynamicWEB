import React, { useState } from 'react';
import '../styles/FinanceTools.css';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const addExpense = () => {
    if (description && amount) {
      setExpenses([...expenses, { description, amount: parseFloat(amount) }]);
      setAmount('');
      setDescription('');
    }
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <section className="expense-tracker bd-grid" id="expense-tracker">
      <div className="expense-tracker__data">
        <h1 className="expense-tracker__title">Expense Tracker</h1>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Expense Description"
          className="expense-tracker__input"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="expense-tracker__input"
        />
        <button onClick={addExpense} className="expense-tracker__button">Add Expense</button>
        <h2 className="expense-tracker__subtitle">Total Expenses: ${totalExpenses}</h2>
        <ul className="expense-tracker__list">
          {expenses.map((expense, index) => (
            <li key={index} className="expense-tracker__list-item">{expense.description}: ${expense.amount}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExpenseTracker;
