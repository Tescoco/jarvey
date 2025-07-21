import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function BarChart({ className = "h-[200px] md:h-[260px]", setData }) {
    const data = setData || {
        labels: ["Stripe", "PayPal", "Square", "Adyen"],
        datasets: [
            {
                label: "Monthly Data",
                data: [94, 80, 60, 40],
                backgroundColor: "#7856FF",
                borderRadius: 40,
                barThickness: 16,
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        responsive: true,
        aspectRatio: 3 / 1,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: setData ? setData.legend : false,
                labels: {
                    boxWidth: 6,
                    boxHeight: 6,
                    usePointStyle: true,
                    useBorderRadius: true,
                },
                title: {
                    color: '#0A0D14',
                    font: {
                        family: "'Inter',sans-serif",
                        size: 12,
                        weight: 'bolder'
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
                beginAtZero: true,
                max: 100,
                grid: {
                    color: '#E2E4E9',
                    tickWidth: 0,
                    borderDash: [5, 5],
                },
                ticks: {
                    stepSize: 20,
                    color: '#858585',
                    font: {
                        family: "'Inter',sans-serif",
                        size: 12,
                    },
                    callback: (value) => `${value}%`,
                },
                border: {
                    display: false
                },
            },
            y: {
                min: 0,
                max: setData ? setData.max : 60,
                grid: {
                    color: '#E2E4E9',
                    tickWidth: 0,
                    borderDash: [5, 5],
                },
                ticks: {
                    stepSize: 10,
                    color: '#858585',
                    font: {
                        family: "'Inter',sans-serif",
                        size: 12,
                    },
                },
                border: {
                    display: false
                },
            },
        },
    };

    return (
        <div className={`${className}`}>
            <Bar data={data} options={options} />
        </div>
    )
}