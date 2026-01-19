import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "Viewer"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending Invitation:", formData);
    // API POST call here
    navigate("/user");
  };

  return (
    <div className="main-back !grid-cols-1 bg-slate-50/30 overflow-y-auto">
      <div className="main-content p-6 flex justify-center pt-12">
        <div className="w-full max-w-2xl bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Add New User</h1>
          <p className="text-sm text-slate-400 mb-10">Invite a new member to your workspace.</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  placeholder="John Doe" 
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com" 
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Role Assignment</label>
              <select 
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm outline-none cursor-pointer"
              >
                <option value="Viewer">Viewer</option>
                <option value="Member">Member</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div className="pt-6 flex gap-4">
              <button type="button" onClick={() => navigate(-1)} className="flex-1 py-4 text-sm font-bold text-slate-400 hover:bg-slate-50 rounded-2xl transition-all">Cancel</button>
              <button type="submit" className="flex-1 py-4 bg-blue-600 text-white text-sm font-bold rounded-2xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">Send Invitation</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserCreate;