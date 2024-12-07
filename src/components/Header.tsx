import React from 'react';
import { Filter, Download, Plus, Info } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Last updated: Feb 28, 2024</span>
          <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
            <Info size={12} className="text-indigo-600" />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex -space-x-2">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=faces" className="w-8 h-8 rounded-full border-2 border-white" />
          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=faces" className="w-8 h-8 rounded-full border-2 border-white" />
        </div>
        <button className="p-1 hover:bg-gray-100 rounded">
          <Plus size={20} />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <Info size={20} />
        </button>
        <button className="flex items-center space-x-2 px-3 py-1.5 text-sm bg-gray-100 rounded-lg hover:bg-gray-200">
          <Filter size={16} />
          <span>Filter</span>
        </button>
        <button className="flex items-center space-x-2 px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Download size={16} />
          <span>Import/Export</span>
        </button>
      </div>
    </div>
  );
}