import React, { useState } from 'react';
import '../styles/FinanceTools.css';

const FinancialGoalsPlanner = () => {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState('');
  const [amount, setAmount] = useState('');

  const addGoal = () => {
    if (goal && amount) {
      setGoals([...goals, { goal, amount: parseFloat(amount) }]);
      setGoal('');
      setAmount('');
    }
  };

  return (
    <section className="financial-goals-planner bd-grid" id="financial-goals-planner">
      <div className="financial-goals-planner__data">
        <h1 className="financial-goals-planner__title">Financial Goals Planner</h1>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Financial Goal"
          className="financial-goals-planner__input"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount Needed"
          className="financial-goals-planner__input"
        />
        <button onClick={addGoal} className="financial-goals-planner__button">Add Goal</button>
        <ul className="financial-goals-planner__list">
          {goals.map((goal, index) => (
            <li key={index} className="financial-goals-planner__list-item">{goal.goal}: ${goal.amount}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FinancialGoalsPlanner;
