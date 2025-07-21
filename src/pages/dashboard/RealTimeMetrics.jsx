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


import MatrixChart from '../../components/dashboard/MatrixChart';

export default function RealTimeMetrics() {
  const info = [
    {
      label: 'Live Conversations Count',
      marketValue: '10',
      marketVariant: 'success',
      title: '12,562',
    },
    {
      label: 'Current Queue Time',
      marketValue: '20',
      marketVariant: 'success',
      title: '00:30:14',
    },
  ]
  const info2 = [
    {
      label: 'Agents Online',
      marketValue: '15',
      marketVariant: 'success',
      title: '84,690',
    },
    {
      label: 'Agents Offline',
      marketValue: '10',
      marketVariant: 'success',
      title: '12,408',
    },
    {
      label: 'Assigned Open Tickets',
      marketValue: '10',
      marketVariant: 'success',
      title: '6,342',
    },
    {
      label: 'Unassigned Open Tickets',
      marketValue: '12',
      marketVariant: 'success',
      title: '342',
    },
  ]
  const views = [
    {
      label: 'Article Views',
      marketValue: '15',
      marketVariant: 'success',
      title: '8',
    },
    {
      label: 'Searches',
      marketValue: '12',
      marketVariant: 'success',
      title: '10',
    },
  ]
  const Availability = [
    {
      label: 'Agent Availability',
      title: '32,720k',
      unit: 'Total',
    },
    {
      marketValue: '12',
      marketVariant: 'success',
      title: '12,120k',
      unit: 'Online',
    },
    {
      marketValue: '10',
      marketVariant: 'success',
      title: '10,250k',
      unit: 'Busy',
    },
    {
      marketValue: '10',
      marketVariant: 'danger',
      title: '10,720k',
      unit: 'Offline',
    },
  ]

  const matrixWidth = ({ chart }) => (chart.chartArea || {}).width / 12.3;
  const matrixHeight = ({ chart }) => (chart.chartArea || {}).height / 10.5;

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
    searchResults: [
      {
        name: 'No Articles Shown',
        percent: 75,
        color: '#166448',
      },
      {
        name: 'Articles Shown',
        percent: 25,
        color: '#FFC563',
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
    },
    supportVolume: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Ticket Created',
          data: [32, 30, 29, 29, 31, 35, 40, 45, 48, 47, 43, 35],
          borderColor: '#7856FF',
          backgroundColor: '#7856FF',
          tension: 0.5,
          pointBackgroundColor: '#7856FF',
          pointBorderColor: '#7856FF',
          pointRadius: 4,
        },
        {
          label: 'Ticket Replied',
          data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
          borderColor: '#FFC563',
          backgroundColor: '#FFC563',
          tension: 0.5,
          pointBackgroundColor: '#FFC563',
          pointBorderColor: '#FFC563',
          pointRadius: 4,
        },
        {
          label: 'Ticket Closed',
          data: [15, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29],
          borderColor: '#FE4333',
          backgroundColor: '#FE4333',
          tension: 0.5,
          pointBackgroundColor: '#FE4333',
          pointBorderColor: '#FE4333',
          pointRadius: 4,
        }
      ],
      legend: true,
      min: 0,
      max: 60,
    },
    keyMetrics: {
      datasets: [
        {
          label: "Ticket Created",
          data: [
            { x: 'Jan', y: 10, v: 30 },
            { x: 'Jan', y: 20, v: 10 },
            { x: 'Jan', y: 30, v: 40 },
            { x: 'Jan', y: 40, v: 0 },
            { x: 'Jan', y: 50, v: 0 },
            { x: 'Jan', y: 60, v: 70 },
            { x: 'Jan', y: 70, v: 100 },
            { x: 'Jan', y: 80, v: 50 },
            { x: 'Jan', y: 90, v: 30 },
            { x: 'Jan', y: 100, v: 0 },

            { x: 'Feb', y: 10, v: 20 },
            { x: 'Feb', y: 20, v: 60 },
            { x: 'Feb', y: 30, v: 80 },
            { x: 'Feb', y: 40, v: 0 },
            { x: 'Feb', y: 50, v: 0 },
            { x: 'Feb', y: 60, v: 0 },
            { x: 'Feb', y: 70, v: 90 },
            { x: 'Feb', y: 80, v: 70 },
            { x: 'Feb', y: 90, v: 40 },
            { x: 'Feb', y: 100, v: 60 },

            { x: 'Mar', y: 10, v: 0 },
            { x: 'Mar', y: 20, v: 20 },
            { x: 'Mar', y: 30, v: 50 },
            { x: 'Mar', y: 40, v: 80 },
            { x: 'Mar', y: 50, v: 0 },
            { x: 'Mar', y: 60, v: 0 },
            { x: 'Mar', y: 70, v: 40 },
            { x: 'Mar', y: 80, v: 90 },
            { x: 'Mar', y: 90, v: 30 },
            { x: 'Mar', y: 100, v: 20 },

            { x: 'Apr', y: 10, v: 60 },
            { x: 'Apr', y: 20, v: 10 },
            { x: 'Apr', y: 30, v: 0 },
            { x: 'Apr', y: 40, v: 0 },
            { x: 'Apr', y: 50, v: 50 },
            { x: 'Apr', y: 60, v: 80 },
            { x: 'Apr', y: 70, v: 70 },
            { x: 'Apr', y: 80, v: 20 },
            { x: 'Apr', y: 90, v: 10 },
            { x: 'Apr', y: 100, v: 40 },

            { x: 'May', y: 10, v: 10 },
            { x: 'May', y: 20, v: 50 },
            { x: 'May', y: 30, v: 70 },
            { x: 'May', y: 40, v: 20 },
            { x: 'May', y: 50, v: 10 },
            { x: 'May', y: 60, v: 90 },
            { x: 'May', y: 70, v: 100 },
            { x: 'May', y: 80, v: 0 },
            { x: 'May', y: 90, v: 60 },
            { x: 'May', y: 100, v: 40 },

            { x: 'Jun', y: 10, v: 0 },
            { x: 'Jun', y: 20, v: 20 },
            { x: 'Jun', y: 30, v: 40 },
            { x: 'Jun', y: 40, v: 70 },
            { x: 'Jun', y: 50, v: 10 },
            { x: 'Jun', y: 60, v: 50 },
            { x: 'Jun', y: 70, v: 80 },
            { x: 'Jun', y: 80, v: 90 },
            { x: 'Jun', y: 90, v: 30 },
            { x: 'Jun', y: 100, v: 70 },

            { x: 'Jul', y: 10, v: 0 },
            { x: 'Jul', y: 20, v: 0 },
            { x: 'Jul', y: 30, v: 50 },
            { x: 'Jul', y: 40, v: 30 },
            { x: 'Jul', y: 50, v: 90 },
            { x: 'Jul', y: 60, v: 40 },
            { x: 'Jul', y: 70, v: 100 },
            { x: 'Jul', y: 80, v: 70 },
            { x: 'Jul', y: 90, v: 30 },
            { x: 'Jul', y: 100, v: 80 },

            { x: 'Aug', y: 10, v: 10 },
            { x: 'Aug', y: 20, v: 60 },
            { x: 'Aug', y: 30, v: 90 },
            { x: 'Aug', y: 40, v: 50 },
            { x: 'Aug', y: 50, v: 20 },
            { x: 'Aug', y: 60, v: 100 },
            { x: 'Aug', y: 70, v: 60 },
            { x: 'Aug', y: 80, v: 30 },
            { x: 'Aug', y: 90, v: 40 },
            { x: 'Aug', y: 100, v: 10 },

            { x: 'Sep', y: 10, v: 0 },
            { x: 'Sep', y: 20, v: 20 },
            { x: 'Sep', y: 30, v: 50 },
            { x: 'Sep', y: 40, v: 30 },
            { x: 'Sep', y: 50, v: 0 },
            { x: 'Sep', y: 60, v: 80 },
            { x: 'Sep', y: 70, v: 100 },
            { x: 'Sep', y: 80, v: 90 },
            { x: 'Sep', y: 90, v: 10 },
            { x: 'Sep', y: 100, v: 40 },

            { x: 'Oct', y: 10, v: 20 },
            { x: 'Oct', y: 20, v: 80 },
            { x: 'Oct', y: 30, v: 0 },
            { x: 'Oct', y: 40, v: 50 },
            { x: 'Oct', y: 50, v: 30 },
            { x: 'Oct', y: 60, v: 10 },
            { x: 'Oct', y: 70, v: 90 },
            { x: 'Oct', y: 80, v: 40 },
            { x: 'Oct', y: 90, v: 0 },
            { x: 'Oct', y: 100, v: 60 },

            { x: 'Nov', y: 10, v: 30 },
            { x: 'Nov', y: 20, v: 40 },
            { x: 'Nov', y: 30, v: 90 },
            { x: 'Nov', y: 40, v: 0 },
            { x: 'Nov', y: 50, v: 70 },
            { x: 'Nov', y: 60, v: 30 },
            { x: 'Nov', y: 70, v: 60 },
            { x: 'Nov', y: 80, v: 80 },
            { x: 'Nov', y: 90, v: 50 },
            { x: 'Nov', y: 100, v: 20 },

            { x: 'Dec', y: 10, v: 40 },
            { x: 'Dec', y: 20, v: 10 },
            { x: 'Dec', y: 30, v: 60 },
            { x: 'Dec', y: 40, v: 20 },
            { x: 'Dec', y: 50, v: 0 },
            { x: 'Dec', y: 60, v: 0 },
            { x: 'Dec', y: 70, v: 70 },
            { x: 'Dec', y: 80, v: 100 },
            { x: 'Dec', y: 90, v: 40 },
            { x: 'Dec', y: 100, v: 60 },
          ],
          backgroundColor: '#7856FF',
          borderColor: '#fff',
          borderWidth: 0,
          width: matrixWidth,
          height: matrixHeight,
          borderRadius: 2,
        },
        {
          label: "Ticket Replied",
          data: [
            { x: 'Jan', y: 10, v: 30 },
            { x: 'Jan', y: 20, v: 10 },
            { x: 'Jan', y: 30, v: 40 },
            { x: 'Jan', y: 40, v: 0 },
            { x: 'Jan', y: 50, v: 0 },
            { x: 'Jan', y: 60, v: 70 },
            { x: 'Jan', y: 70, v: 100 },
            { x: 'Jan', y: 80, v: 50 },
            { x: 'Jan', y: 90, v: 30 },
            { x: 'Jan', y: 100, v: 0 },

            { x: 'Feb', y: 10, v: 20 },
            { x: 'Feb', y: 20, v: 60 },
            { x: 'Feb', y: 30, v: 80 },
            { x: 'Feb', y: 40, v: 0 },
            { x: 'Feb', y: 50, v: 0 },
            { x: 'Feb', y: 60, v: 0 },
            { x: 'Feb', y: 70, v: 90 },
            { x: 'Feb', y: 80, v: 70 },
            { x: 'Feb', y: 90, v: 40 },
            { x: 'Feb', y: 100, v: 60 },

            { x: 'Mar', y: 10, v: 0 },
            { x: 'Mar', y: 20, v: 20 },
            { x: 'Mar', y: 30, v: 50 },
            { x: 'Mar', y: 40, v: 80 },
            { x: 'Mar', y: 50, v: 0 },
            { x: 'Mar', y: 60, v: 0 },
            { x: 'Mar', y: 70, v: 40 },
            { x: 'Mar', y: 80, v: 90 },
            { x: 'Mar', y: 90, v: 30 },
            { x: 'Mar', y: 100, v: 20 },

            { x: 'Apr', y: 10, v: 60 },
            { x: 'Apr', y: 20, v: 10 },
            { x: 'Apr', y: 30, v: 0 },
            { x: 'Apr', y: 40, v: 0 },
            { x: 'Apr', y: 50, v: 50 },
            { x: 'Apr', y: 60, v: 80 },
            { x: 'Apr', y: 70, v: 70 },
            { x: 'Apr', y: 80, v: 20 },
            { x: 'Apr', y: 90, v: 10 },
            { x: 'Apr', y: 100, v: 40 },

            { x: 'May', y: 10, v: 10 },
            { x: 'May', y: 20, v: 50 },
            { x: 'May', y: 30, v: 70 },
            { x: 'May', y: 40, v: 20 },
            { x: 'May', y: 50, v: 10 },
            { x: 'May', y: 60, v: 90 },
            { x: 'May', y: 70, v: 100 },
            { x: 'May', y: 80, v: 0 },
            { x: 'May', y: 90, v: 60 },
            { x: 'May', y: 100, v: 40 },

            { x: 'Jun', y: 10, v: 0 },
            { x: 'Jun', y: 20, v: 20 },
            { x: 'Jun', y: 30, v: 40 },
            { x: 'Jun', y: 40, v: 70 },
            { x: 'Jun', y: 50, v: 10 },
            { x: 'Jun', y: 60, v: 50 },
            { x: 'Jun', y: 70, v: 80 },
            { x: 'Jun', y: 80, v: 90 },
            { x: 'Jun', y: 90, v: 30 },
            { x: 'Jun', y: 100, v: 70 },

            { x: 'Jul', y: 10, v: 0 },
            { x: 'Jul', y: 20, v: 0 },
            { x: 'Jul', y: 30, v: 50 },
            { x: 'Jul', y: 40, v: 30 },
            { x: 'Jul', y: 50, v: 90 },
            { x: 'Jul', y: 60, v: 40 },
            { x: 'Jul', y: 70, v: 100 },
            { x: 'Jul', y: 80, v: 70 },
            { x: 'Jul', y: 90, v: 30 },
            { x: 'Jul', y: 100, v: 80 },

            { x: 'Aug', y: 10, v: 10 },
            { x: 'Aug', y: 20, v: 60 },
            { x: 'Aug', y: 30, v: 90 },
            { x: 'Aug', y: 40, v: 50 },
            { x: 'Aug', y: 50, v: 20 },
            { x: 'Aug', y: 60, v: 100 },
            { x: 'Aug', y: 70, v: 60 },
            { x: 'Aug', y: 80, v: 30 },
            { x: 'Aug', y: 90, v: 40 },
            { x: 'Aug', y: 100, v: 10 },

            { x: 'Sep', y: 10, v: 0 },
            { x: 'Sep', y: 20, v: 20 },
            { x: 'Sep', y: 30, v: 50 },
            { x: 'Sep', y: 40, v: 30 },
            { x: 'Sep', y: 50, v: 0 },
            { x: 'Sep', y: 60, v: 80 },
            { x: 'Sep', y: 70, v: 100 },
            { x: 'Sep', y: 80, v: 90 },
            { x: 'Sep', y: 90, v: 10 },
            { x: 'Sep', y: 100, v: 40 },

            { x: 'Oct', y: 10, v: 20 },
            { x: 'Oct', y: 20, v: 80 },
            { x: 'Oct', y: 30, v: 0 },
            { x: 'Oct', y: 40, v: 50 },
            { x: 'Oct', y: 50, v: 30 },
            { x: 'Oct', y: 60, v: 10 },
            { x: 'Oct', y: 70, v: 90 },
            { x: 'Oct', y: 80, v: 40 },
            { x: 'Oct', y: 90, v: 0 },
            { x: 'Oct', y: 100, v: 60 },

            { x: 'Nov', y: 10, v: 30 },
            { x: 'Nov', y: 20, v: 40 },
            { x: 'Nov', y: 30, v: 90 },
            { x: 'Nov', y: 40, v: 0 },
            { x: 'Nov', y: 50, v: 70 },
            { x: 'Nov', y: 60, v: 30 },
            { x: 'Nov', y: 70, v: 60 },
            { x: 'Nov', y: 80, v: 80 },
            { x: 'Nov', y: 90, v: 50 },
            { x: 'Nov', y: 100, v: 20 },

            { x: 'Dec', y: 10, v: 40 },
            { x: 'Dec', y: 20, v: 10 },
            { x: 'Dec', y: 30, v: 60 },
            { x: 'Dec', y: 40, v: 20 },
            { x: 'Dec', y: 50, v: 0 },
            { x: 'Dec', y: 60, v: 0 },
            { x: 'Dec', y: 70, v: 70 },
            { x: 'Dec', y: 80, v: 100 },
            { x: 'Dec', y: 90, v: 40 },
            { x: 'Dec', y: 100, v: 60 },
          ],
          backgroundColor: '#AE9AFF',
          borderColor: '#fff',
          borderWidth: 0,
          width: matrixWidth,
          height: matrixHeight,
          borderRadius: 2,
        },
        {
          label: "Ticket Closed",
          data: [
            { x: 'Jan', y: 10, v: 30 },
            { x: 'Jan', y: 20, v: 10 },
            { x: 'Jan', y: 30, v: 40 },
            { x: 'Jan', y: 40, v: 0 },
            { x: 'Jan', y: 50, v: 0 },
            { x: 'Jan', y: 60, v: 70 },
            { x: 'Jan', y: 70, v: 100 },
            { x: 'Jan', y: 80, v: 50 },
            { x: 'Jan', y: 90, v: 30 },
            { x: 'Jan', y: 100, v: 0 },

            { x: 'Feb', y: 10, v: 20 },
            { x: 'Feb', y: 20, v: 60 },
            { x: 'Feb', y: 30, v: 80 },
            { x: 'Feb', y: 40, v: 0 },
            { x: 'Feb', y: 50, v: 0 },
            { x: 'Feb', y: 60, v: 0 },
            { x: 'Feb', y: 70, v: 90 },
            { x: 'Feb', y: 80, v: 70 },
            { x: 'Feb', y: 90, v: 40 },
            { x: 'Feb', y: 100, v: 60 },

            { x: 'Mar', y: 10, v: 0 },
            { x: 'Mar', y: 20, v: 20 },
            { x: 'Mar', y: 30, v: 50 },
            { x: 'Mar', y: 40, v: 80 },
            { x: 'Mar', y: 50, v: 0 },
            { x: 'Mar', y: 60, v: 0 },
            { x: 'Mar', y: 70, v: 40 },
            { x: 'Mar', y: 80, v: 90 },
            { x: 'Mar', y: 90, v: 30 },
            { x: 'Mar', y: 100, v: 20 },

            { x: 'Apr', y: 10, v: 60 },
            { x: 'Apr', y: 20, v: 10 },
            { x: 'Apr', y: 30, v: 0 },
            { x: 'Apr', y: 40, v: 0 },
            { x: 'Apr', y: 50, v: 50 },
            { x: 'Apr', y: 60, v: 80 },
            { x: 'Apr', y: 70, v: 70 },
            { x: 'Apr', y: 80, v: 20 },
            { x: 'Apr', y: 90, v: 10 },
            { x: 'Apr', y: 100, v: 40 },

            { x: 'May', y: 10, v: 10 },
            { x: 'May', y: 20, v: 50 },
            { x: 'May', y: 30, v: 70 },
            { x: 'May', y: 40, v: 20 },
            { x: 'May', y: 50, v: 10 },
            { x: 'May', y: 60, v: 90 },
            { x: 'May', y: 70, v: 100 },
            { x: 'May', y: 80, v: 0 },
            { x: 'May', y: 90, v: 60 },
            { x: 'May', y: 100, v: 40 },

            { x: 'Jun', y: 10, v: 0 },
            { x: 'Jun', y: 20, v: 20 },
            { x: 'Jun', y: 30, v: 40 },
            { x: 'Jun', y: 40, v: 70 },
            { x: 'Jun', y: 50, v: 10 },
            { x: 'Jun', y: 60, v: 50 },
            { x: 'Jun', y: 70, v: 80 },
            { x: 'Jun', y: 80, v: 90 },
            { x: 'Jun', y: 90, v: 30 },
            { x: 'Jun', y: 100, v: 70 },

            { x: 'Jul', y: 10, v: 0 },
            { x: 'Jul', y: 20, v: 0 },
            { x: 'Jul', y: 30, v: 50 },
            { x: 'Jul', y: 40, v: 30 },
            { x: 'Jul', y: 50, v: 90 },
            { x: 'Jul', y: 60, v: 40 },
            { x: 'Jul', y: 70, v: 100 },
            { x: 'Jul', y: 80, v: 70 },
            { x: 'Jul', y: 90, v: 30 },
            { x: 'Jul', y: 100, v: 80 },

            { x: 'Aug', y: 10, v: 10 },
            { x: 'Aug', y: 20, v: 60 },
            { x: 'Aug', y: 30, v: 90 },
            { x: 'Aug', y: 40, v: 50 },
            { x: 'Aug', y: 50, v: 20 },
            { x: 'Aug', y: 60, v: 100 },
            { x: 'Aug', y: 70, v: 60 },
            { x: 'Aug', y: 80, v: 30 },
            { x: 'Aug', y: 90, v: 40 },
            { x: 'Aug', y: 100, v: 10 },

            { x: 'Sep', y: 10, v: 0 },
            { x: 'Sep', y: 20, v: 20 },
            { x: 'Sep', y: 30, v: 50 },
            { x: 'Sep', y: 40, v: 30 },
            { x: 'Sep', y: 50, v: 0 },
            { x: 'Sep', y: 60, v: 80 },
            { x: 'Sep', y: 70, v: 100 },
            { x: 'Sep', y: 80, v: 90 },
            { x: 'Sep', y: 90, v: 10 },
            { x: 'Sep', y: 100, v: 40 },

            { x: 'Oct', y: 10, v: 20 },
            { x: 'Oct', y: 20, v: 80 },
            { x: 'Oct', y: 30, v: 0 },
            { x: 'Oct', y: 40, v: 50 },
            { x: 'Oct', y: 50, v: 30 },
            { x: 'Oct', y: 60, v: 10 },
            { x: 'Oct', y: 70, v: 90 },
            { x: 'Oct', y: 80, v: 40 },
            { x: 'Oct', y: 90, v: 0 },
            { x: 'Oct', y: 100, v: 60 },

            { x: 'Nov', y: 10, v: 30 },
            { x: 'Nov', y: 20, v: 40 },
            { x: 'Nov', y: 30, v: 90 },
            { x: 'Nov', y: 40, v: 0 },
            { x: 'Nov', y: 50, v: 70 },
            { x: 'Nov', y: 60, v: 30 },
            { x: 'Nov', y: 70, v: 60 },
            { x: 'Nov', y: 80, v: 80 },
            { x: 'Nov', y: 90, v: 50 },
            { x: 'Nov', y: 100, v: 20 },

            { x: 'Dec', y: 10, v: 40 },
            { x: 'Dec', y: 20, v: 10 },
            { x: 'Dec', y: 30, v: 60 },
            { x: 'Dec', y: 40, v: 20 },
            { x: 'Dec', y: 50, v: 0 },
            { x: 'Dec', y: 60, v: 0 },
            { x: 'Dec', y: 70, v: 70 },
            { x: 'Dec', y: 80, v: 100 },
            { x: 'Dec', y: 90, v: 40 },
            { x: 'Dec', y: 100, v: 60 },
          ],
          backgroundColor: '#E5DDFF',
          borderColor: '#fff',
          borderWidth: 0,
          width: matrixWidth,
          height: matrixHeight,
          borderRadius: 2,
        },
      ],
      legend: true,
      max: 100,
    }
  }

  const monitoring = [
    {
      name: 'Live Chat',
      issue: "Payment Issue",
      assigned: "Agent A",
      status: {
        name: 'Active',
        status: 'success',
      }
    },
    {
      name: 'Email Support',
      issue: "Login Problem",
      assigned: "Agent B",
      status: {
        name: 'Escalated',
        status: 'warning',
      }
    },
    {
      name: 'Phone Support',
      issue: "Order Delay",
      assigned: "Agent C",
      status: {
        name: 'Resolved',
        status: 'primary',
      }
    },
    {
      name: 'Helpdesk Tickets',
      issue: "Refund Request",
      assigned: "Agent D",
      status: {
        name: 'Active',
        status: 'success',
      }
    },
  ]
  const tickets = [
    {
      id: "TCK-#10234",
      name: 'Alice Brown',
      issue: "Payment Failure",
      priority: "High",
      status: {
        name: 'Unassigned',
        status: 'warning',
      }
    },
    {
      id: "TCK-#10235",
      name: 'Bob Carter',
      issue: "Account Locked",
      priority: "High",
      status: {
        name: 'Unassigned',
        status: 'warning',
      }
    },
    {
      id: "TCK-#10236",
      name: 'Chloe Adams',
      issue: "Refund Request",
      priority: "Medium",
      status: {
        name: 'Unassigned',
        status: 'warning',
      }
    },
    {
      id: "TCK-#10237",
      name: 'David Evans',
      issue: "Login Issue",
      priority: "Medium",
      status: {
        name: 'Unassigned',
        status: 'warning',
      }
    },
    {
      id: "TCK-#10238",
      name: 'Mike L.',
      issue: "Technical Glitch",
      priority: "Low",
      status: {
        name: 'Unassigned',
        status: 'warning',
      }
    },
  ]
  const results = [...Array(4)].map(() => ({
    team: "h",
    count: 1,
    clicked: 0,
    rate: 0,
  }));
  const performance = [
    {
      id: 'How much does shipping cost? copy',
      views: 1,
      rating: "-",
      like: {
        like: '0',
        desLike: '0',
      },
      update: 'Thursday',
    },
    {
      id: 'Do you offer refunds or exchanges?',
      views: 1,
      rating: "-",
      like: {
        like: '0',
        desLike: '0',
      },
      update: 'Thursday',
    },
    {
      id: 'How much does shipping cost? copy',
      views: 1,
      rating: "-",
      like: {
        like: '0',
        desLike: '0',
      },
      update: 'Thursday',
    },
  ]

  const tags = [
    {
      name: "return",
      value: 1,
    },
    {
      name: "shel",
      value: 1,
    },
    {
      name: "shelf",
      value: 1,
    },
    {
      name: "returr",
      value: 1,
    },
    {
      name: "poli",
      value: 1,
    },
    {
      name: "ret",
      value: 1,
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
            {Availability.map((item, index) => (
              <div className={`flex flex-col gap-4 w-[45%] md:w-auto ${index === 0 ? "md:pr-[calc(64px-16px)]" : "md:min-w-[99px] border-r border-stroke"} grow ${index === Availability.length - 1 && "border-r-0"}`} key={index}>
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
            <CardTitle title="Average Wait Time Per Support Channel" />
            <BarChart setData={agentPerformanceChart.productivity} />
          </div>
          <div className={`${c_24} xl:col-span-4 flex flex-col`}>
            <CardTitle title="Sentiment Indicator" dropdown={false} />
            <DoughnutChart info={agentPerformanceChart.sentimentAnalysis} />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6">
          <div className={`${c_24} xl:col-span-4 flex flex-col`}>
            <CardTitle title="Sentiment Indicator" dropdown={false} />
            <DoughnutChart info={agentPerformanceChart.sentimentAnalysis} />
          </div>
          <div className={`${c_24} xl:col-span-8`}>
            <div>
              <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
                <h4>Breakdown of Intent Occurrence</h4>
                <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
              </div>
              <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
                <table className="table">
                  <thead>
                    <tr>
                      {['Customer Name', 'Issue Type', 'Assigned Agent', 'Status'].map((item, index) => (
                        <th key={index} className="">{item}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {monitoring.map((item, index) => (
                      <tr key={index}>
                        <td className='!font-medium !text-heading'>{item.name}</td>
                        <td className=''>{item.issue}</td>
                        <td className=''>{item.assigned}</td>
                        <td className='!font-medium'>
                          <Alert className='!min-h-7 min-w-[92px]' variant={item.status.status} text={`${item.status.name}`} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className={`${c_24} xl:col-span-8`}>
            <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
              <h4>Tickets Waiting for Agent Assignment</h4>
              <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
            </div>
            <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
              <table className="table">
                <thead>
                  <tr>
                    {["Ticket ID", 'Customer Name', 'Issue Type', 'Priority', 'Status'].map((item, index) => (
                      <th th key={index} className="" > {item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((item, index) => (
                    <tr key={index}>
                      <td className='!font-medium !text-heading'>{item.id}</td>
                      <td className=''>{item.name}</td>
                      <td className=''>{item.issue}</td>
                      <td className='!font-medium !text-heading'>{item.priority}</td>
                      <td className='!font-medium'>
                        <Alert className='!min-h-7 min-w-[92px]' variant={item.status.status} text={`${item.status.name}`} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col gap-3 md:gap-4 ">
              {views.map((item, index) => (
                <InfoCard key={index} item={item} className='w-full h-[calc(50%-8px)] xl:min-w-[200px] 2xl:min-w-max flex flex-col justify-between' />
              ))}
            </div>
            <div className={`${c_24}`}>
              <CardTitle title="Search Results" dropdown={false} />
              <DoughnutChart info={agentPerformanceChart.searchResults} />
            </div>
          </div>
          <div className={`${c_24}`}>
            <CardTitle title="Article views" />
            <LineChart className='h-[280px]' setData={agentPerformanceChart.agentPerformance} />
          </div>

          <div className={`${c_24}`}>
            <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
              <h4>Performance By Articles</h4>
              <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
            </div>
            <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
              <table className="table">
                <thead>
                  <tr>
                    {['Article', 'Views', 'Rating', 'like', "Last Updated"].map((item, index) => (
                      <th key={index}>
                        {item === "like" ?
                          <div className='flex items-center gap-3'>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.1263 8.95817H3.6263C3.16606 8.95817 2.79297 9.33127 2.79297 9.7915V16.0415C2.79297 16.5017 3.16606 16.8748 3.6263 16.8748H6.1263M6.1263 16.8748V9.1665L9.43527 2.74321C9.57817 2.46582 9.86507 2.2915 10.1771 2.2915C11.1999 2.2915 11.9853 3.2043 11.8278 4.21492L11.3481 7.2915H15.7171C17.2477 7.2915 18.4189 8.65446 18.1886 10.1676L17.4912 14.7509C17.3053 15.9724 16.2551 16.8748 15.0196 16.8748H6.1263Z" stroke="#FFC563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>|</span>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.878 9.04167H15.3763C15.8365 9.04167 16.2096 8.66857 16.2096 8.20833V1.95833C16.2096 1.4981 15.8365 1.125 15.3763 1.125H12.878M12.878 1.125V8.83333L9.57085 15.2565C9.42798 15.5339 9.13753 15.7083 8.82544 15.7083V15.7083C7.80313 15.7083 7.02203 14.7955 7.17952 13.7849L7.65895 10.7083H3.2922C1.76243 10.7083 0.591791 9.34537 0.821933 7.83223L1.51904 3.24889C1.70481 2.02748 2.75447 1.125 3.9893 1.125H12.878Z" stroke="#FFC563" strokeWidth="1.25" strokeLinejoin="round" />
                            </svg>
                          </div> :
                          <>
                            {item}
                          </>
                        }
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {performance.map((item, index) => (
                    <tr key={index}>
                      <td className='!font-medium !text-heading'>{item.id}</td>
                      <td className='!font-medium'>{item.views}</td>
                      <td className=''>{item.rating}</td>
                      <td className='!text-heading'>
                        <div className="flex items-center gap-3 pl-3">
                          <span>{item.like.like} </span>
                          <span>|</span>
                          <span>{item.like.desLike} </span>
                        </div>
                      </td>
                      <td className="!text-heading !font-medium">
                        {item.update}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
            <div className={`${c_24} col-span-2 gap-4 md:gap-6`}>
              <div className="flex items-center justify-between gap-2 flex-wrap mb-4 md:mb-5 lg:mb-6">
                <h4>Search Terms with Results</h4>
                <TableFilter className='!mb-0' searchClass='max-w-full md:max-w-[160px] w-full md:w-max' />
              </div>
              <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
                <table className="table">
                  <thead>
                    <tr>
                      {["Search Term", 'Search Count', 'Article Clicked', 'Click - Through Rate'].map((item, index) => (
                        <th th key={index} className="" > {item}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((item, index) => (
                      <tr key={index}>
                        <td className='!font-medium !text-heading'>{item.team}</td>
                        <td className=''>{item.count}</td>
                        <td className=''>{item.clicked}</td>
                        <td className=''>{item.rate}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className={`${c_24}`}>
              <CardTitle title="No Search Results" dropdown={false} className="w-full" />
              <div className="flex items-center justify-between border-b border-stroke pb-1">
                <p className='text-xs'>Search Term</p>
                <p className='text-xs'>Tags</p>
              </div>
              <ul className='w-full'>
                {tags.map((item, index) => (
                  <li className="flex items-center justify-between w-full text-heading font-medium py-2.5 border-b border-stroke text-xs" key={index}>
                    <p className=''>{item.name}</p>
                    <p>{item.value} </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4 ">
            {info2.map((item, index) => (
              <InfoCard key={index} item={item} className='grow w-full sm:w-[calc(50%-12px)] md:w-auto xl:min-w-[200px] 2xl:min-w-max h-full flex flex-col justify-between' />
            ))}
          </div>
          <div className={`${c_24}`}>
            <CardTitle title="Support Volume" />
            <LineChart className='h-[280px]' setData={agentPerformanceChart.supportVolume} />
          </div>
        </div>
      </MainInner >
    </>
  )
}
