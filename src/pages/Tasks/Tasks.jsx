import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Tasks() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design System Overhaul", project: "Mobile App UI", priority: "High", dueDate: "Jan 10, 2026", status: "In Progress" },
    { id: 2, title: "Fix Navbar Bug", project: "Marketing Site", priority: "Low", dueDate: "Tomorrow", status: "Pending" }
  ]);

  // Color mapping for dynamic styles
  const priorityStyles = {
    "High": "bg-red-50 text-red-500",
    "Medium": "bg-blue-50 text-blue-500",
    "Low": "bg-slate-50 text-slate-400"
  };

  const statusStyles = {
    "In Progress": "bg-amber-50 text-amber-500",
    "Pending": "bg-red-50 text-red-500",
    "Completed": "bg-emerald-50 text-emerald-500"
  };

  useEffect(() => {
    // Fetch logic: 
    // fetch('/api/tasks').then(res => res.json()).then(data => setTasks(data))
  }, []);

  return (
    <div className="main-back">
      <div className="sidebar p-6 flex flex-col gap-8">
        <div>
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">View Modes</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-xl font-semibold text-sm cursor-pointer shadow-sm">
              <span>📋</span> List View
            </li>
            <li onClick={() => navigate("/taskBoard")} className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-xl font-medium text-sm cursor-pointer transition-all">
              <span>🗂️</span> Kanban Board
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Quick Filters</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-xl font-medium text-sm cursor-pointer transition-all"><span>📅</span> Due Today</li>
            <li className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-xl font-medium text-sm cursor-pointer transition-all"><span>⭐</span> Important</li>
          </ul>
        </div>
      </div>

      <div className="main-content p-6">
        <div className="flex justify-between items-center mb-8 px-2">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Tasks</h1>
            <p className="text-sm text-gray-400 mt-1">Manage your team's workflow and deadlines.</p>
          </div>
          <button onClick={() => navigate("/taskCreate")} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-blue-100 transition-all">+ New Task</button>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr className="text-slate-400 text-[10px] uppercase tracking-widest font-black">
                <th className="px-8 py-5">Task Name</th>
                <th className="px-8 py-5">Priority</th>
                <th className="px-8 py-5">Due Date</th>
                <th className="px-8 py-5 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm text-slate-700">
              {tasks.map((task) => (
                <tr key={task.id} onClick={() => navigate(`/taskDetail/${task.id}`)} className="hover:bg-blue-50/30 transition-colors cursor-pointer group">
                  <td className="px-8 py-6">
                     <p className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{task.title}</p>
                     <p className="text-[10px] text-slate-400">{task.project}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase ${priorityStyles[task.priority] || "bg-slate-50 text-slate-400"}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-slate-500">{task.dueDate}</td>
                  <td className="px-8 py-6 text-right">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${statusStyles[task.status] || "bg-slate-50 text-slate-400"}`}>
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tasks;