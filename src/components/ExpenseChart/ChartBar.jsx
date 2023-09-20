const ChartBar = ({ maxValue, value, label }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="h-ful flex flex-col items-center">
      <div className="h-full w-[1.5rem] flex flex-col justify-end bg-[#F39F5A]">
        <div
          className="bg-[#451952] w-full ease-in transition-all "
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="font-semibold text-sm text-center">{label}</div>
    </div>
  );
};

export default ChartBar;
