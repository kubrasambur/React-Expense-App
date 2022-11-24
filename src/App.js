import Expenses from './components/Expenses/Expenses';
import Chart from 'react-apexcharts'

function App() {

  // const series = [
  //   {
  //     name: "Earthquake",
  //     data: [6.0, 2.0, 1.7, 1.6, 1.9, 1.4, 1.4, 2.0, 3.9, 1.6, 1.4, 1.5, 1.3, 1.6, 2.0, 1.9, 1.4, 1.4, 2.2, 1.5, 1.7, 2.5, 1.8, 1.4, 1.5, 1.3, 2.6, 1.6, 1.6, 1.3, 2.0, 2.1, 2.1, 2.4, 2.5, 2.1, 1.3, 2.2, 1.3, 1.5, 1.5, 1.5, 4.4, 1.9, 1.4, 1.4,]
  //   },
  // ];

  // const options = {

  //   chart: {
  //     height: 350,
  //     type: 'line',
  //     zoom: {
  //       enabled: false
  //     }
  //   },
  //   stroke: {
  //     curve: 'straight'
  //   },
  //   title: {
  //     text: "Line Chart",
  //     align: "center",
  //   },
  //   grid: {
  //     row: {
  //       colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
  //       opacity: 0.5
  //     },
  //   },
  //   xaxis: {
  //     categories: ['04:08:14', '04:15:08', '04:18:06', '04:18:53', '04:20:45', '04:23:38', '04:26:39', '04:28:25', '04:30:35', '04:32:14', '04:36:54', '04:42:15', '04:45:35', '04:46:33', '04:48:55', '04:49:13', '04:51:41', '04:56:20', '05:01:26', '05:05:35', '05:15:04', '05:16:46', '05:21:53', '05:24:32', '05:28:19', '05:32:21', '05:36:46', '05:38:03', '05:39:57', '05:41:02', '05:50:24', '05:59:41', '06:03:24', '06:08:55', '06:10:15', '06:15:34', '06:18:51', '06:23:22', '06:24:39', '06:25:12', '06:47:12', '06:50:57', '07:00:28', '07:03:11', '07:04:43'],
  //   }
  // }

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]

  return (
    <div>
      <Expenses expenses={expenses} />
      {/* <Chart options={options} series={series} type="area" width="1200" height="350" /> */}
    </div>
  );
}

export default App;
