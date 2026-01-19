import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function projectCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Development",
    deadline: "",
    themeColor: "bg-blue-500"
  });

  const handleSubmit = (e, isDraft = false) => {
    e.preventDefault();
    const payload = { ...formData, status: isDraft ? "Draft" : "Active" };
    
    // Backend Integration Point:
    // fetch("/api/projects", { method: "POST", body: JSON.stringify(payload) })
    
    console.log("Saving Project:", payload);
    navigate("/Projects");
  };

  return (
    <div className="main-back !grid-cols-1 overflow-y-auto bg-slate-50/50">
      <div className="main-content p-6 flex justify-center items-start pt-12">
        <div className="w-full max-w-2xl bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-10">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-bold text-slate-800">Create New Project</h1>
            <p className="text-sm text-gray-400 mt-2">Initialize a workspace to organize your team and track progress.</p>
          </div>

          <form className="space-y-8" onSubmit={(e) => handleSubmit(e, false)}>
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Project Title</label>
              <input 
                required
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="e.g., Q1 Marketing Campaign"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none text-sm transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Description (Optional)</label>
              <textarea 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Briefly describe the project goals..."
                rows="3"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none text-sm transition-all resize-none"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Category</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none text-sm cursor-pointer"
                >
                  <option>Development</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Research</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Target Deadline</label>
                <input 
                  type="date" 
                  value={formData.deadline}
                  onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none text-sm text-slate-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Project Theme Color</label>
              <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 w-fit">
                {['bg-blue-500', 'bg-purple-500', 'bg-emerald-500', 'bg-amber-500', 'bg-red-500'].map((color) => (
                  <button 
                    key={color}
                    type="button" 
                    onClick={() => setFormData({...formData, themeColor: color})}
                    className={`w-8 h-8 rounded-full ${color} transition-all ${formData.themeColor === color ? 'ring-2 ring-offset-2 ring-blue-500' : 'hover:ring-2 ring-offset-2'}`}
                  />
                ))}
              </div>
            </div>

            <div className="pt-6 flex flex-col md:flex-row gap-4">
              <button 
                type="button"
                onClick={(e) => handleSubmit(e, true)}
                className="flex-1 py-4 text-sm font-bold text-slate-500 hover:bg-slate-50 rounded-2xl transition-all border border-transparent hover:border-slate-200"
              >
                Save as Draft
              </button>
              <button 
                type="submit"
                className="flex-1 py-4 bg-blue-600 text-white text-sm font-bold rounded-2xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all transform hover:-translate-y-0.5"
              >
                Create Workspace
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default projectCreate;