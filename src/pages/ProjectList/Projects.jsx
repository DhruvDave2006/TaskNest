import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
  
  // State for projects - Initialized with your original data to keep UI visible
  const [projects, setProjects] = useState([
    {
      _id: "1",
      title: "Mobile App UI",
      initial: "M",
      status: "On Track",
      tasksCount: 12,
      membersCount: 4,
      progress: 75,
      themeColor: "bg-indigo-500"
    },
    {
      _id: "2",
      title: "Marketing Site",
      initial: "W",
      status: "At Risk",
      tasksCount: 8,
      membersCount: 2,
      progress: 40,
      themeColor: "bg-orange-500"
    },
    {
      _id: "3",
      title: "TaskNest Branding",
      initial: "B",
      status: "Completed",
      tasksCount: 24,
      membersCount: 6,
      progress: 100,
      themeColor: "bg-emerald-500"
    }
  ]);

  // Tailwind configuration mapping for status-based styling
  const statusStyles = {
    "On Track": { bg: "bg-emerald-50", text: "text-emerald-600", bar: "bg-indigo-500" },
    "At Risk": { bg: "bg-red-50", text: "text-red-600", bar: "bg-orange-500" },
    "Completed": { bg: "bg-blue-50", text: "text-blue-600", bar: "bg-emerald-500" },
  };

  return (
    <div className="main-back">
      {/* Sidebar with Navigation and Filters */}
      <div className="sidebar p-6 flex flex-col gap-8">
        <div>
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Views</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-2xl font-bold text-sm cursor-pointer shadow-sm shadow-blue-100/50">
              <span>🖼️</span> Grid View
            </li>
            <li 
              onClick={() => navigate("/projectList")} 
              className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-800 rounded-2xl font-bold text-sm cursor-pointer transition-all"
            >
              <span>📋</span> Project List
            </li>
          </ul>
        </div>

        {/* RESTORED: Quick Filters Section */}
        <div>
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Filters</h4>
          <div className="space-y-4 px-2">
            <div className="flex items-center justify-between group cursor-pointer">
              <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors">Active</span>
              <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded-md font-bold">12</span>
            </div>
            <div className="flex items-center justify-between group cursor-pointer">
              <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors">Archived</span>
              <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded-md font-bold">4</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content p-6">
        <div className="flex justify-between items-center mb-8 px-2">
          <h1 className="text-3xl font-bold text-slate-800">My Projects</h1>
          <button 
            onClick={() => navigate("/projectCreate")} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-blue-100 transition-all flex items-center gap-2"
          >
            + New Project
          </button>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const style = statusStyles[project.status] || statusStyles["On Track"];
            return (
              <div 
                key={project._id}
                onClick={() => navigate(`/projectDetail/${project._id}`)}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl shadow-inner font-bold ${project.themeColor}`}>
                    {project.initial}
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${style.bg} ${style.text}`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-xs text-gray-400 mt-1 mb-6">{project.tasksCount} Tasks • {project.membersCount} Contributors</p>
                
                <div className="flex -space-x-2 mb-6">
                   <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                   <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-600">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className={`${style.bar} h-2 rounded-full shadow-sm`} style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;