import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function projectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("tasks");
  const [project, setProject] = useState(null);

  // Status Style Map to ensure Tailwind classes are loaded correctly
  const statusStyles = {
    "On Track": "bg-emerald-50 text-emerald-600",
    "At Risk": "bg-red-50 text-red-600",
    "Completed": "bg-blue-50 text-blue-600",
    "Pending": "bg-amber-50 text-amber-500",
    "In Progress": "bg-indigo-50 text-indigo-500"
  };

  useEffect(() => {
    // Dummy Data Object - In a real app, this would come from an API call using the 'id'
    const dummyProject = {
      id: id || "1",
      title: "Mobile App UI",
      lead: "Dhruv",
      status: "On Track",
      initial: "M",
      description: "The Mobile App UI project focuses on redesigning the core user journey for our TaskNest mobile platform. Our goal is to improve accessibility and streamline the task-creation process for power users.",
      deadline: "Jan 30, 2026",
      tasksDone: 12,
      totalTasks: 16,
      tasks: [
        { id: 101, title: "Design System Overhaul", assignee: "Dhruv", status: "Pending" },
        { id: 102, title: "User Auth Flow", assignee: "Aman", status: "In Progress" },
        { id: 103, title: "Dashboard Mockups", assignee: "Sanya", status: "Completed" },
        { id: 104, title: "React Navigation Setup", assignee: "Dhruv", status: "Completed" }
      ],
      members: [
        { id: 1, name: "Dhruv", role: "Project Lead / Owner", initial: "D" },
        { id: 2, name: "Aman", role: "Backend Developer", initial: "A" },
        { id: 3, name: "Sanya", role: "UI/UX Designer", initial: "S" }
      ]
    };

    setProject(dummyProject);
  }, [id]);

  if (!project) return <div className="p-10 text-center font-bold">Loading Project Details...</div>;

  return (
    <div className="main-back">
      {/* Sidebar: Navigation & Context */}
      <div className="sidebar p-6 flex flex-col gap-8">
        <button 
          onClick={() => navigate("/Projects")}
          className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-600 transition-all mb-4"
        >
          ← Back to Projects
        </button>

        <div>
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Quick Actions</h4>
          <ul className="space-y-2">
            <li onClick={()=> navigate("/TaskCreate")} className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-2xl font-bold text-sm cursor-pointer shadow-lg shadow-blue-100">
              <span>+</span> Add Task
            </li>
            <li className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-2xl font-bold text-sm cursor-pointer transition-all">
              <span>👥</span> Invite Member
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content p-6">
        {/* Project Header */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-inner">
                {project.initial}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-800">{project.title}</h1>
                <p className="text-sm text-slate-400 mt-1 font-medium italic">Project Lead: {project.lead}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${statusStyles[project.status]}`}>
                {project.status}
              </span>
              <button className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all">⚙️</button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-8 mt-10 border-b border-slate-50">
            {["overview", "tasks", "members"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2 ${
                  activeTab === tab ? "border-blue-600 text-blue-600" : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Based on Tabs */}
        <div className="space-y-6">
          
          {/* 1. OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm animate-fadeIn">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Project Description</h3>
              <p className="text-slate-500 leading-relaxed max-w-3xl">
                {project.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="p-5 bg-slate-50 rounded-2xl">
                   <p className="text-xs font-bold text-slate-400 uppercase mb-2">Deadline</p>
                   <p className="text-sm font-bold text-slate-700">{project.deadline}</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl">
                   <p className="text-xs font-bold text-slate-400 uppercase mb-2">Tasks Done</p>
                   <p className="text-sm font-bold text-slate-700">{project.tasksDone} / {project.totalTasks}</p>
                </div>
              </div>
            </div>
          )}

          {/* 2. TASKS TAB */}
          {activeTab === "tasks" && (
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden animate-fadeIn">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr className="text-[10px] uppercase font-black text-slate-400 tracking-widest">
                    <th className="px-8 py-4">Task</th>
                    <th className="px-8 py-4">Assignee</th>
                    <th className="px-8 py-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {project.tasks.map((task) => (
                    <tr key={task.id} className="hover:bg-slate-50 transition-all">
                      <td className="px-8 py-5 font-bold text-slate-700 text-sm">{task.title}</td>
                      <td className="px-8 py-5 text-sm text-slate-500">{task.assignee}</td>
                      <td className="px-8 py-5 text-right">
                        <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${statusStyles[task.status] || "bg-slate-50"}`}>
                          {task.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* 3. MEMBERS TAB */}
          {activeTab === "members" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
              {project.members.map((member) => (
                <div key={member.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center">
                      {member.initial}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{member.name}</p>
                      <p className="text-xs text-slate-400">{member.role}</p>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-slate-400 hover:text-red-500 transition-colors">Remove</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default projectDetail;