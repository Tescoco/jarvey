import React from 'react'
import Top from '../../layouts/Top'
import MainInner from '../../components/MainInner'
import Dropdown from '../../components/Dropdown'
import InfoCard from '../../components/dashboard/InfoCard';
import { c_24, langList } from '../../utilities/Classes'
import CardTitle from '../../components/dashboard/CardTitle'
import LineChart from '../../components/dashboard/LineChart';
import MatrixChart from '../../components/dashboard/MatrixChart';
import BarChartY from '../../components/dashboard/BarChartY';
import DoughnutChart from '../../components/dashboard/DoughnutChart';
import TableFilter from '../../components/TableFilter';
import Alert from '../../components/Alert';
import Checkbox from '../../components/Checkbox';


export default function SystemIntegration() {
    const info = [
        {
            label: 'Total Integrations Monitored',
            marketValue: '15',
            marketVariant: 'success',
            title: '50,846',
        },
        {
            label: 'Successful vs. Failed Integrations',
            marketValue: '12',
            marketVariant: 'success',
            title: '300 / 400',
        },
        {
            label: 'Average Integration Response Time',
            marketValue: '12',
            marketVariant: 'success',
            title: '00:30:14',
        },
    ]

    const infoTwo = [
        {
            label: 'Error Resolution Rate',
            marketValue: '15',
            marketVariant: 'success',
            title: '85%',
        },
        {
            label: 'Average Fix Time',
            marketValue: '12',
            marketVariant: 'success',
            title: '10 min',
        },
    ]

    const chartInfo = {
        breakdownData: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Load Time',
                    data: [30, 28, 25, 26, 28, 30, 32, 35, 40, 42, 46, 38, 32],
                    borderColor: '#7855FF',
                    backgroundColor: '#7855FF',
                    tension: 0.5,
                    pointBackgroundColor: '#7855FF',
                    pointBorderColor: '#7855FF',
                    pointRadius: 4,
                },
                {
                    label: 'API Response',
                    data: [22, 25, 30, 26, 32, 35, 39, 36, 32, 38, 41, 49],
                    borderColor: '#FFC563',
                    backgroundColor: '#FFC563',
                    tension: 0.5,
                    pointBackgroundColor: '#FFC563',
                    pointBorderColor: '#FFC563',
                    pointRadius: 4,
                },
                {
                    label: 'Sync Errors',
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
        },
        mostFrequently: {
            labels: ["Stripe", "PayPal", "Square", "Adyen"],
            datasets: [
                {
                    label: "Stripe",
                    data: [94, 0, 0, 0],
                    backgroundColor: "#7856FF",
                    borderRadius: 40,
                    borderWidth: 0,
                    borderColor: '#7856FF',
                    maxBarThickness: 50,
                },
                {
                    label: "PayPal",
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
            legend: false,
        },
        ticketManagement: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Monthly Data',
                    data: [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 44, 48],
                    borderColor: '#176448',
                    backgroundColor: '#176448',
                    tension: 0.5,
                    pointBackgroundColor: '#176448',
                    pointBorderColor: '#176448',
                    pointRadius: 4,
                }
            ],
            legend: false,
            min: 0,
            max: 60,
            yPercent: true,
        },
    }

    const commonIntegration = [
        {
            id: 'INT-OO1',
            type: 'API Timeout',
            description: 'API request taking too long to respond',
            frequency: 'High',
            status: {
                name: 'In Progress',
                variant: 'success'
            }
        },
        {
            id: 'INT-OO2',
            type: 'Authentication Failure',
            description: 'Invalid API key or token expiration',
            frequency: 'High',
            status: {
                name: 'Resolved',
                variant: 'primary'
            }
        },
        {
            id: 'INT-OO3',
            type: 'Data Sync Error',
            description: 'Inconsistent or missing synced data',
            frequency: 'Medium',
            status: {
                name: 'In Progress',
                variant: 'success'
            }
        },
        {
            id: 'INT-OO4',
            type: 'Webhook Failure',
            description: 'Webhook not triggering expected events',
            frequency: 'Medium',
            status: {
                name: 'Pending',
                variant: 'warning'
            }
        },
        {
            id: 'INT-OO1',
            type: 'Rate Limit Exceeded',
            description: 'Too many API calls in a short time',
            frequency: 'Low',
            status: {
                name: 'Under Review',
                variant: 'warning'
            }
        },
    ]

    const highFailure = [
        {
            id: 'INT-OO1',
            type: 'API Timeout',
            name: 'Payment Gateway A',
            rating: '25',
            status: {
                name: 'Flagged',
                variant: 'danger'
            }
        },
        {
            id: 'INT-OO2',
            type: 'Authentication Failure',
            name: 'CRM System B',
            rating: '18',
            status: {
                name: 'Under Review',
                variant: 'warning'
            }
        },
        {
            id: 'INT-OO3',
            type: 'Data Sync Error',
            name: 'Shipping API C',
            rating: '22',
            status: {
                name: 'Flagged',
                variant: 'danger'
            }
        },
        {
            id: 'INT-OO4',
            type: 'Webhook Failure',
            name: 'Inventory Sync D',
            rating: '15',
            status: {
                name: 'Under Review',
                variant: 'warning'
            }
        },
        {
            id: 'INT-OO1',
            type: 'Rate Limit Exceeded',
            name: 'Messaging Service C',
            rating: '12',
            status: {
                name: 'Under Review',
                variant: 'warning'
            }
        },
    ]

    const automationSuccess = [
        {
            id: 'auto-OO1',
            type: 'API Timeout',
            name: 'Payment Gateway A',
            resolved: '25',
            intervention: '25',
            status: {
                name: 'Optimized',
                variant: 'success'
            }
        },
        {
            id: 'auto-OO2',
            type: 'Authentication Failure',
            name: 'CRM System B',
            resolved: '25',
            intervention: '25',
            status: {
                name: 'Needs Improvement',
                variant: 'warning'
            }
        },
        {
            id: 'auto-OO3',
            type: 'Data Sync Error',
            name: 'Shipping API C',
            resolved: '25',
            intervention: '25',
            status: {
                name: 'Optimized',
                variant: 'success'
            }
        },
        {
            id: 'auto-OO4',
            type: 'Webhook Failure',
            name: 'Inventory Sync D',
            resolved: '25',
            intervention: '25',
            status: {
                name: 'Needs Improvement',
                variant: 'warning'
            }
        },
        {
            id: 'auto-OO1',
            type: 'Rate Limit Exceeded',
            name: 'Messaging Service C',
            resolved: '25',
            intervention: '25',
            status: {
                name: 'Optimized',
                variant: 'success'
            }
        },
    ]

    const recommendations = [
        {
            title: 'Performance & Speed',
            items: [
                {
                    label: 'Optimize API Calls',
                    des: 'Reduce redundant requests and implement caching.',
                },
                {
                    label: 'Improve Load Times',
                    des: 'Compress images, minify code, and use CDNs.',
                },
                {
                    label: 'Database Indexing',
                    des: 'Ensure proper indexing for faster queries.',
                },
            ]
        },
        {
            title: 'System Reliability',
            items: [
                {
                    label: 'Implement Error Logging & Monitoring',
                    des: 'Track failures in real-time.',
                },
                {
                    label: 'Set Up Automated Backups',
                    des: 'Prevent data loss with scheduled backups.',
                },
                {
                    label: 'Improve Scalability',
                    des: 'Use load balancing and cloud auto-scaling.',
                },
            ]
        },
        {
            title: 'Security & Compliance',
            items: [
                {
                    label: 'Enforce Strong Authentication',
                    des: 'Require MFA and secure password policies.',
                },
                {
                    label: 'Ensure Compliance Standards',
                    des: 'Align with GDPR, PCI-DSS, etc.',
                },
            ]
        },
        {
            title: 'User Experience (UX) Improvements',
            items: [
                {
                    label: 'Simplify Navigation & Workflows',
                    des: 'Reduce clicks for key actions.',
                },
                {
                    label: 'Mobile Optimization',
                    des: 'Ensure seamless experience on all devices.',
                },
                {
                    label: 'Provide Clear Error Messages',
                    des: 'Guide users to resolve issues easily.',
                },
            ]
        },
        {
            title: 'Integration & Automation',
            items: [
                {
                    label: 'API Health Checks',
                    des: 'Monitor integration stability.',
                },
                {
                    label: 'Automate Repetitive Tasks',
                    des: 'Use Al and scripts to improve efficiency.',
                },
                {
                    label: 'Improve Data Syncing',
                    des: 'Ensure real-time updates across platforms.',
                },
            ]
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
                    <div className={`${c_24} xl:col-span-5 4xl:col-span-4`}>
                        <CardTitle title="Integration Status" />
                        <MatrixChart />
                    </div>
                    <div className={`${c_24} xl:col-span-7 4xl:col-span-8 flex flex-col`}>
                        <CardTitle title="Performance Trends" />
                        <LineChart setData={chartInfo.breakdownData} />
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6">
                    <div className={`${c_24} xl:col-span-6`}>
                        <CardTitle title="Ticket Management Error Rates" />
                        <LineChart setData={chartInfo.ticketManagement} />
                    </div>
                    <div className={`${c_24} xl:col-span-6 flex flex-col`}>
                        <CardTitle title="Performance Trends" />
                        <BarChartY setData={chartInfo.mostFrequently} />
                    </div>
                </div>

                <div className={`${c_24}`}>
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
                        <h4>Common Integration Failures</h4>
                        <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
                    </div>
                    <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
                        <table className="table">
                            <thead>
                                <tr>
                                    {['Issue ID', 'Issue Type', 'Description', 'Frequency', 'Status'].map((item, index) => (
                                        <th key={index}>{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {commonIntegration.map((item, index) => (
                                    <tr key={index}>
                                        <td className='!font-medium !text-heading'>{item.id}</td>
                                        <td>{item.type}</td>
                                        <td>{item.description}</td>
                                        <td className='!font-medium !text-heading'>{item.frequency}</td>
                                        <td><Alert text={item.status.name} variant={item.status.variant} className='min-w-[110px]' /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={`${c_24}`}>
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
                        <h4>High-Failure Integrations</h4>
                        <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
                    </div>
                    <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
                        <table className="table">
                            <thead>
                                <tr>
                                    {['Integration ID', 'Issue Type', 'Integration Name', 'Failure Rate (%)', 'Status'].map((item, index) => (
                                        <th key={index}>{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {highFailure.map((item, index) => (
                                    <tr key={index}>
                                        <td className='!font-medium !text-heading'>{item.id}</td>
                                        <td>{item.type}</td>
                                        <td>{item.name}</td>
                                        <td className='!font-medium !text-heading'>{item.rating}%</td>
                                        <td><Alert text={item.status.name} variant={item.status.variant} className='min-w-[110px]' /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6">
                    <div className={`${c_24} xl:col-span-8`}>
                        <CardTitle title="Recommendations for Reducing Disputes" dropdown={false} />
                        <div className="overflow-y-auto max-h-[255px]">
                            {recommendations.map((item, index) => (
                                <div key={index} className='flex flex-col gap-y-4 md:gap-y-5 mb-4 md:mb-5 last:mb-0'>
                                    <p className="font-semibold text-xs !leading-[1.7]">{item.title}</p>
                                    <div className="grid grid-cols-1 gap-y-3 md:gap-y-4">
                                        {item.items.map((list, i) => (
                                            <label key={i} htmlFor={item.title + (i + 1)} className="flex items-center gap-2 mb-0 cursor-pointer pb-3 md:pb-4 border-b border-solid border-stroke">
                                                <Checkbox type="checkbox" id={item.title + (i + 1)} />
                                                <span className='text-sm !leading-normal text-[#858585]'>
                                                    <span className='font-medium text-[#0A0D14]'>{list.label} - </span> {list.des}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`${c_24} xl:col-span-4 flex flex-col`}>
                        <div className="flex items-center gap-3 md:gap-4 flex-wrap h-full">
                            {infoTwo.map((item, index) => (
                                <InfoCard key={index} item={item} className='w-full h-[calc(50%-16px)] flex flex-col justify-between' />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`${c_24}`}>
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
                        <h4>Automation Success Rate in Resolving Integration Issues</h4>
                        <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
                    </div>
                    <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
                        <table className="table">
                            <thead>
                                <tr>
                                    {['Automation ID', 'Issue Type', 'Integration Name', 'Resolved by Automation (%)', 'Manual Intervention (%)', 'Status'].map((item, index) => (
                                        <th className={`${(index === 3 || index === 4) ? '!text-center' : ''}`} key={index}>{item}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {automationSuccess.map((item, index) => (
                                    <tr key={index}>
                                        <td className='!font-medium !text-heading'>{item.id}</td>
                                        <td>{item.type}</td>
                                        <td>{item.name}</td>
                                        <td className='!font-medium !text-heading !text-center'>{item.resolved}%</td>
                                        <td className='!font-medium !text-heading !text-center'>{item.intervention}%</td>
                                        <td><Alert text={item.status.name} variant={item.status.variant} className='min-w-[140px]' /></td>
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
