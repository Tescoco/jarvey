import React from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import Dropdown from '../../components/Dropdown'
import InfoCard from '../../components/dashboard/InfoCard';
import { c_24, langList } from '../../utilities/Classes'
import CardTitle from '../../components/dashboard/CardTitle'
import LineChart from '../../components/dashboard/LineChart';
import DoughnutChart from '../../components/dashboard/DoughnutChart';
import BarChart from '../../components/dashboard/BarChart';
import TableFilter from '../../components/TableFilter';
import Alert from '../../components/Alert';
import Checkbox from '../../components/Checkbox';


export default function DisputeManagement() {
  const info = [
    {
      label: 'Disputes Successfully',
      marketValue: '15',
      marketVariant: 'success',
      title: '50,846.90',
    },
    {
      label: 'Chargeback Prevention Rate',
      marketValue: '10',
      marketVariant: 'success',
      title: '90%',
    },
    {
      label: 'Total Refunds Issued',
      marketValue: '10',
      marketVariant: 'success',
      title: '10,724',
    },
    {
      label: 'Refund Metrics',
      marketValue: '12',
      marketVariant: 'success',
      title: '12,720',
    },
  ]

  const disputeChart = {
    disputeTrends: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Monthly Data',
          data: [-20, -25, -30, -28, -20, -10, 0, 10, 20, 18, 10, 0],
          borderColor: '#176448',
          backgroundColor: '#176448',
          tension: 0.5,
          pointBackgroundColor: '#176448',
          pointRadius: 4,
        }
      ],
      min: -80,
      max: 80,
      legend: false,
    },
    chargeBackSources: [
      {
        name: 'Customer Complaints',
        percent: 50,
        color: '#7855FF',
      },
      {
        name: 'Payment Issues',
        percent: 35,
        color: '#FFC563',
      },
      {
        name: 'Fraud',
        percent: 15,
        color: '#FE4234',
      },
    ],
    outcomes: [
      {
        name: 'Resolved',
        percent: 50,
        color: '#166448',
      },
      {
        name: 'In Progress',
        percent: 35,
        color: '#FFC563',
      },
      {
        name: 'Lost',
        percent: 15,
        color: '#FE4234',
      },
    ],
    AIAutomation: [
      {
        name: 'High Success',
        percent: 50,
        color: '#166448',
      },
      {
        name: 'Moderate Success',
        percent: 35,
        color: '#FFC563',
      },
      {
        name: 'Low Success',
        percent: 15,
        color: '#FE4234',
      },
    ],
    chartbackSuccess: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Chargeback Success",
          data: [40, 50, 38, 42, 33, 47, 39, 44, 37, 43, 31, 49],
          backgroundColor: "#7856FF",
          borderRadius: 40,
          borderSkipped: false,
          borderWidth: 0,
          maxBarThickness: 16,
        },
        {
          label: "Failure Rate",
          data: [30, 40, 28, 32, 23, 37, 29, 34, 27, 33, 21, 39],
          backgroundColor: "#FE4333",
          borderRadius: 40,
          borderSkipped: false,
          borderWidth: 0,
          maxBarThickness: 16,
        },
      ],
      max: 60,
      yPercent: false,
    },

  }

  const refunds = [
    {
      id: 'FR-OO1',
      description: 'Product not received',
      category: 'Shipping',
      frequency: 'High',
      status: {
        name: 'In Progress',
        variant: 'success'
      }
    },
    {
      id: 'FR-002',
      description: 'Defective/Damaged item',
      category: 'Quality Issue',
      frequency: 'High',
      status: {
        name: 'Resolved',
        variant: 'primary'
      }
    },
    {
      id: 'FR-OO3',
      description: 'Wrong item sent',
      category: 'Order Error',
      frequency: 'Medium',
      status: {
        name: 'In Progress',
        variant: 'success'
      }
    },
    {
      id: 'FR-OO4',
      description: 'Customer changed mind',
      category: `Buyer's Reason`,
      frequency: 'Medium',
      status: {
        name: 'Pending',
        variant: 'warning'
      }
    },
    {
      id: 'FR-OO5',
      description: 'Unauthorized transaction',
      category: 'Fraud',
      frequency: 'Low',
      status: {
        name: 'Under Review',
        variant: 'warning'
      }
    },
  ]
  const highRisk = [
    {
      id: 'C-OO1',
      name: 'Emily R.',
      chargebacks: '3',
      refunds: '6',
      transactions: '12',
      level: 'High',
      status: {
        name: 'Flagged',
        variant: 'danger'
      }
    },
    {
      id: 'C-OO2',
      name: 'John D.',
      chargebacks: '5',
      refunds: '8',
      transactions: '15',
      level: 'High',
      status: {
        name: 'Under Review',
        variant: 'warning'
      }
    },
    {
      id: 'C-OO3',
      name: 'Alex T.',
      chargebacks: '2',
      refunds: '5',
      transactions: '18',
      level: 'Medium',
      status: {
        name: 'Under Review',
        variant: 'warning'
      }
    },
    {
      id: 'C-OO4',
      name: 'Sarah M.',
      chargebacks: '1',
      refunds: '4',
      transactions: '20',
      level: 'Medium',
      status: {
        name: 'Under Review',
        variant: 'warning'
      }
    },
    {
      id: 'C-OO5',
      name: 'Mike L.',
      chargebacks: '0',
      refunds: '2',
      transactions: '25',
      level: 'Low',
      status: {
        name: 'Not Flagged',
        variant: 'primary'
      }
    },
  ]

  const recommendations = [
    {
      title: null,
      items: [
        {
          label: 'Clear Refund & Return Policy',
          des: 'Display policies prominently at checkout.',
        },
        {
          label: 'Order Confirmation & Tracking',
          des: 'Send real-time updates via email/SMS.',
        },
        {
          label: 'Fraud Detection System',
          des: 'Flag high-risk transactions before processing.',
        },
        {
          label: 'Product Quality Checks',
          des: 'Ensure accurate descriptions & images.',
        },
        {
          label: 'Transparent Pricing & Fees',
          des: 'Avoid hidden charges to prevent disputes.',
        },
      ]
    }
  ]

  return (
    <>
      <Top title="Dispute & Chargeback Management">
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
            <CardTitle title="Dispute Trends" />
            <LineChart setData={disputeChart.disputeTrends} />
          </div>
          <div className={`${c_24} xl:col-span-4 flex flex-col`}>
            <CardTitle title="Chargeback Sources" dropdown={false} />
            <DoughnutChart info={disputeChart.chargeBackSources} />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6">
          <div className={`${c_24} xl:col-span-4 flex flex-col`}>
            <CardTitle title="Dispute Outcomes" dropdown={false} />
            <DoughnutChart info={disputeChart.outcomes} />
          </div>
          <div className={`${c_24} xl:col-span-8`}>
            <CardTitle title="Chargeback Success vs. Failure Rate" />
            <BarChart setData={disputeChart.chartbackSuccess} />
          </div>
        </div>

        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>Most Common Reasons for Refunds / Chargebacks</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Reason ID', 'Description', 'Category', 'frequency', 'Status'].map((item, index) => (
                    <th key={index} className=''>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {refunds.map((item, index) => (
                  <tr key={index}>
                    <td className='!font-medium !text-heading'>{item.id}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td className='!font-medium !text-heading'>{item.frequency}</td>
                    <td><Alert text={item.status.name} variant={item.status.variant} className='min-w-[90px]' /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${c_24}`}>
          <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
            <h4>High-Risk Customers</h4>
            <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
            <table className="table">
              <thead>
                <tr>
                  {['Customer ID', 'Name/Alias', 'Chargebacks', 'Refunds', 'Total Transactions', 'Risk Level', 'Status'].map((item, index) => (
                    <th className={`${(index === 2 || index === 3 || index === 4) ? '!text-center' : ''}`} key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {highRisk.map((item, index) => (
                  <tr key={index}>
                    <td className='!font-medium !text-heading'>{item.id}</td>
                    <td>{item.name}</td>
                    <td className="!text-center">{item.chargebacks}</td>
                    <td className="!text-center">{item.refunds}</td>
                    <td className="!text-center">{item.transactions}</td>
                    <td className='!font-medium !text-heading'>{item.level}</td>
                    <td><Alert text={item.status.name} variant={item.status.variant} className='min-w-[90px]' /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 2xl:grid-cols-12 gap-4 md:gap-6">
          <div className={`${c_24} 2xl:col-span-8`}>
            <CardTitle title="Recommendations for Reducing Disputes" dropdown={false} />
            <div className="overflow-y-auto">
              {recommendations.map((item, index) => (
                <div className="grid grid-cols-1 gap-y-3 md:gap-y-4" key={index}>
                  {item.items.map((list, i) => (
                    <label key={i} htmlFor={`recommendations_${i + 1}`} className="flex items-center gap-2 mb-0 cursor-pointer pb-3 md:pb-4 border-b last:border-b-0 border-solid border-stroke">
                      <Checkbox type="checkbox" id={`recommendations_${i + 1}`} />
                      <span className='text-sm !leading-normal text-[#858585]'>
                        <span className='font-medium text-[#0A0D14]'>{list.label} - </span> {list.des}
                      </span>
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className={`${c_24} 2xl:col-span-4 flex flex-col`}>
            <CardTitle className="flex-wrap" title="AI / Automation Interventions" dropdown={false} />
            <DoughnutChart info={disputeChart.AIAutomation} rangeValue />
          </div>
        </div>

      </MainInner>
    </>
  )
}
