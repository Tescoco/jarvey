import React from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import Dropdown from '../../components/Dropdown'
import InfoCard from '../../components/dashboard/InfoCard';
import { c_16, c_24, langList } from '../../utilities/Classes'
import CardTitle from '../../components/dashboard/CardTitle'
import LineChart from '../../components/dashboard/LineChart';
import MatrixChart from '../../components/dashboard/MatrixChart';
import BarChartY from '../../components/dashboard/BarChartY';
import TableFilter from '../../components/TableFilter';
import DoughnutChart from '../../components/dashboard/DoughnutChart';

export default function CustomReportsVisualizations() {
  const info = [
    {
      label: 'Total Sales Per Store',
      marketValue: '15',
      marketVariant: 'success',
      title: '$50,846',
    },
    {
      label: 'Average Order Value',
      marketValue: '12',
      marketVariant: 'success',
      title: '$300',
    },
    {
      label: 'Customer Retention Rate',
      marketValue: '12',
      marketVariant: 'success',
      title: '90%',
    },
    {
      label: 'Store Profitability Index ',
      marketValue: '12',
      marketVariant: 'success',
      title: '+45,427 / -24,281',
    },
  ]

  const matrixWidth = ({ chart }) => (chart.chartArea || {}).width / 12.3;
  const matrixHeight = ({ chart }) => (chart.chartArea || {}).height / 10.5;

  const chartInfo = {
    overall: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: '',
          data: [-35, -22, -10, 2, 12, 20, 22, 18, 15, 16, 28, 42],
          borderColor: '#7856FF',
          backgroundColor: '#7856FF',
          tension: 0.5,
          pointBackgroundColor: '#7856FF',
          pointBorderColor: '#7856FF',
          pointRadius: 4,
        },
      ],
      min: -80,
      max: 80,
      legend: false,
    },
    keyMetrics: {
      datasets: [
        {
          label: "Foot Traffic",
          data: [
            { x: 'Jan', y: 10, v: 30 },
            { x: 'Jan', y: 20, v: 10 },
            { x: 'Jan', y: 30, v: 40 },
            { x: 'Jan', y: 40, v: 0 },
            { x: 'Jan', y: 50, v: 0 },
            { x: 'Jan', y: 60, v: 70 },
            { x: 'Jan', y: 70, v: 100 },
            { x: 'Jan', y: 80, v: 50 },
            { x: 'Jan', y: 90, v: 30 },
            { x: 'Jan', y: 100, v: 0 },

            { x: 'Feb', y: 10, v: 20 },
            { x: 'Feb', y: 20, v: 60 },
            { x: 'Feb', y: 30, v: 80 },
            { x: 'Feb', y: 40, v: 0 },
            { x: 'Feb', y: 50, v: 0 },
            { x: 'Feb', y: 60, v: 0 },
            { x: 'Feb', y: 70, v: 90 },
            { x: 'Feb', y: 80, v: 70 },
            { x: 'Feb', y: 90, v: 40 },
            { x: 'Feb', y: 100, v: 60 },

            { x: 'Mar', y: 10, v: 0 },
            { x: 'Mar', y: 20, v: 20 },
            { x: 'Mar', y: 30, v: 50 },
            { x: 'Mar', y: 40, v: 80 },
            { x: 'Mar', y: 50, v: 0 },
            { x: 'Mar', y: 60, v: 0 },
            { x: 'Mar', y: 70, v: 40 },
            { x: 'Mar', y: 80, v: 90 },
            { x: 'Mar', y: 90, v: 30 },
            { x: 'Mar', y: 100, v: 20 },

            { x: 'Apr', y: 10, v: 60 },
            { x: 'Apr', y: 20, v: 10 },
            { x: 'Apr', y: 30, v: 0 },
            { x: 'Apr', y: 40, v: 0 },
            { x: 'Apr', y: 50, v: 50 },
            { x: 'Apr', y: 60, v: 80 },
            { x: 'Apr', y: 70, v: 70 },
            { x: 'Apr', y: 80, v: 20 },
            { x: 'Apr', y: 90, v: 10 },
            { x: 'Apr', y: 100, v: 40 },

            { x: 'May', y: 10, v: 10 },
            { x: 'May', y: 20, v: 50 },
            { x: 'May', y: 30, v: 70 },
            { x: 'May', y: 40, v: 20 },
            { x: 'May', y: 50, v: 10 },
            { x: 'May', y: 60, v: 90 },
            { x: 'May', y: 70, v: 100 },
            { x: 'May', y: 80, v: 0 },
            { x: 'May', y: 90, v: 60 },
            { x: 'May', y: 100, v: 40 },

            { x: 'Jun', y: 10, v: 0 },
            { x: 'Jun', y: 20, v: 20 },
            { x: 'Jun', y: 30, v: 40 },
            { x: 'Jun', y: 40, v: 70 },
            { x: 'Jun', y: 50, v: 10 },
            { x: 'Jun', y: 60, v: 50 },
            { x: 'Jun', y: 70, v: 80 },
            { x: 'Jun', y: 80, v: 90 },
            { x: 'Jun', y: 90, v: 30 },
            { x: 'Jun', y: 100, v: 70 },

            { x: 'Jul', y: 10, v: 0 },
            { x: 'Jul', y: 20, v: 0 },
            { x: 'Jul', y: 30, v: 50 },
            { x: 'Jul', y: 40, v: 30 },
            { x: 'Jul', y: 50, v: 90 },
            { x: 'Jul', y: 60, v: 40 },
            { x: 'Jul', y: 70, v: 100 },
            { x: 'Jul', y: 80, v: 70 },
            { x: 'Jul', y: 90, v: 30 },
            { x: 'Jul', y: 100, v: 80 },

            { x: 'Aug', y: 10, v: 10 },
            { x: 'Aug', y: 20, v: 60 },
            { x: 'Aug', y: 30, v: 90 },
            { x: 'Aug', y: 40, v: 50 },
            { x: 'Aug', y: 50, v: 20 },
            { x: 'Aug', y: 60, v: 100 },
            { x: 'Aug', y: 70, v: 60 },
            { x: 'Aug', y: 80, v: 30 },
            { x: 'Aug', y: 90, v: 40 },
            { x: 'Aug', y: 100, v: 10 },

            { x: 'Sep', y: 10, v: 0 },
            { x: 'Sep', y: 20, v: 20 },
            { x: 'Sep', y: 30, v: 50 },
            { x: 'Sep', y: 40, v: 30 },
            { x: 'Sep', y: 50, v: 0 },
            { x: 'Sep', y: 60, v: 80 },
            { x: 'Sep', y: 70, v: 100 },
            { x: 'Sep', y: 80, v: 90 },
            { x: 'Sep', y: 90, v: 10 },
            { x: 'Sep', y: 100, v: 40 },

            { x: 'Oct', y: 10, v: 20 },
            { x: 'Oct', y: 20, v: 80 },
            { x: 'Oct', y: 30, v: 0 },
            { x: 'Oct', y: 40, v: 50 },
            { x: 'Oct', y: 50, v: 30 },
            { x: 'Oct', y: 60, v: 10 },
            { x: 'Oct', y: 70, v: 90 },
            { x: 'Oct', y: 80, v: 40 },
            { x: 'Oct', y: 90, v: 0 },
            { x: 'Oct', y: 100, v: 60 },

            { x: 'Nov', y: 10, v: 30 },
            { x: 'Nov', y: 20, v: 40 },
            { x: 'Nov', y: 30, v: 90 },
            { x: 'Nov', y: 40, v: 0 },
            { x: 'Nov', y: 50, v: 70 },
            { x: 'Nov', y: 60, v: 30 },
            { x: 'Nov', y: 70, v: 60 },
            { x: 'Nov', y: 80, v: 80 },
            { x: 'Nov', y: 90, v: 50 },
            { x: 'Nov', y: 100, v: 20 },

            { x: 'Dec', y: 10, v: 40 },
            { x: 'Dec', y: 20, v: 10 },
            { x: 'Dec', y: 30, v: 60 },
            { x: 'Dec', y: 40, v: 20 },
            { x: 'Dec', y: 50, v: 0 },
            { x: 'Dec', y: 60, v: 0 },
            { x: 'Dec', y: 70, v: 70 },
            { x: 'Dec', y: 80, v: 100 },
            { x: 'Dec', y: 90, v: 40 },
            { x: 'Dec', y: 100, v: 60 },
          ],
          backgroundColor: '#176448',
          borderColor: '#fff',
          borderWidth: 0,
          width: matrixWidth,
          height: matrixHeight,
          borderRadius: 2,
        },
        {
          label: "Online Traffic",
          data: [
            { x: 'Jan', y: 10, v: 30 },
            { x: 'Jan', y: 20, v: 10 },
            { x: 'Jan', y: 30, v: 40 },
            { x: 'Jan', y: 40, v: 0 },
            { x: 'Jan', y: 50, v: 0 },
            { x: 'Jan', y: 60, v: 70 },
            { x: 'Jan', y: 70, v: 100 },
            { x: 'Jan', y: 80, v: 50 },
            { x: 'Jan', y: 90, v: 30 },
            { x: 'Jan', y: 100, v: 0 },

            { x: 'Feb', y: 10, v: 20 },
            { x: 'Feb', y: 20, v: 60 },
            { x: 'Feb', y: 30, v: 80 },
            { x: 'Feb', y: 40, v: 0 },
            { x: 'Feb', y: 50, v: 0 },
            { x: 'Feb', y: 60, v: 0 },
            { x: 'Feb', y: 70, v: 90 },
            { x: 'Feb', y: 80, v: 70 },
            { x: 'Feb', y: 90, v: 40 },
            { x: 'Feb', y: 100, v: 60 },

            { x: 'Mar', y: 10, v: 0 },
            { x: 'Mar', y: 20, v: 20 },
            { x: 'Mar', y: 30, v: 50 },
            { x: 'Mar', y: 40, v: 80 },
            { x: 'Mar', y: 50, v: 0 },
            { x: 'Mar', y: 60, v: 0 },
            { x: 'Mar', y: 70, v: 40 },
            { x: 'Mar', y: 80, v: 90 },
            { x: 'Mar', y: 90, v: 30 },
            { x: 'Mar', y: 100, v: 20 },

            { x: 'Apr', y: 10, v: 60 },
            { x: 'Apr', y: 20, v: 10 },
            { x: 'Apr', y: 30, v: 0 },
            { x: 'Apr', y: 40, v: 0 },
            { x: 'Apr', y: 50, v: 50 },
            { x: 'Apr', y: 60, v: 80 },
            { x: 'Apr', y: 70, v: 70 },
            { x: 'Apr', y: 80, v: 20 },
            { x: 'Apr', y: 90, v: 10 },
            { x: 'Apr', y: 100, v: 40 },

            { x: 'May', y: 10, v: 10 },
            { x: 'May', y: 20, v: 50 },
            { x: 'May', y: 30, v: 70 },
            { x: 'May', y: 40, v: 20 },
            { x: 'May', y: 50, v: 10 },
            { x: 'May', y: 60, v: 90 },
            { x: 'May', y: 70, v: 100 },
            { x: 'May', y: 80, v: 0 },
            { x: 'May', y: 90, v: 60 },
            { x: 'May', y: 100, v: 40 },

            { x: 'Jun', y: 10, v: 0 },
            { x: 'Jun', y: 20, v: 20 },
            { x: 'Jun', y: 30, v: 40 },
            { x: 'Jun', y: 40, v: 70 },
            { x: 'Jun', y: 50, v: 10 },
            { x: 'Jun', y: 60, v: 50 },
            { x: 'Jun', y: 70, v: 80 },
            { x: 'Jun', y: 80, v: 90 },
            { x: 'Jun', y: 90, v: 30 },
            { x: 'Jun', y: 100, v: 70 },

            { x: 'Jul', y: 10, v: 0 },
            { x: 'Jul', y: 20, v: 0 },
            { x: 'Jul', y: 30, v: 50 },
            { x: 'Jul', y: 40, v: 30 },
            { x: 'Jul', y: 50, v: 90 },
            { x: 'Jul', y: 60, v: 40 },
            { x: 'Jul', y: 70, v: 100 },
            { x: 'Jul', y: 80, v: 70 },
            { x: 'Jul', y: 90, v: 30 },
            { x: 'Jul', y: 100, v: 80 },

            { x: 'Aug', y: 10, v: 10 },
            { x: 'Aug', y: 20, v: 60 },
            { x: 'Aug', y: 30, v: 90 },
            { x: 'Aug', y: 40, v: 50 },
            { x: 'Aug', y: 50, v: 20 },
            { x: 'Aug', y: 60, v: 100 },
            { x: 'Aug', y: 70, v: 60 },
            { x: 'Aug', y: 80, v: 30 },
            { x: 'Aug', y: 90, v: 40 },
            { x: 'Aug', y: 100, v: 10 },

            { x: 'Sep', y: 10, v: 0 },
            { x: 'Sep', y: 20, v: 20 },
            { x: 'Sep', y: 30, v: 50 },
            { x: 'Sep', y: 40, v: 30 },
            { x: 'Sep', y: 50, v: 0 },
            { x: 'Sep', y: 60, v: 80 },
            { x: 'Sep', y: 70, v: 100 },
            { x: 'Sep', y: 80, v: 90 },
            { x: 'Sep', y: 90, v: 10 },
            { x: 'Sep', y: 100, v: 40 },

            { x: 'Oct', y: 10, v: 20 },
            { x: 'Oct', y: 20, v: 80 },
            { x: 'Oct', y: 30, v: 0 },
            { x: 'Oct', y: 40, v: 50 },
            { x: 'Oct', y: 50, v: 30 },
            { x: 'Oct', y: 60, v: 10 },
            { x: 'Oct', y: 70, v: 90 },
            { x: 'Oct', y: 80, v: 40 },
            { x: 'Oct', y: 90, v: 0 },
            { x: 'Oct', y: 100, v: 60 },

            { x: 'Nov', y: 10, v: 30 },
            { x: 'Nov', y: 20, v: 40 },
            { x: 'Nov', y: 30, v: 90 },
            { x: 'Nov', y: 40, v: 0 },
            { x: 'Nov', y: 50, v: 70 },
            { x: 'Nov', y: 60, v: 30 },
            { x: 'Nov', y: 70, v: 60 },
            { x: 'Nov', y: 80, v: 80 },
            { x: 'Nov', y: 90, v: 50 },
            { x: 'Nov', y: 100, v: 20 },

            { x: 'Dec', y: 10, v: 40 },
            { x: 'Dec', y: 20, v: 10 },
            { x: 'Dec', y: 30, v: 60 },
            { x: 'Dec', y: 40, v: 20 },
            { x: 'Dec', y: 50, v: 0 },
            { x: 'Dec', y: 60, v: 0 },
            { x: 'Dec', y: 70, v: 70 },
            { x: 'Dec', y: 80, v: 100 },
            { x: 'Dec', y: 90, v: 40 },
            { x: 'Dec', y: 100, v: 60 },
          ],
          backgroundColor: '#74A291',
          borderColor: '#fff',
          borderWidth: 0,
          width: matrixWidth,
          height: matrixHeight,
          borderRadius: 2,
        },
      ],
      legend: true,
      max: 100,
    },
    customer: [
      {
        name: 'Revenue',
        percent: 75,
        color: '#166448',
      },
      {
        name: 'Units Sold',
        percent: 25,
        color: '#FFC563',
      },
    ],
    marketing: [
      {
        name: 'marketing',
        percent: 75,
        color: '#166448',
      },
      {
        name: 'Spend',
        percent: 25,
        color: '#FE4333',
      },
    ],
    performing: {
      labels: ["Store A", "Store B", "Store C", "Store D"],
      datasets: [
        {
          label: "Revenue",
          data: [94, 0, 0, 0],
          backgroundColor: "#7856FF",
          borderRadius: 40,
          borderWidth: 0,
          borderColor: '#7856FF',
          maxBarThickness: 50,
        },
        {
          label: "Growth",
          data: [0, 80, 0, 0],
          backgroundColor: "#176448",
          borderRadius: 40,
          borderWidth: 0,
          borderColor: '#7856FF',
          maxBarThickness: 50,
        },
        {
          label: "Square",
          data: [0, 0, 60, 0],
          backgroundColor: "#FFC563",
          borderRadius: 40,
          borderWidth: 0,
          borderColor: '#7856FF',
          maxBarThickness: 50,
        },
        {
          label: "Adyen",
          data: [0, 0, 0, 40],
          backgroundColor: "#0A0D14",
          borderRadius: 40,
          borderWidth: 0,
          borderColor: '#7856FF',
          maxBarThickness: 50,
        },
      ],
      legend: true,
    },
  }
  const botTraining = [
    {
      id: 'ST-OOI',
      name: 'A',
      totalSales: '3,500',
      totalRevenue: '120,000',
      totalOrder: '34',
      return: '5',
      customer: '4.8',
    },
    {
      id: 'ST-002',
      name: 'B',
      totalSales: '3,200',
      totalRevenue: '110,500',
      totalOrder: '35',
      return: '6',
      customer: '4.6',
    },
    {
      id: 'ST-OO3',
      name: 'C',
      totalSales: '2,800',
      totalRevenue: '98,750',
      totalOrder: '36.3',
      return: '4',
      customer: '4.7',
    },
    {
      id: 'ST-OO4',
      name: 'D',
      totalSales: '2,600',
      totalRevenue: '89,200',
      totalOrder: '34.3',
      return: '7',
      customer: '4.4',
    },
    {
      id: 'ST-OO5',
      name: 'E',
      totalSales: '2,100',
      totalRevenue: '75,900',
      totalOrder: '36.1',
      return: '4',
      customer: '4.5',
    },
  ]

  const recommendations = [
    {
      title: 'Whitman College',
      des: 'A list of integration techniques, including substitution, integration by parts, and trigonometric substitutions ',
    },
    {
      title: 'Byjus',
      des: "A guide to integration by parts, including the ILATE rule ",
    },
    {
      title: 'Wikihow',
      des: 'A step-by-step guide to integration by parts ',
    },
    {
      title: 'Electronics Tutorials',
      des: 'A guide to integration by substitution ',
    },
    {
      title: 'Razorpay Learn',
      des: 'A guide to writing integration guides, including step-by-step instructions for users',
    },
  ]
  return (
    <>
      <Top title="Custom Reports & Visualizations">
        <div className="flex items-center gap-4">
          <Dropdown className='mb-0 !hidden md:!flex' dropDownClass='!left-auto right-0 w-max' btnClass="text-primary" placeholder="Data Range" items={[
            { name: 'Data Range - 1' },
            { name: 'Data Range - 2' },
            { name: 'Data Range - 3' },
          ]} />
          <Dropdown className='mb-0' dropDownClass='!left-auto right-0 w-max' btnClass="!bg-primary text-white" placeholder="Language" items={langList} />
        </div>
      </Top>
      <MainInner className='grid grid-cols-1 gap-4 md:gap-5 lg:gap-6'>
        <div className="flex items-center gap-3 md:gap-4 flex-wrap">
          {info.map((item, index) => (
            <InfoCard key={index} item={item} className='grow w-full sm:w-[calc(50%-12px)] md:w-auto xl:min-w-[200px] 2xl:min-w-max' />
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6">
          <div className={`${c_24} xl:col-span-8`}>
            <CardTitle title="Overall Store Performance" />
            <LineChart setData={chartInfo.overall} />
          </div>
          <div className={`${c_24} xl:col-span-4 flex flex-col`}>
            <CardTitle title="Sales Trends Over Time" dropdown={false} />
            <DoughnutChart info={chartInfo.customer} />
          </div>
          <div className={`${c_24} xl:col-span-4 flex flex-col`}>
            <CardTitle title="Marketing ROI by Store" dropdown={false} />
            <DoughnutChart info={chartInfo.marketing} />
          </div>
          <div className={`${c_24} flex flex-col xl:col-span-8`}>
            <CardTitle title="Top Performing Stores" />
            <BarChartY setData={chartInfo.performing} />
          </div>
        </div>
        <div className={`grid grid-cols-1 gap-4 md:gap-6 ${c_24}`}>
          <CardTitle title="Customer Foot Traffic vs. Online Traffic" />
          <MatrixChart className='h-[500px]' setData={chartInfo.keyMetrics} />
        </div>
        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Sales & Revenue Breakdown Per Store:</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Store ID', 'Store Name', 'Total Sales', 'Total Revenue ($)', 'Avg. Order Value ($)', "Return Rate (%)", "Customer Rating"].map((item, index) => (
                    <th key={index} >{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {botTraining.map((item, index) => (
                  <tr key={index}>
                    <td className='!font-medium !text-heading'>{item.id}</td>
                    <td>Store {item.name}</td>
                    <td>{item.totalSales}</td>
                    <td>{item.totalRevenue}</td>
                    <td>{item.totalOrder}</td>
                    <td>{item.return}%</td>
                    <td className='!font-medium !text-heading'>{item.customer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
          <div className={`${c_16}`}>
            <CardTitle title="Profit Margins" titleClass="!text-sm" />
            <LineChart setData={chartInfo.overall} />
          </div>
          <div className={`${c_16}`}>
            <CardTitle title="Integration guide" titleClass="!text-sm" dropdown={false} />
            {recommendations.map((item, index) => (
              <div key={index} className='flex flex-col gap-y-4 md:gap-y-5 mb-4 md:mb-5 last:mb-0'>
                <div className="flex items-center gap-2 mb-0 cursor-pointer pb-3 md:pb-4 border-b border-solid border-stroke">
                  <span className='text-sm !leading-normal text-[#858585] flex gap-1'>
                    <span className='font-medium text-[#0A0D14] flex-none'>{item.title} - </span>
                    <span className='line-clamp-1'>
                      {item.des}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainInner>
    </>
  )
}
