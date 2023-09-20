import { useState } from "react";

import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpensesForm from "./components/NewExpenses/NewExpensesForm";

function App() {
  const [data, setData] = useState([
    {
      id: "e1",
      title: "Laptop Macbook",
      amount: 13000000,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "Parfume", amount: 400000, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Motocycle Tax",
      amount: 330000,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "LED Monitor",
      amount: 1500000,
      date: new Date(2021, 5, 12),
    },
  ]);

  const addExpenseHandler = (expenseData) => {
    setData(prevItem => [...prevItem, expenseData]);
  };


  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        <NewExpensesForm onAdd={addExpenseHandler} />
        <ExpenseList listData={data}/>
      </div>
    </div>
  );
}

export default App;
