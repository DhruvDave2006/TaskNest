import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    status: "Active",
    canCreateProjects: true,
    canManageTasks: true,
    name: "Dhruv",
    initial: "D"
  });

  useEffect(() => {
    // API Fetch for specific user: fetch(`/api/users/${id}`)
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updating User:", formData);
    // API PUT call here
    navigate("/user");
  };

  return (
    <div className="main-back !grid-cols-1 bg-slate-50/30 overflow-y-auto">
      <div className="main-content p-6 flex justify-center pt-12">
        <div className="w-full max-w-2xl bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
              {formData.initial}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Edit User</h1>
              <p className="text-sm text-slate-400">Updating {formData.name}'s profile & permissions.</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Account Status</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="status" 
                    value="Active"
                    checked={formData.status === "Active"}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="text-blue-600" 
                  />
                  <span className="text-sm font-bold text-slate-700">Active</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="status" 
                    value="Suspended"
                    checked={formData.status === "Suspended"}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="text-blue-600" 
                  />
                  <span className="text-sm font-bold text-slate-700">Suspended</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Permissions</label>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <label className="flex items-center gap-3 text-sm font-bold text-slate-600">
                  <input 
                    type="checkbox" 
                    checked={formData.canCreateProjects}
                    onChange={(e) => setFormData({...formData, canCreateProjects: e.target.checked})}
                    className="rounded text-blue-600" 
                  /> Can Create Projects
                </label>
                <label className="flex items-center gap-3 text-sm font-bold text-slate-600">
                  <input 
                    type="checkbox" 
                    checked={formData.canManageTasks}
                    onChange={(e) => setFormData({...formData, canManageTasks: e.target.checked})}
                    className="rounded text-blue-600" 
                  /> Can Manage Tasks
                </label>
              </div>
            </div>

            <div className="pt-6 flex gap-4">
              <button type="button" onClick={() => navigate(-1)} className="flex-1 py-4 text-sm font-bold text-slate-400 hover:bg-slate-50 rounded-2xl transition-all">Cancel</button>
              <button type="submit" className="flex-1 py-4 bg-slate-900 text-white text-sm font-bold rounded-2xl hover:bg-slate-800 transition-all">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserEdit;