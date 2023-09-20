import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CurrencyInput from "react-currency-input-field";

import Card from "../UI/Card";
import ErrorBlock from "../UI/ErrorBlock";

const NewExpensesForm = ({ onAdd }) => {
  const [activeForm, setActiveForm] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [isProblem, setIsProblem] = useState(false)

  const toogleActiveForm = () => {
    setIsProblem(false)
    setActiveForm((prevItem) => !prevItem);
  };

  const changeTitleHandler = (e) => {
    setInputTitle(e.target.value);
  };
  const changeDateHandler = (e) => {
    setInputDate(e.target.value);
  };

  const submitExpenseHandler = (event) => {
    event.preventDefault();

    if (
      inputTitle.trim().length === 0 ||
      !inputAmount ||
      !inputDate
    ) {
      setIsProblem(true)
      return;
    }

    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
      id: Math.random().toString(),
    };
    onAdd(expenseData);

    setInputTitle("");
    setInputAmount("");
    setInputDate("");
    setActiveForm((prevItem) => !prevItem);
  };

  const closeErrorHandler = () => {
    setIsProblem(false)
    
  }

  return (
    <>
      {isProblem && <ErrorBlock onClose={closeErrorHandler} message={"Please fill all the input before submit"}/>}
      {activeForm ? (
        <Card className={"mt-5 p-5"}>
          <form onSubmit={submitExpenseHandler}>
            <div className="flex justify-between gap-4">
              <div className="mb-3 w-6/12">
                <label
                  htmlFor="inputTitle"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Title
                </label>
                <input
                  type="text"
                  id="inputTitle"
                  value={inputTitle}
                  onChange={changeTitleHandler}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="input title..."
                  // required
                />
              </div>
              <div className="mb-3 w-6/12">
                <label
                  htmlFor="inputAmount"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Amount
                </label>
                <CurrencyInput
                  id="inputAmount"
                  name="inputAmount"
                  placeholder="input amount..."
                  defaultValue={inputAmount}
                  decimalsLimit={0}
                  decimalSeparator="," 
                  groupSeparator="."
                  onValueChange={(value) => setInputAmount(+value)}
                  prefix="Rp"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="inputDate"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Date
              </label>
              <input
                type="date"
                id="inputDate"
                value={inputDate}
                onChange={changeDateHandler}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="select date..."
                // required
              />
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={toogleActiveForm}
                className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white bg-[#AE445A] hover:bg-[#8E3C50] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
              >
                <FontAwesomeIcon icon={faPlus} /> Add Expenses
              </button>
            </div>
          </form>
        </Card>
      ) : (
        <Card className={"mt-5 p-5 flex justify-center"}>
          <button
            onClick={toogleActiveForm}
            className="text-white bg-[#AE445A] hover:bg-[#8E3C50] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
          >
            <FontAwesomeIcon icon={faPlus} /> Add Expenses
          </button>
        </Card>
      )}
    </>
  );
};

export default NewExpensesForm;
