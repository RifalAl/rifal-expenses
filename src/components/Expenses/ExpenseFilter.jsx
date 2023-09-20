const ExpenseFilter = ({onFilter}) => {

  const filterChangeHandler = (e) => {
    onFilter(e.target.value)
  }

  return (
    <div className="flex justify-between mb-4 items-center">
      <p className="font-semibold text-lg">Filter by Year</p>
      <select
        id="countries"
        onChange={filterChangeHandler}
        defaultValue={"all"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-3"
      >
        <option value={"all"}>
          All years
        </option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
