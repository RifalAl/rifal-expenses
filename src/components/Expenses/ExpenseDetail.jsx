import ExpenseAmount from "./ExpenseAmount";
import ExpenseDate from "./ExpenseDate";

const ExpenseDetail = ({expenseDetail}) => {
  return (
    <div className="flex justify-between items-center gap-4 rounded-md p-4 bg-[#F39F5A] mb-4 last:mb-0">
      <ExpenseDate expenseDate={expenseDetail.date}/>
      <p className="font-bold text-2xl text-[#202020] w-7/12">
        {expenseDetail.title}
      </p>
      <ExpenseAmount expenseAmount={expenseDetail.amount}/>
    </div>
  );
};

export default ExpenseDetail;
