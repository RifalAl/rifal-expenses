import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ listData }) => {
  const [filteredYear, setFilteredYear] = useState("all");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses =
    filteredYear === "all"
      ? listData
      : listData.filter((expense) => {
          return expense.date.getFullYear().toString() === filteredYear;
        });

  return (
    <Card className={"mt-5 p-3"}>
      <ExpenseFilter onFilter={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseItem filteredExpenses={filteredExpenses}/>
    </Card>
  );
};

export default ExpenseList;
