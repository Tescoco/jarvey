import React from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import Dropdown from '../../components/Dropdown'
import InfoCard from '../../components/dashboard/InfoCard';
import { c_16, c_24, langList } from '../../utilities/Classes'
import CardTitle from '../../components/dashboard/CardTitle'
import LineChart from '../../components/dashboard/LineChart';
import BarChart from '../../components/dashboard/BarChart';
import DoughnutChart from '../../components/dashboard/DoughnutChart';
import Alert from '../../components/Alert';
import TableFilter from '../../components/TableFilter';

export default function AgentPerformance() {
  const info = [
    {
      label: 'Agent Productivity',
      marketValue: '10',
      marketVariant: 'success',
      title: '90%',
    },
    {
      label: 'Customer Satisfaction',
      marketValue: '20',
      marketVariant: 'success',
      title: '100%',
    },
  ]
  const analysis = [
    {
      label: 'Agent Productivity',
      title: '32,720k',
      unit: 'Total',
    },
    {
      marketValue: '12',
      marketVariant: 'success',
      title: '12,120k',
      unit: 'Positive',
    },
    {
      marketValue: '10',
      marketVariant: 'success',
      title: '10,250k',
      unit: 'Neutral',
    },
    {
      marketValue: '10',
      marketVariant: 'danger',
      title: '10,720k',
      unit: 'Negative',
    },
  ]

  const agentPerformanceChart = {
    productivity: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Monthly Data",
          data: [40, 50, 38, 42, 33, 47, 39, 44, 37, 43, 31, 49],
          backgroundColor: "#7856FF",
          borderRadius: 40,
          borderSkipped: false,
          borderWidth: 0,
          borderColor: '#7856FF',
          maxBarThickness: 16,
        }
      ],
      max: 60,
      legend: false,
      yPercent: true,
    },
    sentimentAnalysis: [
      {
        name: 'Positive',
        percent: 50,
        color: '#166448',
      },
      {
        name: 'Neutral',
        percent: 35,
        color: '#7855FF',
      },
      {
        name: 'Negative',
        percent: 15,
        color: '#FE4234',
      },
    ],
    agentPerformance: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Monthly Data',
          data: [-20, -25, -30, -28, -20, -10, 0, 10, 20, 18, 10, 0],
          borderColor: '#176448',
          backgroundColor: '#176448',
          tension: 0.5,
          pointBackgroundColor: '#176448',
          pointBorderColor: '#176448',
          pointRadius: 4,
        }
      ],
      legend: false,
      min: -80,
      max: 80,
    }
  }

  const customerSupport = {
    customerDoughnutData: [
      {
        name: 'Order Inquiries',
        percent: 50,
        color: '#7855FF',
      },
      {
        name: 'Returns',
        percent: 35,
        color: '#FFC563',
      },
      {
        name: 'Complaints',
        percent: 15,
        color: '#FE4234',
      },
    ],
    complaintsDoughnutData: [
      {
        name: 'Customers',
        percent: 50,
        color: '#166448',
      },
      {
        name: 'Complaints',
        percent: 25,
        color: '#FE4234',
      },
    ],
    breakdownData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Other/No Reply',
          data: [30, 28, 25, 26, 28, 30, 32, 35, 40, 42, 46, 38, 32],
          borderColor: '#7856FF',
          backgroundColor: '#7856FF',
          tension: 0.5,
          pointBackgroundColor: '#7856FF',
          pointBorderColor: '#7856FF',
          pointRadius: 4,
        },
        {
          label: 'Product/Question',
          data: [22, 25, 30, 26, 32, 35, 39, 36, 32, 38, 41, 49],
          borderColor: '#FFC563',
          backgroundColor: '#FFC563',
          tension: 0.5,
          pointBackgroundColor: '#FFC563',
          pointBorderColor: '#FFC563',
          pointRadius: 4,
        },
        {
          label: 'Refund/Request',
          data: [14, 17, 20, 22, 24, 26, 28, 30, 32, 30, 32, 35],
          borderColor: '#FE4234',
          backgroundColor: '#FE4234',
          tension: 0.5,
          pointBackgroundColor: '#FE4234',
          pointBorderColor: '#FE4234',
          pointRadius: 4,
        }
      ],
      min: 0,
      max: 60,
      legend: true,
    }
  }
  const breakdown = [
    {
      id: 'other/no_reply',
      total: 5,
      percentage: 50,
      delta: '100%',
    },
    {
      id: 'product/question',
      total: 1,
      percentage: 5,
      delta: '100%',
    },
    {
      id: 'refund/request',
      total: 3,
      percentage: 10,
      delta: '100%',
    },
    {
      id: 'other/no_reply',
      total: 1,
      percentage: 5,
      delta: '100%',
    },
  ]
  const activity = [
    {
      id: 'Mian Asad Ali',
      tickets: 5,
      massages: 2,
      open: 2,
      status: 'online',
    },
    {
      id: 'Robin Mchelpful',
      tickets: 2,
      massages: 1,
      open: 0,
      status: "online",
    },
    {
      id: 'Darlene Robertson',
      tickets: 6,
      massages: 3,
      open: 3,
      status: "offline",
    },
    {
      id: 'Annette Black',
      tickets: 3,
      massages: 1,
      open: 1,
      status: "offline",
    },
  ]
  return (
    <>
      <Top title="Customer Service Analytics">
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
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4 ">
          <div className={`${c_16} col-span-2 md:col-span-2 grow w-full md:w-auto xl:min-w-[200px] 2xl:min-w-max h-full flex gap-4 flex-wrap md:flex-nowrap`}>
            {analysis.map((item, index) => (
              <div className={`flex flex-col gap-4 w-[45%] md:w-auto ${index === 0 ? "md:pr-[calc(64px-16px)]" : "md:min-w-[99px] border-r border-stroke"} grow ${index === analysis.length - 1 && "border-r-0"}`} key={index}>
                {item.label ?
                  <div className="">
                    <span className='block font-inter font-medium text-xs text-heading'>{item.label}</span>
                  </div> :
                  <div className="">
                    <Alert className='!min-h-5' variant={item.marketVariant} text={`${item.marketValue}%`} plus />
                  </div>
                }
                <span className='text-xs font-medium block'>{item.unit} </span>
                <h4 className='text-lg !leading-normal text-[#0A0D14]'>{item.title} </h4>
              </div>
            ))}
          </div>
          {info.map((item, index) => (
            <InfoCard key={index} item={item} className='grow w-full sm:w-[calc(50%-12px)] md:w-auto xl:min-w-[200px] 2xl:min-w-max h-full flex flex-col justify-between' />
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6">
          <div className={`${c_24} xl:col-span-8`}>
            <CardTitle title="Agent Productivity" />
            <BarChart setData={agentPerformanceChart.productivity} />
          </div>
          <div className={`${c_24} xl:col-span-4 flex flex-col`}>
            <CardTitle title="Sentiment Analysis" dropdown={false} />
            <DoughnutChart info={agentPerformanceChart.sentimentAnalysis} />
          </div>
        </div>
        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Activity of the Agents</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Agent', 'Tickets Closed', 'Messages Sent', 'Open Tickets', "Online Status"].map((item, index) => (
                    <th key={index} className={`${item === 'Tickets Closed' || item === 'Messages Sent' || item === "Open Tickets" ? '!text-center' : ''}`}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {activity.map((item, index) => (
                  <tr key={index}>
                    <td className='!font-medium !text-heading'>{item.id}</td>
                    <td className='!font-medium text-center'>{item.tickets}</td>
                    <td className='text-center'>{item.massages}</td>
                    <td className='text-center !text-heading'>{item.open}</td>
                    <td>
                      <span className={`block py-1 px-2 max-w-max capitalize rounded-md ${item.status === "online" ? "text-[#176448] bg-[#176448]/10" : "text-gray bg-gray/10"}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className={`${c_24}`}>
            <CardTitle title="Agent Performance" />
            <LineChart className='h-[280px]' setData={agentPerformanceChart.agentPerformance} />
          </div>
          <div className={`${c_24} xl:col-span-8`}>
            <CardTitle title="Breakdown of Top Ten Intents Per Day" />
            <LineChart setData={customerSupport.breakdownData} />
          </div>
          <div className={`${c_24}`}>
            <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
              <h4>Breakdown of Intent Occurrence</h4>
              <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' csv />
            </div>
            <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
              <table className="table">
                <thead>
                  <tr>
                    {['Macro', 'Total', 'Percentage', 'Delta'].map((item, index) => (
                      <th key={index} className={`${item === 'Total' || item === 'Percentage' ? '!text-center' : ''}`}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {breakdown.map((item, index) => (
                    <tr key={index}>
                      <td className='!font-medium !text-heading'>{item.id}</td>
                      <td className='!font-medium text-center !text-heading'>{item.total}</td>
                      <td className='text-center'>{item.percentage}%</td>
                      <td className='!font-medium'>
                        <div className="flex items-center gap-1">
                          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.29102 7.70841L9.32082 3.67859C9.9717 3.02771 11.027 3.02771 11.6778 3.67858L15.7077 7.70841M10.4993 3.95841V16.8751" stroke="#111111" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item.delta}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </MainInner>
    </>
  )
}
