import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import CardTitle from './CardTitle';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ className = "", DoughnutClass = "size-[180px]", info = [] }) {
    const tokenData = info;
    const data = {
        labels: tokenData.map((item) => item.name),
        datasets: [
            {
                label: 'Value',
                data: tokenData.map((item) => item.percent),
                backgroundColor: tokenData.map((item) => item.color),
                borderColor: '#CDEEFF',
                borderWidth: 0,
                hoverOffset: 0,
                borderRadius: 0,
                cutout: 64,
            },
        ],
    };

    const options = {
        responsive: true,
        aspectRatio: 1,
        offset: -1,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
                displayColors: false,
            }
        },
    };

    return (
        <div className={`${className}`} >
            <div className={`${DoughnutClass} mx-auto rotate-180 relative`} >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-180 flex flex-col mb-0.5 text-center">
                    <span className='font-inter font-normal text-xs text-[#858585]'>Total</span>
                    <span className='font-inter font-semibold text-base text-heading'>{tokenData.reduce((total, item) => total + item.percent, 0)}%</span>
                </div>
                <Doughnut data={data} options={options} />
            </div>
            <div className="flex flex-col gap-2 mt-4 md:mt-5 lg:mt-6">
                {tokenData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between gap-2 flex-wrap text-xs text-[#0A0D14] font-medium">
                        <span className='flex items-center gap-1'>
                            <span className='size-2 rounded-full' style={{ backgroundColor: item.color }} />
                            <span>{item.name}</span>
                        </span>
                        <span>{item.percent}%</span>
                    </div>
                ))}
            </div>
        </div >
    );
}
