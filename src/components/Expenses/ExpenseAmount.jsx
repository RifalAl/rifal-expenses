import currencyFormat from "../../utils";

const ExpenseAmount = ({expenseAmount}) => {
  
  return (
    <div className="rounded-md bg-[#662549] text-md text-white font-semibold px-4 py-2">
      {currencyFormat(expenseAmount)}
    </div>
  );
};

export default ExpenseAmount;
