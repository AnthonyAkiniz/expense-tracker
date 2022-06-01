import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Cheeseburgers',
    amount: 394.12,
    date: new Date(2022, 0, 1),
  },
  {
    id: 'e2',
    title: 'Krispy Kreme Donuts',
    amount: 199.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Tacos',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Ice Cream',
    amount: 350,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
