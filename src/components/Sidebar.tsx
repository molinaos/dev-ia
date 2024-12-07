import React from 'react';
import { 
  LayoutDashboard, 
  Bell, 
  CheckSquare, 
  FileText, 
  Mail, 
  Calendar, 
  PieChart,
  Building2,
  Users,
  Users2,
  Puzzle,
  HelpCircle,
  Search,
  Command
} from 'lucide-react';

const MenuItem = ({ icon: Icon, text, active = false }: { icon: any, text: string, active?: boolean }) => (
  <li className={`flex items-center px-4 py-2 space-x-3 rounded-lg cursor-pointer ${active ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'}`}>
    <Icon size={20} />
    <span>{text}</span>
  </li>
);

export default function Sidebar() {
  return (
    <div className="w-64 h-screen border-r bg-white p-4">
      <div className="flex items-center space-x-2 px-4 mb-6">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg"></div>
        <span className="font-semibold text-xl">Clario</span>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        <div className="absolute right-3 top-2.5 bg-gray-200 rounded px-1.5 py-0.5 text-xs text-gray-600">
          <div className="flex items-center space-x-1">
            <Command size={12} />
            <span>K</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-xs font-medium text-gray-500 px-4 mb-2">Main Menu</p>
          <ul className="space-y-1">
            <MenuItem icon={LayoutDashboard} text="Dashboard" active />
            <MenuItem icon={Bell} text="Notifications" />
            <MenuItem icon={CheckSquare} text="Tasks" />
            <MenuItem icon={FileText} text="Notes" />
            <MenuItem icon={Mail} text="Email" />
            <MenuItem icon={Calendar} text="Calendar" />
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium text-gray-500 px-4 mb-2">Record</p>
          <ul className="space-y-1">
            <MenuItem icon={PieChart} text="Reports" />
            <MenuItem icon={Building2} text="Companies" />
            <MenuItem icon={Users} text="Contacts" />
          </ul>
        </div>

        <div>
          <ul className="space-y-1">
            <MenuItem icon={Users2} text="Invite Team" />
            <MenuItem icon={Puzzle} text="Integration" />
            <MenuItem icon={HelpCircle} text="Help & First step" />
          </ul>
        </div>
      </div>
    </div>
  );
}