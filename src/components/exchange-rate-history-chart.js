import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function HistoryChart({data}) {
  const options = {
    responsive: true
  }

  const labels = data.map(({date}) => date);
  const rates = data.map(({rate}) => rate)

  const chartData = {
    labels,
    datasets: [
      {
        label: null,
        data: rates,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  };
  return <Line options={options} data={chartData}  />
}