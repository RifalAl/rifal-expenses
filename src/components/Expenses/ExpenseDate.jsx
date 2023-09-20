const ExpenseDate = ({ expenseDate }) => {
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const day = expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const year = expenseDate.getFullYear();

  return (
    <div className="rounded-md bg-[#451952] flex-row text-center w-2/12 p-2">
      <p className="text-2xl font-semibold text-white">{day}</p>
      <p className="text-md font-semibold text-white">{month}</p>
      <p className="font-medium text-white text-sm">{year}</p>
    </div>
  );
};

export default ExpenseDate;
