import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2027, 7, 14),
  },
  {
    id: "e2",
    title: "New Phone",
    amount: 799.49,
    date: new Date(2027, 2, 12),
  },
  {
    id: "e3",
    title: "Feeding",
    amount: 294.67,
    date: new Date(2025, 1, 23),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 454.0,
    date: new Date(2024, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
