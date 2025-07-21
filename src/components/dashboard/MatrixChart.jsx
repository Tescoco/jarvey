// MatrixChart.js
import { Chart as ChartJS, Tooltip, Legend, LinearScale, Title } from 'chart.js'
import { Chart } from 'react-chartjs-2'
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix'


const backgroundColorPlugin = {
    id: 'backgroundColor',
    beforeDraw: (chart) => {
        const { ctx, chartArea } = chart;
        if (!chartArea) return;
        ctx.save();
        ctx.fillStyle = 'transparent';
        ctx.fillRect(
            chartArea.left,
            chartArea.top,
            chartArea.right - chartArea.left,
            chartArea.bottom - chartArea.top
        );
        ctx.restore();
    }
};

ChartJS.register(MatrixController, MatrixElement, LinearScale, Tooltip, Legend, Title, backgroundColorPlugin);

export default function MatrixChart({ className = "h-[260px]", setData = "" }) {
    const matrixWidth = ({ chart }) => (chart.chartArea || {}).width / 7.3;
    const matrixHeight = ({ chart }) => (chart.chartArea || {}).height / 6.5;

    const data = setData || {
        datasets: [
            {
                label: "Live",
                data: [
                    { x: "Sat", y: 40, v: 40 },
                    { x: "Sun", y: 10, v: 10 },
                    { x: "Sun", y: 30, v: 10 },
                    { x: "Mon", y: 30, v: 30 },
                    { x: "Mon", y: 50, v: 30 },
                    { x: "Tue", y: 10, v: 10 },
                    { x: "Tue", y: 60, v: 10 },
                    { x: "Wed", y: 40, v: 40 },
                    { x: "Thu", y: 50, v: 50 },
                    { x: "Thu", y: 10, v: 50 },
                    { x: "Fri", y: 20, v: 20 },
                    { x: "Fri", y: 40, v: 20 },
                ],
                backgroundColor: '#7856FF',
                borderColor: '#fff',
                borderWidth: 0,
                width: matrixWidth,
                height: matrixHeight,
                borderRadius: 2,
            },
            {
                label: "Inactive",
                data: [
                    { x: "Sat", y: 10, v: 10 },
                    { x: "Sat", y: 60, v: 10 },
                    { x: "Sun", y: 40, v: 40 },
                    { x: "Sun", y: 20, v: 40 },
                    { x: "Mon", y: 60, v: 20 },
                    { x: "Mon", y: 20, v: 20 },
                    { x: "Tue", y: 40, v: 50 },
                    { x: "Tue", y: 50, v: 50 },
                    { x: "Wed", y: 60, v: 30 },
                    { x: "Wed", y: 20, v: 30 },
                    { x: "Thu", y: 40, v: 40 },
                    { x: "Fri", y: 30, v: 50 },
                    { x: "Fri", y: 50, v: 50 },
                ],
                backgroundColor: '#AE9AFF',
                borderColor: '#fff',
                borderWidth: 0,
                width: matrixWidth,
                height: matrixHeight,
                borderRadius: 2,
            },
            {
                label: "Failed",
                data: [
                    { x: "Sat", y: 30, v: 40 },
                    { x: "Sat", y: 50, v: 40 },
                    { x: "Sat", y: 20, v: 40 },
                    { x: "Sun", y: 50, v: 30 },
                    { x: "Sun", y: 60, v: 30 },
                    { x: "Mon", y: 10, v: 20 },
                    { x: "Mon", y: 40, v: 20 },
                    { x: "Tue", y: 20, v: 50 },
                    { x: "Tue", y: 10, v: 50 },
                    { x: "Wed", y: 30, v: 30 },
                    { x: "Wed", y: 10, v: 30 },
                    { x: "Wed", y: 50, v: 30 },
                    { x: "Thu", y: 20, v: 40 },
                    { x: "Thu", y: 30, v: 40 },
                    { x: "Thu", y: 60, v: 40 },
                    { x: "Fri", y: 60, v: 50 },
                    { x: "Fri", y: 10, v: 50 },
                ],
                backgroundColor: '#E5DDFF',
                borderColor: '#fff',
                borderWidth: 0,
                width: matrixWidth,
                height: matrixHeight,
                borderRadius: 2,
            },
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
                display: setData ? setData.legend : true,
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
                borderColor: 'rgba(0,0,0,0.07)',
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label || 'Value'}: ${context.raw.v}`;
                    }
                }
            },
        },
        scales: {
            x: {
                type: "category",
                offset: true,
                reverse: false,
                grid: {
                    color: '#E2E4E9',
                    tickWidth: 0,
                    display: false,
                },
                ticks: {
                    color: '#858585',
                    font: {
                        family: "'Inter',sans-serif",
                        size: 12,
                    },
                },
                border: {
                    display: false
                }
            },
            y: {
                type: "linear",
                min: 10,
                max: setData ? setData.max : 60,
                offset: true,
                reverse: false,
                grid: {
                    color: '#E2E4E9',
                    tickWidth: 0,
                    display: false,
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
                }
            },
        },
    };

    return (
        <div className={`${className}`}>
            <Chart type='matrix' data={data} options={options} />
        </div>
    )
}
