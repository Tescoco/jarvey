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


export default function General() {
    const info = [
        {
            label: 'Total Sales',
            marketValue: '12',
            marketVariant: 'success',
            title: '$50,846.90',
        },
        {
            label: 'Store Metrics',
            marketValue: '12',
            marketVariant: 'success',
            title: '19,720',
        },
        {
            label: 'FAQ Usage',
            marketValue: '10',
            marketVariant: 'danger',
            title: '10,720k',
        },
        {
            label: 'Deflected Ticket',
            marketValue: '12',
            marketVariant: 'success',
            title: '12,720k',
        },
        {
            label: 'Agents Ticket',
            marketValue: '09',
            marketVariant: 'success',
            title: '9,720k',
        },
        {
            label: 'Ticket Notes',
            marketValue: '15',
            marketVariant: 'success',
            title: '15,720k',
        },
    ]
    const generalChart = {
        customerSupport: [
            {
                name: 'Successful',
                percent: 75,
                color: '#166448',
            },
            {
                name: 'Pending',
                percent: 25,
                color: '#FFC563',
            },
        ],
        costSaving: [
            {
                name: 'Comparison of support',
                percent: 50,
                color: '#7855FF',
            },
            {
                name: 'Self-service savings',
                percent: 25,
                color: '#166448',
            },
        ],
        ticketTrends: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "Viewed Articles",
                    data: [40, 50, 38, 42, 33, 47, 39, 44, 37, 43, 31, 49],
                    backgroundColor: "#176448",
                    borderRadius: 40,
                    borderSkipped: false,
                    maxBarThickness: 14,
                },
                {
                    label: "Resolution",
                    data: [30, 50, 38, 42, 33, 47, 39, 44, 37, 43, 31, 49],
                    backgroundColor: "#DCE8E4",
                    borderRadius: 40,
                    borderSkipped: false,
                    maxBarThickness: 14,
                },
            ],
            legend: true,
            max: 60,
            yPercent: false,
        }
    }

    const storeTable = [
        {
            name: 'Store A',
            revenue: '120,000',
            orders: '3,500',
            avg: '34',
            rating: '4.8',
        },
        {
            name: 'Store B',
            revenue: '120,000',
            orders: '3,500',
            avg: '34',
            rating: '4.8',
        },
        {
            name: 'Store C',
            revenue: '120,000',
            orders: '3,500',
            avg: '34',
            rating: '4.8',
        },
        {
            name: 'Store D',
            revenue: '120,000',
            orders: '3,500',
            avg: '34',
            rating: '4.8',
        },
        {
            name: 'Store E',
            revenue: '120,000',
            orders: '3,500',
            avg: '34',
            rating: '4.8',
        },
    ]

    const requestsTable = [
        {
            id: 'FR-OO1',
            feature: 'Dark Mode',
            description: 'Add a dark theme for better UX',
            priority: 'High',
            status: {
                name: 'Planned',
                variant: 'warning'
            }
        },
        {
            id: 'FR-002',
            feature: 'Faster Checkout',
            description: 'Reduce steps in the checkout flow',
            priority: 'High',
            status: {
                name: 'In Progress',
                variant: 'success'
            }
        },
        {
            id: 'FR-OO3',
            feature: 'Multi-Language Support',
            description: 'Support for multiple languages',
            priority: 'Medium',
            status: {
                name: 'Planned',
                variant: 'warning'
            }
        },
        {
            id: 'FR-OO4',
            feature: 'Advanced Search Filters',
            description: 'More filter options for products',
            priority: 'High',
            status: {
                name: 'Completed',
                variant: 'primary'
            }
        },
        {
            id: 'FR-OO5',
            feature: 'Loyalty Rewards Program',
            description: 'Points-based rewards for purchases',
            priority: 'Medium',
            status: {
                name: 'Planned',
                variant: 'warning'
            }
        },
        {
            id: 'FR-OO5',
            feature: 'Dark Mode',
            description: 'Add a dark theme for better UX',
            priority: 'High',
            status: {
                name: 'Planned',
                variant: 'warning'
            }
        },
    ]

    const messagesTable = [
        {
            name: 'Without macro',
            total: '5',
            percentage: '50%',
            data: '100%'
        },
        {
            name: 'Order Change/Cancel: Already Shipped',
            total: '1',
            percentage: '10%',
            data: '100%'
        },
        {
            name: 'Return & Exchange: Damaged Items',
            total: '3',
            percentage: '30%',
            data: '100%'
        },
        {
            name: 'Order Status: Not shipped - still in processing window',
            total: '1',
            percentage: '10%',
            data: '100%'
        },
        {
            name: 'Generic: Sign off',
            total: '2',
            percentage: '20%',
            data: '100%'
        },
        {
            name: 'Generic: How can I help?',
            total: '1',
            percentage: '10%',
            data: '100%'
        },
    ]

    return (
        <>
            <Top title="General Overview">
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
                        <CardTitle title="Performance Overview" />
                        <LineChart setData={''} />
                    </div>
                    <div className={`${c_24} xl:col-span-4 flex flex-col`}>
                        <CardTitle title="Customer Support" dropdown={false} />
                        <DoughnutChart info={generalChart.customerSupport} />
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6">
                    <div className={`${c_24} xl:col-span-4 flex flex-col`}>
                        <CardTitle title="Cost Savings Metrics" dropdown={false} />
                        <DoughnutChart info={generalChart.costSaving} />
                    </div>
                    <div className={`${c_24} xl:col-span-8`}>
                        <CardTitle title="Knowledge Base Performance" />
                        <BarChart setData={generalChart.ticketTrends} />
                    </div>
                </div>

                <div className={`${c_24}`}>
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
                        <h4>Store Ranking</h4>
                        <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
                    </div>
                    <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
                        <table className="table">
                            <thead>
                                <tr>
                                    {['Rank', 'Store Name', 'Revenue ($)', 'Orders', 'Avg. Order Value ($)', 'Customer Rating'].map((item, index) => (
                                        <th key={index} className={`${item === 'Avg. Order Value ($)' || item === 'Customer Rating' ? '!text-center' : ''}`}>{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {storeTable.map((item, index) => (
                                    <tr key={index}>
                                        <td className='!font-medium !text-heading'>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.revenue}</td>
                                        <td>{item.orders}</td>
                                        <td className='text-center'>{item.avg}</td>
                                        <td className='text-center'>{item.rating}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={`${c_24}`}>
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
                        <h4>Feature Requests Customer</h4>
                        <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
                    </div>
                    <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
                        <table className="table">
                            <thead>
                                <tr>
                                    {['Request ID', 'Feature Requested', 'Description', 'Priority', 'Status'].map((item, index) => (
                                        <th key={index}>{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {requestsTable.map((item, index) => (
                                    <tr key={index}>
                                        <td className='!font-medium !text-heading'>{item.id}</td>
                                        <td>{item.feature}</td>
                                        <td>{item.description}</td>
                                        <td className='!font-medium !text-heading'>{item.priority}</td>
                                        <td><Alert text={item.status.name} variant={item.status.variant} className='min-w-[90px]' /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={`${c_24}`}>
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
                        <h4>Messages Sent Per Macro</h4>
                        <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
                    </div>
                    <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
                        <table className="table">
                            <thead>
                                <tr>
                                    {['Macro', 'Total', 'Percentage', 'Delta',].map((item, index) => (
                                        <th className={`${index != 0 && index != 3 ? '!text-center' : ''}`} key={index}>{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {messagesTable.map((item, index) => (
                                    <tr key={index}>
                                        <td className='!font-medium !text-heading' width={600}>{item.name}</td>
                                        <td className='!font-medium !text-heading !text-center'>{item.total}</td>
                                        <td className='!text-center'>{item.percentage}</td>
                                        <td>
                                            <div className="flex items-center gap-2">
                                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.29102 7.70841L9.32082 3.67859C9.9717 3.02771 11.027 3.02771 11.6778 3.67858L15.7077 7.70841M10.4993 3.95841V16.8751" stroke="#111111" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className='font-medium'>{item.data}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </MainInner >
        </>
    )
}
