import React from 'react';
import { Info } from 'lucide-react';

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <h3 className="font-medium">Revenue</h3>
          <Info size={16} className="text-gray-400" />
        </div>
        <select className="px-3 py-1.5 border rounded-lg text-sm">
          <option>All Products</option>
        </select>
      </div>

      <div className="flex items-baseline justify-between mb-4">
        <div>
          <p className="text-2xl font-semibold">$23,569.00</p>
          <p className="text-sm text-green-500">↑ 10.5% from last period</p>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
            <span>This period</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
            <span>Last period</span>
          </div>
        </div>
      </div>

      <div className="h-64 bg-gray-50 rounded-lg">
        {/* Chart would be implemented with a charting library */}
      </div>
    </div>
  );
}