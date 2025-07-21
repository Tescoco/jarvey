import React from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import Dropdown from '../../components/Dropdown'
import InfoCard from '../../components/dashboard/InfoCard';
import { c_24, langList } from '../../utilities/Classes'
import CardTitle from '../../components/dashboard/CardTitle'
import LineChart from '../../components/dashboard/LineChart';
import BarChartY from '../../components/dashboard/BarChartY';
import TableFilter from '../../components/TableFilter';
import Alert from '../../components/Alert';
import DoughnutChart from '../../components/dashboard/DoughnutChart';

export default function ConversationsAnalytics() {
  const info = [
    {
      label: 'Total Conversations',
      marketValue: '15',
      marketVariant: 'success',
      title: '50,846h',
    },
    {
      label: 'Average Time to First Message',
      marketValue: '12',
      marketVariant: 'success',
      title: '00:30:14',
    },
    {
      label: 'Unanswered Conversations Count',
      marketValue: '12',
      marketVariant: 'success',
      title: '200 /300',
    },
  ]

  const chartInfo = {
    ticketVolume: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Chat',
          data: [30, 28, 25, 26, 28, 30, 32, 35, 40, 42, 46, 38, 32],
          borderColor: '#7855FF',
          backgroundColor: '#7855FF',
          tension: 0.5,
          pointBackgroundColor: '#7855FF',
          pointBorderColor: '#7855FF',
          pointRadius: 4,
        },
        {
          label: 'Email',
          data: [14, 17, 20, 22, 24, 26, 28, 30, 32, 30, 32, 35],
          borderColor: '#176448',
          backgroundColor: '#176448',
          tension: 0.5,
          pointBackgroundColor: '#176448',
          pointBorderColor: '#176448',
          pointRadius: 4,
        },
        {
          label: 'Social Media',
          data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
          borderColor: '#FFC563',
          backgroundColor: '#FFC563',
          tension: 0.5,
          pointBackgroundColor: '#FFC563',
          pointBorderColor: '#FFC563',
          pointRadius: 4,
        },
      ],
      min: 0,
      max: 60,
      legend: true,
    },
    trend: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Outside-Business-Hours',
          data: [32, 30, 29, 29, 31, 35, 40, 45, 48, 47, 43, 35],
          borderColor: '#7855FF',
          backgroundColor: '#7855FF',
          tension: 0.5,
          pointBackgroundColor: '#7855FF',
          pointBorderColor: '#7855FF',
          pointRadius: 4,
        },
        {
          label: 'Auto-Close',
          data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
          borderColor: '#F7B844',
          backgroundColor: '#F7B844',
          tension: 0.5,
          pointBackgroundColor: '#F7B844',
          pointBorderColor: '#F7B844',
          pointRadius: 4,
        },
        {
          label: 'Non-Support-Related',
          data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
          borderColor: '#FFC563',
          backgroundColor: '#FFC563',
          tension: 0.5,
          pointBackgroundColor: '#FFC563',
          pointBorderColor: '#FFC563',
          pointRadius: 4,
        },
        {
          label: 'Ai_Handover',
          data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
          borderColor: '#FFC563',
          backgroundColor: '#FFC563',
          tension: 0.5,
          pointBackgroundColor: '#FFC563',
          pointBorderColor: '#FFC563',
          pointRadius: 4,
        },
        {
          label: 'Ai-Close',
          data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
          borderColor: '#FFC563',
          backgroundColor: '#FFC563',
          tension: 0.5,
          pointBackgroundColor: '#FFC563',
          pointBorderColor: '#FFC563',
          pointRadius: 4,
        },
        {
          label: 'During-Business-Hours',
          data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
          borderColor: '#FFC563',
          backgroundColor: '#FFC563',
          tension: 0.5,
          pointBackgroundColor: '#FFC563',
          pointBorderColor: '#FFC563',
          pointRadius: 4,
        },
        {
          label: 'Ai_Answered',
          data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
          borderColor: '#FFC563',
          backgroundColor: '#FFC563',
          tension: 0.5,
          pointBackgroundColor: '#FFC563',
          pointBorderColor: '#FFC563',
          pointRadius: 4,
        },
        {
          label: 'PRODUCT',
          data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
          borderColor: '#FFC563',
          backgroundColor: '#FFC563',
          tension: 0.5,
          pointBackgroundColor: '#FFC563',
          pointBorderColor: '#FFC563',
          pointRadius: 4,
        },
      ],
      min: 0,
      max: 60,
      legend: true,
    },
    ticketPermeance: [
      {
        name: 'Response Times',
        percent: 75,
        color: '#166448',
      },
      {
        name: 'Automation Rate',
        percent: 25,
        color: '#FFC563',
      },
    ],
    mostFrequently: {
      labels: ["Outside-Business-Hours", "Auto-Close", "Non-Support-Related", "Ai_Handover", "Ai-Close", "During-Business-Hours", "Ai_Answered", "PRODUCT",],
      datasets: [
        {
          label: 'Category Percentage',
          data: [100, 90, 80, 70, 65, 55, 45, 40],
          backgroundColor: [
            '#7A5FFF',
            '#D1C2FF',
            '#144733',
            '#D0E4DC',
            '#0A0D14',
            '#FFAA45',
            '#FFE7C2',
            '#7A7A7A',
          ],
          borderRadius: 10,
          barThickness: 20,
        },
      ],
      legend: false,
    },
  }

  const mostTable = [
    {
      id: 'CONV-OOI',
      customer: 'John D.',
      reason: 'No Agent Available',
      timestamp: '2025-02-27.10:15 AM',
      status: {
        name: 'Pending',
        variant: 'warning'
      }
    },
    {
      id: 'CONV-002',
      customer: 'Emily R.',
      reason: 'Customer Left Before Response',
      timestamp: '2025-02-27.11:15 AM',
      status: {
        name: 'Resolved',
        variant: 'primary'
      }
    },
    {
      id: 'CONV-OO3',
      customer: 'Alex T.',
      reason: 'Long Wait Time',
      timestamp: '2025-02-27.12:30 PM',
      status: {
        name: 'Pending',
        variant: 'warning'
      }
    },
    {
      id: 'CONV-004',
      customer: 'Sarah M.',
      reason: 'System Error',
      timestamp: '2025-02-27.01:10 PM',
      status: {
        name: 'Resolved',
        variant: 'primary'
      }
    },
    {
      id: 'CONV-005',
      customer: 'Mike L.',
      reason: 'Agent Disconnected',
      timestamp: '2025-02-27.02:45 PM',
      status: {
        name: 'Pending',
        variant: 'warning'
      }
    },
  ]
  const tags = [
    {
      name: "outside-business-hours",
      value: 7,
      per: 0,
    },
    {
      name: "auto-close",
      value: 7,
      per: 0,
    },
    {
      name: "non-support-related",
      value: 7,
      per: 0,
    },
    {
      name: "aLhandover",
      value: 7,
      per: 0,
    },
    {
      name: "ai-close",
      value: 7,
      per: 0,
    },
    {
      name: "during-business-hours",
      value: 7,
      per: 0,
    },
    {
      name: "ai_answered",
      value: 7,
      per: 0,
    },
    {
      name: "PRODUCT",
      value: 7,
      per: 0,
    },
  ]
  const usedTags = [
    {
      total: 1,
      tue: '-',
      wed: '-',
      thu: 1,
      fri: '-',
      sat: '-',
      status: {
        name: 'PRODUCT',
        variant: 'primary'
      }
    },
    {
      total: 1,
      tue: '-',
      wed: '-',
      thu: 5,
      fri: '-',
      sat: '-',
      status: {
        name: 'ai_answered',
        variant: 'success'
      }
    },
    {
      total: 1,
      tue: '-',
      wed: '-',
      thu: 2,
      fri: '-',
      sat: '-',
      status: {
        name: 'during-business-hours',
        variant: 'warning'
      }
    },
    {
      total: 1,
      tue: '-',
      wed: '-',
      thu: 7,
      fri: '-',
      sat: '-',
      status: {
        name: 'ai-close',
        variant: 'danger'
      }
    },
    {
      total: 1,
      tue: '-',
      wed: '-',
      thu: 1,
      fri: '-',
      sat: '-',
      status: {
        name: 'aLhandover',
        variant: 'primary'
      }
    },
    {
      total: 1,
      tue: '-',
      wed: '-',
      thu: 4,
      fri: '-',
      sat: '-',
      status: {
        name: 'non-support-related',
        variant: 'success'
      }
    },
    {
      total: 1,
      tue: '-',
      wed: '-',
      thu: 2,
      fri: '-',
      sat: '-',
      status: {
        name: 'auto-close',
        variant: 'warning'
      }
    },
    {
      total: 1,
      tue: '-',
      wed: '-',
      thu: 7,
      fri: '-',
      sat: '-',
      status: {
        name: 'outside-business-hours',
        variant: 'danger'
      }
    },
  ]
  return (
    <>
      <Top title="System Integration Insights">
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
          <div className={`${c_24} xl:col-span-7 4xl:col-span-8 flex flex-col`}>
            <CardTitle title="Conversation Volume by Channel" />
            <LineChart setData={chartInfo.ticketVolume} />
          </div>
          <div className={`${c_24} xl:col-span-5 4xl:col-span-4`}>
            <CardTitle title="Customer Satisfaction Impact" dropdown={false} />
            <DoughnutChart info={chartInfo.ticketPermeance} />
          </div>
        </div>

        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Unanswered Conversations</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Conversation ID', "Customer Name/Alias", 'Reason', 'Timestamp', 'Status'].map((item, index) => (
                    <th key={index} className={``}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mostTable.map((item, index) => (
                  <tr key={index}>
                    <td className='!font-medium !text-heading'>{item.id}</td>
                    <td>{item.customer}</td>
                    <td>{item.reason}</td>
                    <td className='!font-medium !text-heading'>{item.timestamp}</td>
                    <td><Alert text={item.status.name} variant={item.status.variant} className='min-w-[90px]' /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-6">
          <div className={`${c_24}`}>
            <CardTitle title="Customer Satisfaction Impact" dropdown={false} className="w-full" />
            <p className='pb-1 border-b border-stroke rounded-sm'>Tags</p>
            <ul className='w-full'>
              {tags.map((item, index) => (
                <li className="flex items-center justify-between w-full text-heading font-medium pt-3" key={index}>
                  <p className='px-1 py-0.5 bg-primary/10'>{item.name}</p>
                  <div className="flex items-center justify-between max-w-20 xl:max-w-[60px] 2xl:max-w-[79px] w-full gap-2 ">
                    <p>{item.value} </p>
                    <p>{item.per}%</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${c_24} xl:col-span-2 flex flex-col`}>
            <CardTitle title="Trend" />
            {/* <BarChartY setData={chartInfo.mostFrequently} className='h-full min-h-[200px]' />
             */}
            <LineChart setData={chartInfo.trend} />

          </div>
        </div>

        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>All Used Tags</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Tag Name', "Total", 'TUE, 18 MAR', 'WED, 19 MAR', 'THU, 20 MAR', "FRI, 21 MAR", "SAT, 22 MAR"].map((item, index) => (
                    <th key={index} className={``}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {usedTags.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Alert dots text={item.status.name} variant={item.status.variant} className='min-w-[90px]' />
                    </td>
                    <td className='!font-medium !text-primary bg-[#F7F7F7]'>{item.total}</td>
                    <td>{item.tue}</td>
                    <td>{item.wed}</td>
                    <td className='!font-medium !text-heading'>{item.thu}</td>
                    <td>{item.fri}</td>
                    <td>{item.sat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MainInner>
    </>
  )
}
