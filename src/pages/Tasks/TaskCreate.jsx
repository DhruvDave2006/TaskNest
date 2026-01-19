import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TaskCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium Priority",
    dueDate: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call: await fetch('/api/tasks', { method: 'POST', body: JSON.stringify(formData) })
      console.log("Creating Task:", formData);
      navigate("/tasks");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="main-back !grid-cols-1 bg-slate-50/30 overflow-y-auto">
      <div className="main-content p-6 flex justify-center pt-12">
        <div className="w-full max-w-2xl bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-10">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-slate-800">Create New Task</h1>
            <p className="text-sm text-slate-400 mt-2">Add a new item to your project backlog.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Task Title</label>
              <input 
                type="text" 
                required
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="e.g., Design API Endpoints" 
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all" 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Priority</label>
                <select 
                  value={formData.priority}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm outline-none cursor-pointer"
                >
                  <option>High Priority</option>
                  <option>Medium Priority</option>
                  <option>Low Priority</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Due Date</label>
                <input 
                  type="date" 
                  required
                  value={formData.dueDate}
                  onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm outline-none text-slate-500" 
                />
              </div>
            </div>

            <div className="pt-6 flex gap-4">
              <button type="button" onClick={() => navigate(-1)} className="flex-1 py-4 text-sm font-bold text-slate-400 hover:bg-slate-50 rounded-2xl transition-all">Cancel</button>
              <button type="submit" className="flex-1 py-4 bg-blue-600 text-white text-sm font-bold rounded-2xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">Create Task</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskCreate;