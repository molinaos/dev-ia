import React from 'react';
import { Plus } from 'lucide-react';

const tasks = [
  {
    title: 'New social media post',
    description: 'Sed mi ac ac sagittis mi. Interdum varius...',
    date: 'Feb 12',
    tags: ['Marketing', 'Internal'],
  },
  {
    title: 'Upload new item to marketplace',
    description: 'Sed mi ac ac sagittis mi. Interdum varius...',
    completed: true,
  },
];

export default function TasksList() {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-medium">My Tasks</h3>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Plus size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <div className="flex items-start justify-between">
              <div>
                <h4 className={`font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
                  {task.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{task.description}</p>
              </div>
              {task.date && (
                <div className="text-sm">
                  <span className="text-gray-500">{task.date}</span>
                  <div className="flex space-x-2 mt-2">
                    {task.tags?.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 rounded text-xs ${
                          tag === 'Marketing' ? 'bg-indigo-100 text-indigo-600' : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}