import React from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import Dropdown from '../../components/Dropdown'
import InfoCard from '../../components/dashboard/InfoCard';
import { c_24, langList } from '../../utilities/Classes'
import CardTitle from '../../components/dashboard/CardTitle'
import LineChart from '../../components/dashboard/LineChart';
import BarChart from '../../components/dashboard/BarChart';
import DoughnutChart from '../../components/dashboard/DoughnutChart';
import TableFilter from '../../components/TableFilter';
import Alert from '../../components/Alert';
import BarChartY from '../../components/dashboard/BarChartY';
import Checkbox from '../../components/Checkbox';

export default function AIBotPerformance() {
  const info = [
    {
      label: 'Total Bot Interactions',
      marketValue: '15',
      marketVariant: 'success',
      title: '50,846',
    },
    {
      label: 'Bot Resolution Rate ',
      marketValue: '12',
      marketVariant: 'success',
      title: '90%',
    },
    {
      label: 'Bot Handoff Rate',
      marketValue: '12',
      marketVariant: 'success',
      title: '60%',
    },
    {
      label: 'Customer Satisfaction Score',
      marketValue: '12',
      marketVariant: 'success',
      title: '4/5',
    },
  ]
  const info2 = [
    {
      label: 'Achievement Rate',
      marketValue: '15',
      marketVariant: 'success',
      title: '60%',
    },
    {
      label: 'Tickets with Breached SLAs ',
      marketValue: '10',
      marketVariant: 'danger',
      title: '-20%',
    },
  ]
  const info3 = [
    {
      label: 'Cost Saved',
      marketValue: '12',
      marketVariant: 'success',
      title: '$234',
    },
    {
      label: 'Overall Time Saved by AI Agent ',
      marketValue: '12',
      marketVariant: 'success',
      title: 'Overall Time Saved by AI Agent',
    },
    {
      label: 'Decrease in Resolution Time',
      marketValue: '09',
      marketVariant: 'success',
      title: '24d 14h',
    },
    {
      label: 'Decrease in First Response Time ',
      marketValue: '15',
      marketVariant: 'success',
      title: '1d 17h',
    },
  ]

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
    customer: [
      {
        name: 'AI Responses',
        percent: 75,
        color: '#166448',
      },
      {
        name: 'Agent Responses',
        percent: 25,
        color: '#FFC563',
      },
    ],
    handoff: {
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

    mostCommon: {
      labels: ["FAQs", "Order", "Sales", "Refund"],
      datasets: [
        {
          data: [94, 80, 65, 50],
          backgroundColor: [
            "#7855FF",
            "#166448",
            "#FFC563",
            "#0A0C14",
          ],
          borderRadius: 40,
          borderWidth: 0,
          borderColor: '#7856FF',
          maxBarThickness: 24,
        },
      ],
      legend: false,
    },
    topHandOff: {
      labels: ["Complexity", "Customer Request", "AI Confidence Level", "Escalated Cases"],
      datasets: [
        {
          data: [94, 80, 65, 50],
          backgroundColor: [
            "#7855FF",
            "#166448",
            "#FFC563",
            "#0A0C14",
          ],
          borderRadius: 40,
          borderWidth: 0,
          borderColor: '#7856FF',
          maxBarThickness: 24,
        },
      ],
      legend: false,
    },
    automatedInteraction: {
      labels: ["AI Agent", "Flows", "Article Recommendation", "Track Order", "Return Order", "Report Order Issue"],
      datasets: [
        {
          label: "AI Agent",
          data: [94, 88, 80, 75, 70, 60],
          backgroundColor: ["#8366FF", "#166448", "#0A0C14", "#FFC563", "#FE4234", "#858585"],
          borderRadius: 40,
          borderWidth: 0,
          borderColor: '#7856FF',
          BarThickness: 50,
        },
      ],
      legend: false,
    },
    resolution: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Resolution',
          data: [32, 30, 29, 29, 32, 36, 41, 46, 49, 47, 42, 35],
          borderColor: '#7856FF',
          backgroundColor: '#7856FF',
          tension: 0.5,
          pointBackgroundColor: '#7856FF',
          pointBorderColor: '#7856FF',
          pointRadius: 4,
        },
        {
          label: 'Escalated Cases',
          data: [18, 16, 15, 15, 16, 18, 20, 22, 24, 25, 26, 26],
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
    interaction: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: '',
          data: [32, 30, 29, 29, 32, 36, 41, 46, 49, 47, 42, 35],
          borderColor: '#176448',
          backgroundColor: '#176448',
          tension: 0.5,
          pointBackgroundColor: '#176448',
          pointBorderColor: '#176448',
          pointRadius: 4,
        },
      ],
      min: 0,
      max: 60,
      legend: false,
    },
    time: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'AI',
          data: [32, 30, 29, 29, 32, 36, 41, 46, 49, 47, 42, 35],
          borderColor: '#7856FF',
          backgroundColor: '#7856FF',
          tension: 0.5,
          pointBackgroundColor: '#7856FF',
          pointBorderColor: '#7856FF',
          pointRadius: 4,
        },
        {
          label: 'Human Agents',
          data: [22, 26, 30, 34, 38, 41, 42, 40, 39, 39, 43, 48],
          borderColor: '#176448',
          backgroundColor: '#176448',
          tension: 0.5,
          pointBackgroundColor: '#176448',
          pointBorderColor: '#176448',
          pointRadius: 4,
        },
      ],

      min: 0,
      max: 60,
      legend: true,
    },
    created: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Created Tickets',
          data: [32, 30, 29, 29, 32, 36, 41, 46, 49, 47, 42, 35],
          borderColor: '#7856FF',
          backgroundColor: '#7856FF',
          tension: 0.5,
          pointBackgroundColor: '#7856FF',
          pointBorderColor: '#7856FF',
          pointRadius: 4,
        },
        {
          label: 'Closed Tickets',
          data: [22, 26, 30, 34, 38, 41, 42, 40, 39, 39, 43, 48],
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
    chartbackSuccess: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Achieved",
          data: [40, 50, 38, 42, 33, 47, 39, 44, 37, 43, 31, 49],
          backgroundColor: "#7856FF",
          borderRadius: 40,
          borderSkipped: false,
          borderWidth: 0,
          maxBarThickness: 20,
        },
        {
          label: "Breached",
          data: [30, 40, 28, 32, 23, 37, 29, 34, 27, 33, 21, 39],
          backgroundColor: "#FFC563",
          borderRadius: 40,
          borderSkipped: false,
          borderWidth: 0,
          maxBarThickness: 20,
        },
      ],
      max: 60,
      yPercent: false,
    },
    automated: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Monthly Data",
          data: [40, 50, 38, 42, 33, 47, 39, 44, 37, 43, 31, 49],
          backgroundColor: "#176448",
          borderRadius: 40,
          borderSkipped: false,
          borderWidth: 0,
          borderColor: '#176448',
          maxBarThickness: 25,
        }
      ],
      max: 60,
      legend: false,
      yPercent: true,
    },
  }

  const botTraining = [
    {
      id: 'AI-OOI',
      struggle: 'Complex Queries',
      description: 'Difficulty understanding multi-part questions',
      suggested: 'Improve NLP & Context Retention',
      priority: 'High',
    },
    {
      id: 'AI-002',
      struggle: 'Sentiment Detection',
      description: 'Misinterprets sarcasm or emotions',
      suggested: 'Enhance Sentiment Analysis Model',
      priority: 'High',
    },
    {
      id: 'AI-003',
      struggle: 'Industry-Specific Terms',
      description: 'Industry-Specific Terms',
      suggested: 'Train on Specialized Datasets',
      priority: 'Medium',
    },
    {
      id: 'AI-004',
      struggle: 'Multi-Language Support',
      description: 'Inaccurate responses in some languages',
      suggested: 'Expand Language Training Set',
      priority: 'Medium',
    },
    {
      id: 'AI-005',
      struggle: 'Handling Ambiguity',
      description: 'Needs clarification for vague queries',
      suggested: 'Implement Smart Follow-Ups',
      priority: 'High',
    },
  ]
  const allUsed = [
    {
      value: 'Close',
      total: '1',
      li1: '-',
      li2: '-',
      li3: '-',
      li4: '-',
      li5: '-',
    },
    {
      value: 'Handover',
      total: '1',
      li1: '-',
      li2: '-',
      li3: '-',
      li4: '-',
      li5: '-',
    },
    {
      value: 'Close',
      total: '1',
      li1: '-',
      li2: '-',
      li3: '-',
      li4: '-',
      li5: '-',
    },
  ]
  const flows = [
    {
      flow: 'Shelf life information',
      drop: '0',
      rate: '100',
      automated: '2',
      served: '0',
    },
    {
      flow: 'Shipping policy',
      drop: '1',
      rate: '80',
      automated: '4',
      served: '0',
    },
    {
      flow: 'Shelf life information',
      drop: '0',
      rate: '0',
      automated: '2',
      served: '1',
    },
  ]

  const agentPerformance = [
    {
      name: 'AI Agent Bot',
      closed: '1',
      ofClosed: '100',
      average: '-',
      replied: '1',
      massage: '1',
      firstResponseTime: '11s',
      resolutionTime: '-',
      oneTouchTickets: '-',
      onlineTime: '-',
      messagesSentPerHour: '-',
      ticketsRepliedPerHour: '-',
      closedTicketsPerHour: '-',
      ticketHandleTime: '-',
      zeroTouchTickets: '1'
    },
    {
      name: 'AI Agent Bot',
      closed: '1',
      ofClosed: '100',
      average: '-',
      replied: '1',
      massage: '1',
      firstResponseTime: '11s',
      resolutionTime: '-',
      oneTouchTickets: '-',
      onlineTime: '-',
      messagesSentPerHour: '-',
      ticketsRepliedPerHour: '-',
      closedTicketsPerHour: '-',
      ticketHandleTime: '-',
      zeroTouchTickets: '1'
    },
    {
      name: 'AI Agent Bot',
      closed: '1',
      ofClosed: '100',
      average: '-',
      replied: '1',
      massage: '1',
      firstResponseTime: '11s',
      resolutionTime: '-',
      oneTouchTickets: '-',
      onlineTime: '-',
      messagesSentPerHour: '-',
      ticketsRepliedPerHour: '-',
      closedTicketsPerHour: '-',
      ticketHandleTime: '-',
      zeroTouchTickets: '1'
    },
  ];

  const recommendations = [
    {
      items: [
        {
          label: 'Article Recommendation Performance',
          des: 'There is no data for this period.',
        },
        {
          label: 'There is no data for this period.',
          des: 'There is no data for this period.',
        },
        {
          label: 'Products with most issues and return requests',
          des: 'There is no data for this period.',
        },
      ]
    }
  ]
  return (
    <>
      <Top title="AI Bot Performance">
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

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
          <div className={`${c_24} `}>
            <CardTitle title="Time Saved by AI vs. Human Agents" />
            <LineChart setData={customerSupport.resolution} />
          </div>
          <div className={`${c_24} flex flex-col`}>
            <CardTitle title="Most Common Bot-Handled Queries" />
            <BarChartY setData={customerSupport.mostCommon} />
          </div>
          <div className={`${c_24} flex flex-col`}>
            <CardTitle title="Top Reasons for Handoff" />
            <BarChartY setData={customerSupport.topHandOff} />
          </div>
          <div className={`${c_24} `}>
            <CardTitle title="Time Saved by AI vs. Human Agents" />
            <LineChart setData={customerSupport.time} />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6">
          <div className={`${c_24} xl:col-span-8`}>
            <CardTitle title="Handoff Trends Over Time" />
            <LineChart setData={customerSupport.handoff} />
          </div>
          <div className={`${c_24} xl:col-span-4 flex flex-col`}>
            <CardTitle title="Customer Sentiment Analysis" dropdown={false} />
            <DoughnutChart info={customerSupport.customer} />
          </div>
        </div>

        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Bot Training Recommendations</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Issue ID', 'Struggle Area', 'Description', 'Suggested Improvement', 'Priority'].map((item, index) => (
                    <th key={index} >{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {botTraining.map((item, index) => (
                  <tr key={index}>
                    <td className='!font-medium !text-heading'>{item.id}</td>
                    <td>{item.struggle}</td>
                    <td>{item.description}</td>
                    <td>{item.suggested}</td>
                    <td className='!font-medium !text-heading'>{item.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {info2.map((item, index) => (
            <InfoCard key={index} item={item} className='' />
          ))}
        </div>

        <div className={`${c_24}`}>
          <CardTitle title="Achieved and Breached Tickets" />
          <BarChart setData={customerSupport.chartbackSuccess} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {info3.map((item, index) => (
            <InfoCard key={index} item={item} className='' />
          ))}
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
          <div className={`${c_24} `}>
            <CardTitle title="Automated Interactions" />
            <LineChart setData={customerSupport.interaction} />
          </div>
          <div className={`${c_24} flex flex-col`}>
            <CardTitle title="Automated Interactions by Feature" />
            <BarChartY setData={customerSupport.automatedInteraction} />
          </div>
        </div>

        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Agent Performance</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead className="bg-gray-50">
                <tr>
                  {['Agent', 'Closed Tickets', '% Of Closed Tickets', 'Average Csat', 'Tickets Replied', 'Messages Sent', "First Response Time", "Resolution Time", "One Touch Tickets", "Online Time", "Messages Sent Per Hour", "Tickets Replied Per Hour", "Closed Tickets Per Hour", "Ticket Handle Time", "Zero Touch Tickets"].map((item, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-nowrap uppercase tracking-wider"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {agentPerformance.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="size-8 flex items-center justify-center text-xs text-white rounded-full bg-[#F58D86]">
                          AA
                        </div>
                        <h6 className="text-sm font-medium">{item.name}</h6>
                      </div>
                    </td>
                    <td className="px-6 py-4 !text-[#7856FF] font-medium">{item.closed}</td>
                    <td className="px-6 py-4 !text-[#7856FF]">{item.ofClosed}%</td>
                    <td className="px-6 py-4">{item.average}</td>
                    <td className="px-6 py-4 !text-[#7856FF] font-medium">{item.replied}</td>
                    <td className="px-6 py-4 !text-[#7856FF] font-medium">{item.massage}</td>
                    <td className="px-6 py-4 !text-heading font-semibold">{item.firstResponseTime}</td>
                    <td className="px-6 py-4">{item.resolutionTime}</td>
                    <td className="px-6 py-4">{item.oneTouchTickets}</td>
                    <td className="px-6 py-4">{item.onlineTime}</td>
                    <td className="px-6 py-4">{item.messagesSentPerHour}</td>
                    <td className="px-6 py-4">{item.ticketsRepliedPerHour}</td>
                    <td className="px-6 py-4">{item.closedTicketsPerHour}</td>
                    <td className="px-6 py-4">{item.ticketHandleTime}</td>
                    <td className="px-6 py-4 !text-[#7856FF]">{item.zeroTouchTickets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${c_24}`}>
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h4 className=''>Ticket insights</h4>
            <Dropdown className='mb-0 !hidden md:!flex' dropDownClass='!left-auto right-0' btnClass="!min-w-[108px] !h-9" placeholder="AI Intents" items={[
              { name: 'AI Intents 1' },
              { name: 'AI Intents 2' },
              { name: 'AI Intents 3' },
            ]} />
          </div>
          <div className={`grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6`}>
            <div className={`${c_24} bg-[#F7F7F7] border-0 `}>
              <CardTitle title="Top Used Values" dropdown={false} className="w-full" />
              <ul className='w-full'>
                <li className="text-xs flex items-center justify-between w-full text-heading font-medium pt-3" >
                  <p className='px-1 py-0.5 bg-primary/10'>Close {">"} Without message</p>
                  <p>1</p>
                </li>
                <li className="text-xs flex items-center justify-between w-full text-heading font-medium pt-3" >
                  <p className='px-1 py-0.5 bg-primary/10'>Handover {">"} With message</p>
                  <p>1</p>
                </li>
              </ul>
              <p className='pt-3 textxs mt-3 border-t border-stroke rounded-sm flex justify-between text-heading font-medium'>
                <span>Total</span>
                <span>2</span>
              </p>
            </div>
            <div className={`${c_24} bg-[#F7F7F7] border-0 xl:col-span-2`}>
              <CardTitle title="Created vs. Closed Tickets" />
              <LineChart setData={customerSupport.created} />
            </div>
          </div>
        </div>

        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>All Used Values</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Value / Category', 'Total', '23 DEC - 29 DEC', '30 DEC - 5 JAN', '6 JAN - 12 JAN', "13 JAN - 19 JAN", "20 JAN - 26 JAN"].map((item, index) => (
                    <th key={index} >{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allUsed.map((item, index) => (
                  <tr key={index}>
                    <td className='!font-medium !text-heading'>{item.value}</td>
                    <td className='!text-primary !font-medium bg-[#F7F7F7]'>{item.total}</td>
                    <td className='!font-medium !text-heading'>{item.li1}</td>
                    <td className='!font-medium !text-heading'>{item.li2}</td>
                    <td className='!font-medium !text-heading'>{item.li3}</td>
                    <td className='!font-medium !text-heading'>{item.li4}</td>
                    <td className='!font-medium !text-heading'>{item.li5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${c_24}`}>
          <CardTitle title="Automated Interactions Over Time" />
          <BarChart setData={customerSupport.automated} />
        </div>

        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Flows Performance</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' csv />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Flows Performance', 'Drop Off', 'Automation Rate', 'Automated By Flow', 'Served By An Agent After Flow'].map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {flows.map((item, index) => (
                  <tr key={index}>
                    <td className='!font-medium !text-heading'>{item.flow}</td>
                    <td className='!text-heading !font-medium'>{item.drop}</td>
                    <td className='!font-medium !text-heading'>
                      <div className="flex items-center gap-3">
                        {item.rate}%
                        <span className='text-primary font-medium'>Analyze Flow</span>
                      </div>
                    </td>
                    <td className='!font-medium !text-heading'>{item.automated}</td>
                    <td className='!font-medium !text-heading'>{item.served}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${c_24}`}>
          <div className="overflow-y-auto">
            {recommendations.map((item, index) => (
              <div className="grid grid-cols-1 gap-y-3 md:gap-y-4" key={index}>
                {item.items.map((list, i) => (
                  <label key={i} htmlFor={`recommendations_${i + 1}`} className="flex items-center gap-2 mb-0 cursor-pointer pb-3 md:pb-4 last:p-0 border-b last:border-b-0 border-solid border-stroke">
                    <Checkbox className='mb-0' type="checkbox" id={`recommendations_${i + 1}`} checked={i === 2 && true} />
                    <span className='text-sm !leading-normal text-[#858585]'>
                      <span className='font-medium text-[#0A0D14]'>{list.label} - </span> {list.des}
                    </span>
                  </label>
                ))}
              </div>
            ))}
          </div>
        </div>

      </MainInner>
    </>
  )
}
