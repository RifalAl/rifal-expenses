import Card from "../UI/Card";
import ChartBar from "./ChartBar";

const ExpenseChart = ({ expenses }) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <Card className={"mt-5 mb-5 p-5 flex justify-around h-[10rem] bg-[#ffecdb]"}>
      {chartDataPoints.map((item) => (
        <ChartBar
          key={item.label}
          maxValue={totalMaximum}
          value={item.value}
          label={item.label}
        />
      ))}
    </Card>
  );
};

export default ExpenseChart;
