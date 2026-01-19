import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TaskDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState({
    title: "Design System Overhaul",
    priority: "High",
    status: "In Progress",
    description: "Update all component libraries to match the new 2026 branding guidelines. Ensure accessibility compliance across all mobile views.",
    assignee: "Dhruv",
    dueDate: "Jan 15, 2026",
    timeSpent: "04:20:00"
  });

  useEffect(() => {
    // API Fetch: fetch(`/api/tasks/${id}`).then(...)
  }, [id]);

  const handleToggleComplete = async () => {
    // API PATCH logic here
    console.log("Updating task status...");
  };

  return (
    <div className="main-back">
      <div className="sidebar p-6 flex flex-col gap-6">
        <button onClick={() => navigate(-1)} className="text-sm font-bold text-slate-400 hover:text-blue-600 mb-4">← Back</button>
        <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 text-center">
          <p className="text-[10px] font-black text-blue-600 uppercase mb-1">Time Spent</p>
          <p className="text-2xl font-black text-blue-700">{task.timeSpent}</p>
        </div>
      </div>

      <div className="main-content p-6">
        <div className="bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div>
              <span className={`px-3 py-1 text-[10px] font-black uppercase rounded-lg ${task.priority === 'High' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                {task.priority} Priority
              </span>
              <h1 className="text-4xl font-bold text-slate-800 mt-4">{task.title}</h1>
            </div>
            <button onClick={handleToggleComplete} className="px-6 py-2 bg-emerald-50 text-emerald-600 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-100 transition-all">
              Mark Completed
            </button>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Description</h3>
              <p className="text-slate-600 leading-relaxed max-w-3xl">{task.description}</p>
            </div>

            <div className="flex gap-12 pt-8 border-t border-slate-50">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Assignee</p>
                <p className="text-sm font-bold text-slate-700">{task.assignee}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Due Date</p>
                <p className="text-sm font-bold text-slate-700">{task.dueDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;    