import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import RevenueChart from './components/RevenueChart';
import ContactsList from './components/ContactsList';
import TasksList from './components/TasksList';
import { FileText, DollarSign, Users } from 'lucide-react';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-3 gap-6 mb-6">
            <StatsCard
              icon={<DollarSign className="text-blue-600" size={24} />}
              title="Total Sales"
              value="$23,569.00"
              change={{ value: "10.5%", trend: "up" }}
              iconBg="bg-blue-100"
            />
            <StatsCard
              icon={<DollarSign className="text-green-600" size={24} />}
              title="Avg. Sale value"
              value="$12,680.00"
              change={{ value: "3.4%", trend: "up" }}
              iconBg="bg-green-100"
            />
            <StatsCard
              icon={<Users className="text-purple-600" size={24} />}
              title="Total Deals"
              value="1,204"
              change={{ value: "0.5%", trend: "down" }}
              iconBg="bg-purple-100"
            />
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-6">
              <RevenueChart />
              <ContactsList />
            </div>
            <div>
              <TasksList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;