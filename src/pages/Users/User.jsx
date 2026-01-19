import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    { id: 1, name: "Dhruv", email: "dhruv@tasknest.com", role: "Admin", status: "Active", color: "bg-blue-600", initial: "D" },
    { id: 2, name: "Sarah Chen", email: "sarah.c@tasknest.com", role: "Editor", status: "Active", color: "bg-purple-500", initial: "S" },
    { id: 3, name: "Marcus Wright", email: "m.wright@tasknest.com", role: "Member", status: "In Meeting", color: "bg-emerald-500", initial: "M" },
    { id: 4, name: "Elena Rodriguez", email: "elena.r@tasknest.com", role: "Admin", status: "Active", color: "bg-orange-500", initial: "E" },
    { id: 5, name: "James Wilson", email: "j.wilson@tasknest.com", role: "Viewer", status: "Offline", color: "bg-slate-400", initial: "J" },
    { id: 6, name: "Aria Gupta", email: "aria.g@tasknest.com", role: "Member", status: "On Holiday", color: "bg-pink-500", initial: "A" },
  ]);

  useEffect(() => {
    // API Fetch logic:
    // fetch('/api/users').then(res => res.json()).then(data => setUsers(data))
  }, []);

  return (
    <div className="main-back">
      <div className="sidebar p-6 flex flex-col gap-8">
        <div>
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Management</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-xl font-semibold text-sm cursor-pointer shadow-sm">
              <span>👥</span> User List
            </li>
            <li onClick={() => navigate("/userCreate")} className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-xl font-medium text-sm cursor-pointer transition-all">
              <span>➕</span> Add User
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content p-6">
        <div className="flex justify-between items-center mb-8 px-2">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Team Members</h1>
            <p className="text-sm text-gray-400 mt-1">Showing {users.length} members in your organization.</p>
          </div>
          <button onClick={() => navigate("/userCreate")} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-blue-100 transition-all">
            + Add New User
          </button>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 border-b border-slate-100">
              <tr className="text-slate-400 text-[10px] uppercase tracking-widest font-black">
                <th className="px-8 py-5">Member</th>
                <th className="px-8 py-5">Role</th>
                <th className="px-8 py-5 text-center">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-6 flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full ${user.color} flex items-center justify-center text-white font-bold shadow-sm`}>
                      {user.initial}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{user.name}</p>
                      <p className="text-[10px] text-slate-400">{user.email}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${
                      user.role === 'Admin' ? 'bg-purple-50 text-purple-600' : 
                      user.role === 'Editor' ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-500'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-300 animate-pulse'}`}></span>
                      <span className="text-[10px] font-bold text-slate-500">{user.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button 
                      onClick={() => navigate(`/userEdit/${user.id}`)} 
                      className="text-slate-400 font-bold hover:text-blue-600 transition-all text-xs"
                    >
                      Edit Profile
                    </button>
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

export default User;