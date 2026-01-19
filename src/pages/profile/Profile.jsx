import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  // State to hold user information from backend
  const [userData, setUserData] = useState({
    name: "Dhruv",
    role: "Full Stack Developer",
    email: "dhruv@tasknest.com",
    memberSince: "January 2025",
    tasksDone: 124,
    projectsCount: 12,
    streak: 5,
    completionRate: 92,
    rank: "Productivity Ninja",
    initial: "D"
  });

  useEffect(() => {
    // API Call would go here:
    // fetch('/api/user/profile').then(res => res.json()).then(data => setUserData(data))
  }, []);

  return (
    <div className="main-back !grid-cols-1 overflow-y-auto">
      <div className="main-content p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="text-center md:text-left px-2">
            <h1 className="text-3xl font-bold text-slate-800">My Profile</h1>
            <p className="text-sm text-gray-400 mt-1">Manage your personal information and account settings.</p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-5xl font-bold border-4 border-white shadow-xl">
                  {userData.initial}
                </div>
                <button className="absolute bottom-2 right-2 bg-white p-2.5 rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                  <span className="text-sm">📷</span>
                </button>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-4xl font-extrabold text-slate-800">{userData.name}</h2>
                    <p className="text-blue-600 font-semibold tracking-wide mt-1 italic">{userData.role}</p>
                  </div>
                  <button className="px-8 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all">
                    Edit Profile
                  </button>
                </div>

                <div className="flex justify-center md:justify-start gap-8 mt-8">
                   <div className="text-center">
                      <p className="text-2xl font-bold text-slate-800">{userData.tasksDone}</p>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Tasks Done</p>
                   </div>
                   <div className="w-[1px] bg-gray-100 h-10 mt-1"></div>
                   <div className="text-center">
                      <p className="text-2xl font-bold text-slate-800">{userData.projectsCount}</p>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Projects</p>
                   </div>
                   <div className="w-[1px] bg-gray-100 h-10 mt-1"></div>
                   <div className="text-center">
                      <p className="text-2xl font-bold text-slate-800">{userData.streak}</p>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Streak</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xl">📧</span>
                <h3 className="text-xl font-bold text-slate-800">Account Info</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                  <p className="text-sm font-semibold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">{userData.email}</p>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Member Since</label>
                  <p className="text-sm font-semibold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">{userData.memberSince}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xl">📊</span>
                <h3 className="text-xl font-bold text-slate-800">Statistics</h3>
              </div>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-xs font-bold text-slate-600">Task Completion Rate</span>
                    <span className="text-xs font-bold text-blue-600">{userData.completionRate}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full shadow-sm transition-all duration-1000" 
                      style={{ width: `${userData.completionRate}%` }}
                    ></div>
                  </div>
                </div>
                <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-5">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-2xl">🏆</div>
                  <div>
                    <p className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">Active Rank</p>
                    <p className="text-lg font-extrabold text-emerald-600">{userData.rank}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl shadow-xl shadow-blue-900/10 relative overflow-hidden group transition-all hover:bg-slate-800 cursor-pointer" 
               onClick={() => navigate("/Reports")}>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="bg-blue-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white">📈</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Reports & Analytics</h3>
                  <p className="text-slate-400 text-sm mt-1">View detailed metrics, team workload, and project progress.</p>
                </div>
              </div>
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2">
                Open Reports <span>→</span>
              </button>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
          </div>

          <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-red-800">Account Management</p>
              <p className="text-xs text-red-600/70">Once you delete your account, there is no going back.</p>
            </div>
            <button 
              className="px-6 py-2 bg-white border border-red-200 text-red-600 text-xs font-bold rounded-lg hover:bg-red-600 hover:text-white transition-all"
              onClick={() => { if(window.confirm("Are you sure?")) console.log("Account deletion requested"); }}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;