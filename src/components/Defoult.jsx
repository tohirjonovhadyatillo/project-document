import React from "react";
import ReactApexChart from "react-apexcharts";
import img1 from "../assets/images/1.svg";
import img2 from "../assets/images/2.svg";
import img3 from "../assets/images/3.png";
import smallChart from "../assets/images/small-chart.svg";
import chart4 from "../assets/images/chart5.svg";

const chartData = [
  { value: 33, color: "#EF233C", label: "Конституциявий-ҳуқуқий саводхонлик" },
  { value: 79, color: "#28A264", label: "Ахборот-коммуникация технологиялари" },
  { value: 78, color: "#28A264", label: "Турли сохадаги ислохотлардан хабардорлик" },
  { value: 48, color: "#F8B324", label: "Ўзбек тили ва адабиёти" },
  { value: 100, color: "#0956AF", label: "Ўзбекистон тарихи ва маданияти" },
  { value: 55, color: "#F8B324", label: "Ақлий салоҳият ва мантиқий фикрлаш" },
];

const ApexCharts = () => {
  return (
    <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
      {chartData.map((item, index) => {
        const options = {
          chart: { type: "radialBar", sparkline: { enabled: true } },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: { background: "#e7e7e7", strokeWidth: "97%", margin: 7 },
              dataLabels: {
                value: { fontSize: "24px", color: "#000", fontWeight: "bold" },
              },
            },
          },
          fill: { gradient: { shade: "dark", gradientToColors: [item.color], stops: [0, 100] } },
          colors: [item.color],
        };
        return (
          <div key={index} className="flex flex-col items-center w-40">
            <ReactApexChart options={options} series={[item.value]} type="radialBar" width={180} />
            <p className="mt-2 text-center text-sm font-medium text-gray-700">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
};

const LineChart = () => {
  const options = {
    chart: { type: "line", toolbar: { show: false } },
    stroke: { curve: "smooth", width: 2 },
    markers: { size: 4, colors: ["#007bff"] },
    xaxis: { categories: ["12.06", "18.06", "03.07", "13.07", "14.07", "20.07", "24.07"] },
    yaxis: { min: 0, max: 100 },
    grid: { borderColor: "#e7e7e7" },
  };

  const series = [{ name: "Data", data: [5, 30, 50, 75, 20, 40, 60] }];

  return <ReactApexChart options={options} series={series} type="line" width={360} height={240} />;
};

function Default() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between py-6">
        <img className="w-48 h-36" src={img1} alt="img" />
        <h2 className="text-blue-700 text-2xl font-semibold text-center max-w-xl">Республика Ассессмент маркази онлайн платформаси</h2>
        <img className="w-32 h-20" src={img2} alt="img" />
      </div>
      <div className="flex gap-8 items-center py-6">
        <img className="w-56 h-72 object-cover" src={img3} alt="person" />
        <div>
          <h1 className="text-blue-700 text-4xl font-bold mb-4">Азамат Шарипов <span className="block font-medium">Абдуллажон угли</span></h1>
          <p className="text-lg text-gray-700">Тугилган сана: <span className="text-blue-700">30.09.1997 йил</span></p>
          <p className="text-lg text-gray-700">Тугилган жой: <span className="text-blue-700">Чуст ш., Наманган.</span></p>
          <div className="flex gap-4 mt-4">
            <p className="text-lg">Буйи: <span className="font-medium">175см</span></p>
            <p className="text-lg">Вазни: <span className="font-medium">70кг</span></p>
            <p className="text-lg">Индекс: <span className="font-medium">22,9</span></p>
            <img className="w-12 h-12" src={smallChart} alt="chart" />
          </div>
        </div>
      </div>
      <div className="py-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-4 h-10 bg-blue-700"></div>
            <h2 className="text-2xl font-semibold">Билим тести</h2>
            <div className="flex-1 h-1 bg-gray-300"></div>
          </div>
          <div className="flex gap-12 mt-6">
            <ApexCharts />
            <div className="flex flex-col gap-6">
              <LineChart />
              <div className="pl-6">
                <h2 className="text-blue-700 text-4xl font-medium">78%</h2>
                <div className="w-80 bg-gray-300 rounded-xl mt-2">
                  <div className="w-64 bg-green-600 text-white py-2 px-4 rounded-xl">Умумий натижа</div>
                </div>
              </div>
            </div>
            <img className="w-72 h-auto" src={chart4} alt="chart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Default;
