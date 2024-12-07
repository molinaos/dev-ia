import React from 'react';
import { Search, Plus, Phone, Mail } from 'lucide-react';

const contacts = [
  {
    name: 'Jenny Wilson',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=faces',
    company: 'Facebook',
    source: 'Advertisement',
  },
  {
    name: 'Kristin Watson',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=faces',
    company: 'Klarna',
    source: 'Online store',
  },
];

export default function ContactsList() {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-medium">Contacts</h3>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search contact..."
              className="pl-9 pr-4 py-2 border rounded-lg text-sm w-64"
            />
            <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Plus size={20} />
          </button>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-left text-sm text-gray-500">
            <th className="pb-4 font-medium">Person</th>
            <th className="pb-4 font-medium">Company</th>
            <th className="pb-4 font-medium">Lead source</th>
            <th className="pb-4 font-medium">Contact info</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index} className="border-t">
              <td className="py-4">
                <div className="flex items-center space-x-3">
                  <img src={contact.avatar} className="w-10 h-10 rounded-full" />
                  <span className="font-medium">{contact.name}</span>
                </div>
              </td>
              <td className="py-4">{contact.company}</td>
              <td className="py-4">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {contact.source}
                </span>
              </td>
              <td className="py-4">
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Phone size={16} />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Mail size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}