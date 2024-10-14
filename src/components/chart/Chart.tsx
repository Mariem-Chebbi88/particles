"use client";
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const dataValues = Array.from({ length: 7 }, () => Math.floor(Math.random() * 11));
  const backgroundValues = dataValues.map(value => 24 - value);

  const data = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        label: 'Bar',
        data: dataValues,
        backgroundColor: '#865AE6',
        barThickness: 30,
        borderWidth: 2,
        borderRadius: {
          topLeft: 12,
          topRight: 12,
          bottomLeft: 12,
          bottomRight: 12,
        },
      },
      {
        label: 'Background',
        data: backgroundValues,
        backgroundColor: '#F5F5F5',
        barThickness: 30,
        borderWidth: 2,
        borderRadius: {
          topLeft: 12,
          topRight: 12,
          bottomLeft: 12,
          bottomRight: 12,
        },
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#77838F',
          font: {
            family: 'Poppins',
            size: 10,
            weight: 400,
          },
          padding: 10,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 24,
        ticks: {
          stepSize: 2,
          color: '#77838F',
          font: {
            family: 'Poppins',
            size: 10,
            weight: 400,
          },
          padding: 10,
          callback: function (value : number | string) {
            return typeof value === 'number' ? value + ' h' : value;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <div>
      <style jsx>{`
        .chart-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .chart-box {
          width: 66.67%; /* 2/3 of the width */
          padding: 20px;
          background-color: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
        }
      `}</style>
      <div className="chart-container">
        <div className="chart-box">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
