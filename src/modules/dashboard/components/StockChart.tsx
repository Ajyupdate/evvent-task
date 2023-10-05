import { Line } from "react-chartjs-2";

const AreaChart = () => {
  // Sample data for the chart
  const data = {
    labels: [
      "2023-01-01",
      "2023-02-01",
      "2023-03-01",
      "2023-04-01",
      "2023-05-01",
    ],
    datasets: [
      {
        label: "Data Series 1",
        fill: true, // Fill the area under the line
        backgroundColor: "rgba(75,192,192,0.2)", // Area color
        borderColor: "rgba(75,192,192,1)", // Line color
        data: [65, 59, 80, 81, 56], // Your data points
      },
    ],
  };

  // Chart configuration options
  const options = {
    scales: {
      x: {
        type: "time", // Use 'time' scale for dates
        time: {
          unit: "month", // Customize the time unit (e.g., 'day', 'week', 'month')
        },
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };

  return (
    <div>
      <h2>Area Chart Example</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default AreaChart;
