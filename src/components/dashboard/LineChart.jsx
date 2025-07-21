import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function LineChart({ className = "h-[200px] md:h-[260px]", setData }) {
    const data = setData ||
    {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Monthly Data',
                data: [-20, -25, -30, -28, -20, -10, 0, 10, 20, 18, 10, 0],
                borderColor: '#7856FF',
                backgroundColor: '#7856FF',
                tension: 0.5,
                pointBackgroundColor: '#7856FF',
                pointRadius: 4,
            }
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: 0,
        },
        plugins: {
            legend: {
                display: setData ? setData.legend : false,
                labels: {
                    boxWidth: 6,
                    boxHeight: 6,
                    usePointStyle: true,
                },
                title: {
                    color: '#0A0D14',
                    font: {
                        family: "'Inter',sans-serif",
                        size: 12,
                        weight: 'bold'
                    },
                    padding:{
                        top:1000,
                    }
                }
            },
            tooltip: {
                enabled: true,
                displayColors: false,
                position: 'nearest',
                backgroundColor: '#fff',
                bodyColor: '#0A0D14',
                titleColor: '#0A0D14',
                usePointStyle: true,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.07)'
            },
        },
        scales: {
            x: {
                grid: {
                    color: '#E2E4E9',
                    tickWidth: 0,
                },
                ticks: {
                    color: '#858585',
                    font: {
                        family: "'Inter',sans-serif",
                        size: 12,
                        weight: 'normal'
                    },
                },
                border: {
                    display: false
                }
            },
            y: {
                min: setData ? setData.min : -80,
                max: setData ? setData.max : 80,
                grid: {
                    color: '#E2E4E9',
                    tickWidth: 0
                },
                ticks: {
                    color: '#858585',
                    font: {
                        family: "'Inter',sans-serif",
                        size: 12,
                        weight: 'normal'
                    },
                    callback: function (value) {
                        return setData.yPercent ? `${value}%` : value;
                    }
                },
                border: {
                    display: false
                }
            },
        },
    };

    return (
        <div className={`${className}`}>
            <Line data={data} options={options} />
        </div>
    )
}
