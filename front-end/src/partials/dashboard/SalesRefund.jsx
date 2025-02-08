import React from 'react';
import Tooltip from '../../components/Tooltip';
import BarChart from '../../charts/BarChart02';
import { getCssVariable } from '../../utils/Utils';

function SalesRefund({ data }) {
  // Ensure data is available
  const salesRefundData = data?.salesRefund || { labels: [], stack1: [], stack2: [], totalSales: 0, refundRate: 0 };

  const chartData = {
    labels: salesRefundData.labels,
    datasets: [
      {
        label: 'Sales',
        data: salesRefundData.stack1,
        backgroundColor: getCssVariable('--color-blue-400'),
        hoverBackgroundColor: getCssVariable('--color-blue-600'),
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
      {
        label: 'Refunds',
        data: salesRefundData.stack2,
        backgroundColor: getCssVariable('--color-blue-200'),
        hoverBackgroundColor: getCssVariable('--color-blue-300'),
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Sales VS Refunds</h2>
        <Tooltip className="ml-2" size="lg">
          <div className="text-sm">Comparison of total sales vs. refunds over time.</div>
        </Tooltip>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
            +${salesRefundData.totalSales.toLocaleString()}
          </div>
          <div className="text-sm font-medium text-red-700 px-1.5 bg-red-500/20 rounded-full">
            -{salesRefundData.refundRate}%
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        <BarChart data={chartData} width={595} height={248} />
      </div>
    </div>
  );
}

export default SalesRefund;