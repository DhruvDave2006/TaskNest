import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function projectList() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([
    {
      _id: "1",
      title: "Mobile App UI",
      client: "TechCorp",
      initial: "M",
      status: "On Track",
      progress: 75,
      themeColor: "bg-blue-600"
    },
    {
      _id: "2",
      title: "Marketing Site",
      client: "StartupX",
      initial: "W",
      status: "At Risk",
      progress: 40,
      themeColor: "bg-orange-500"
    }
  ]);

  const statusStyles = {
    "On Track": "bg-emerald-50 text-emerald-600",
    "At Risk": "bg-red-50 text-red-600",
    "Completed": "bg-blue-50 text-blue-600",
  };

  return (
    <div className="main-back">
      <div className="sidebar p-6 flex flex-col gap-8">
        <div>
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Navigation</h4>
          <ul className="space-y-2">
            <li onClick={() => navigate("/Projects")} className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-2xl font-bold text-sm cursor-pointer transition-all">
              <span>🖼️</span> Grid View
            </li>
            <li className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-2xl font-bold text-sm cursor-pointer">
              <span>📋</span> Project List
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 px-2">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Project List</h1>
            <p className="text-sm text-gray-400 mt-1">Click a row to view full project details.</p>
          </div>
          <button onClick={() => navigate("/projectCreate")} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 transition-all">
            + Create Project
          </button>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50 border-b border-slate-100">
              <tr className="text-slate-400 text-[10px] uppercase tracking-widest font-black">
                <th className="px-8 py-5">Project Name</th>
                <th className="px-8 py-5">Team</th>
                <th className="px-8 py-5">Progress</th>
                <th className="px-8 py-5 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm text-slate-700">
              {projects.map((project) => (
                <tr 
                  key={project._id}
                  onClick={() => navigate(`/projectDetail/${project._id}`)} 
                  className="hover:bg-blue-50/30 transition-colors group cursor-pointer"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl ${project.themeColor} flex items-center justify-center text-white font-bold shadow-sm`}>
                        {project.initial}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{project.title}</p>
                        <p className="text-[10px] text-slate-400 italic">Client: {project.client}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
                    </div>
                  </td>
                  <td className="px-8 py-6 w-64">
                    <div className="space-y-2">
                      <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div className={`${project.themeColor} h-1.5 rounded-full shadow-sm`} style={{ width: `${project.progress}%` }}></div>
                      </div>
                      <p className="text-[10px] font-bold text-slate-400">{project.progress}% Complete</p>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter ${statusStyles[project.status] || statusStyles["On Track"]}`}>
                      {project.status}
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

export default projectList;