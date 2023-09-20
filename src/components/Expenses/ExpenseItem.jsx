import ExpenseDetail from "./ExpenseDetail";

const ExpenseItem = ({filteredExpenses}) => {
  return (
    <>
      {filteredExpenses.length === 0 && (
        <p className="text-center mt-2 mb-2 text-slate-400">No Data</p>
      )}
      {filteredExpenses.map((expense) => (
        <ExpenseDetail key={expense.id} expenseDetail={expense} />
      ))}
    </>
  );
};

export default ExpenseItem;
