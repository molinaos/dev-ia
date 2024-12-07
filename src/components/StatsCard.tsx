import React from 'react';
import { Info } from 'lucide-react';

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: {
    value: string;
    trend: 'up' | 'down';
  };
  iconBg: string;
}

export default function StatsCard({ icon, title, value, change, iconBg }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col space-y-4">
      <div className="flex justify-between items-start">
        <div className={`${iconBg} p-2 rounded-lg`}>
          {icon}
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <Info size={20} />
        </button>
      </div>
      
      <div>
        <h3 className="text-sm text-gray-600 mb-1">{title}</h3>
        <p className="text-2xl font-semibold">{value}</p>
      </div>

      <div className="flex items-center space-x-2 text-sm">
        <span className={`${
          change.trend === 'up' ? 'text-green-500' : 'text-red-500'
        }`}>
          {change.trend === 'up' ? '↑' : '↓'} {change.value}
        </span>
        <span className="text-gray-500">from last period</span>
      </div>
    </div>
  );
}