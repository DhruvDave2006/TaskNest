import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Reports() {
  const navigate = useNavigate();

  // State for different analytics metrics
  const [metrics, setMetrics] = useState({
    completionRate: "92.4%",
    rateChange: "+ 4.2%",
    activeTasks: 48,
    efficiency: "High",
    taskProgressPercent: 60
  });

  // State for team workload
  const [teamWorkload, setTeamWorkload] = useState([
    { name: 'Dhruv', capacity: 85 },
    { name: 'Sarah', capacity: 70 },
    { name: 'Marcus', capacity: 55 }
  ]);

  useEffect(() => {
    // API Call to fetch analytics
  }, []);

  return (
    <div className="main-back">
      <div className="sidebar p-6 flex flex-col gap-8">
        <button 
          onClick={() => navigate(-1)}
          className="text-sm font-bold text-slate-400 hover:text-blue-600 mb-4 flex items-center gap-2 transition-all"
        >
          ← Back
        </button>
        
        <div>
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Report Type</h4>
          <ul className="space-y-2">
            <li className="px-4 py-3 bg-blue-50 text-blue-600 rounded-2xl font-bold text-sm cursor-pointer shadow-sm shadow-blue-100">Performance</li>
            <li className="px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-2xl font-bold text-sm cursor-pointer transition-all">Workload</li>
            <li className="px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-2xl font-bold text-sm cursor-pointer transition-all">Revenue</li>
          </ul>
        </div>
      </div>

      <div className="main-content p-6">
        <div className="mb-10 px-2">
          <h1 className="text-3xl font-bold text-slate-800">Reports & Analytics</h1>
          <p className="text-sm text-gray-400 mt-1">Real-time data on your team's productivity and project health.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group hover:border-blue-200 transition-all">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Completion Rate</p>
            <h2 className="text-4xl font-black text-slate-800">{metrics.completionRate}</h2>
            <p className="text-xs text-emerald-500 font-bold mt-2">↑ {metrics.rateChange} from last month</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group hover:border-blue-200 transition-all">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Active Tasks</p>
            <h2 className="text-4xl font-black text-slate-800">{metrics.activeTasks}</h2>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4">
              <div 
                className="bg-blue-600 h-1.5 rounded-full transition-all duration-500" 
                style={{ width: `${metrics.taskProgressPercent}%` }}
              ></div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group hover:border-blue-200 transition-all">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Team Efficiency</p>
            <h2 className="text-4xl font-black text-slate-800">{metrics.efficiency}</h2>
            <p className="text-xs text-blue-500 font-bold mt-2">Optimal workload distribution</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Team Workload Distribution</h3>
            <div className="space-y-6">
              {teamWorkload.map((member, i) => (
                <div key={member.name} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-600 px-1">
                    <span>{member.name}</span>
                    <span>{member.capacity}% Capacity</span>
                  </div>
                  <div className="w-full bg-slate-50 h-3 rounded-full overflow-hidden border border-slate-100 p-0.5">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${i === 0 ? 'bg-blue-600' : 'bg-slate-300'}`} 
                      style={{ width: `${member.capacity}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Project Milestone Progress</h3>
            <div className="relative h-48 flex items-end justify-between px-4">
              {[60, 40, 90, 70, 55].map((height, i) => (
                <div key={i} className="w-8 bg-blue-50 hover:bg-blue-600 transition-all rounded-t-lg group relative" style={{ height: `${height}%` }}>
                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] px-2 py-1 rounded">
                     {height}%
                   </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-tighter">
              <span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;