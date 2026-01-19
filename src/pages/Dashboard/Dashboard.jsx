import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  // 1. Setup State for Backend Data
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState({ pending: 0, inProgress: 0, completed: 0 });
  const [loading, setLoading] = useState(true);
  
  // State for the "Quick Add" form
  const [formData, setFormData] = useState({ title: "", priority: "Medium Priority" });

  // 2. Fetch Data on Component Mount
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  // 3. Handle Form Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 4. Handle Task Creation (POST to Backend)
  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      
      console.log("Sending to backend:", formData);
      setFormData({ title: "", priority: "Medium Priority" }); // Reset form
      alert("Task created successfully!");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  if (loading) return <div className="flex h-screen items-center justify-center">Loading Dashboard...</div>;

  return (
    <div className="main-back">
      {/* SIDEBAR SECTION */}
      <div className="sidebar p-6 flex flex-col">
        <div className="mb-10">
          <p className="text-2xl font-semibold text-slate-800">
            Welcome, <span className="text-cyan-600">Dhruv</span>
          </p>
          <p className="text-sm text-gray-400 mt-1">Check your progress today.</p>
        </div>

        <div className="mb-10">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Task Priority</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="text-sm font-medium text-slate-700">High Priority</span>
              </div>
              <span className="text-xs font-bold text-slate-500">25%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="text-sm font-medium text-slate-700">Medium</span>
              </div>
              <span className="text-xs font-bold text-slate-500">50%</span>
            </div>
          </div>
        </div>

        {/* Productivity Section */}
        <div className="mb-10">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Productivity</h4>
          <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-end justify-between h-24 gap-1">
              <div className="w-full bg-blue-100 rounded-t h-[40%]"></div>
              <div className="w-full bg-blue-200 rounded-t h-[60%]"></div>
              <div className="w-full bg-blue-400 rounded-t h-[85%]"></div>
              <div className="w-full bg-blue-600 rounded-t h-[50%]"></div>
              <div className="w-full bg-cyan-400 rounded-t h-[75%]"></div>
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-gray-400 font-medium">
              <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <div className="p-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl text-white shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-[10px] font-bold opacity-70 uppercase">Active Session</span>
            </div>
            <p className="text-sm font-semibold mb-1">Dashboard Design</p>
            <p className="text-xs opacity-60 mb-4">Dhruv's Workspace</p>
            <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold transition-all">
              Stop Session
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT SECTION */}
      <div className="main-content">
        <div className="top">
          {/* Mapping Stats - These should eventually come from backend count queries */}
          <StatBox label="Pending" count={12} color="red" percent={40} />
          <StatBox label="In Progress" count={18} color="amber" percent={60} />
          <StatBox label="Completed" count={30} color="emerlad" percent={85} />
        </div>

        <div className="bottom">
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
            {/* TASK TABLE */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-slate-800">Recent Tasks</h3>
                <button className="text-sm font-medium text-blue-600" onClick={() => navigate("/tasks")}>
                  View all
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-gray-400 text-sm uppercase tracking-wider border-b border-gray-50">
                      <th className="pb-3 font-medium">Task Name</th>
                      <th className="pb-3 font-medium">Due Date</th>
                      <th className="pb-3 font-medium text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 text-slate-700">
                    {/* Map through backend tasks here */}
                    <TaskRow name="Design system update" date="Today" status="In Progress" color="amber" />
                    <TaskRow name="Fix bug" date="Tomorrow" status="Pending" color="red" />
                    <TaskRow name="Meeting Review" date="Jan 1" status="Completed" color="green"/>
                  </tbody>
                </table>
              </div>
            </div>

            {/* QUICK ADD FORM */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-6">Quick Add</h3>
              <form className="space-y-4" onSubmit={handleCreateTask}>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Task Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="What needs to be done?"
                    required
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Priority</label>
                  <select 
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm"
                  >
                    <option>High Priority</option>
                    <option>Medium Priority</option>
                    <option>Low Priority</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-100"
                >
                  Create Task
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-components for cleaner code
const StatBox = ({ label, count, color, percent }) => {
  {
    const progressLine ={
      amber: ""
    }
  }
  return (
  <div className="box">
    <p className="text-3xl font-semibold text-gray-600">{label}</p>
    <p className={`text-2xl font-bold text-${color}-400 mt-2`}>{count} Tasks</p>
    <div className="mt-4">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`bg-${color}-500 h-2 rounded-full`} style={{ width: `${percent}%` }}></div>
      </div>
      <p className="text-xs text-gray-400 mt-1">{percent}%</p>
    </div>
  </div>
);
};

const TaskRow = ({ name, date, status, color }) => {

  const statusColor = {
    amber: "bg-amber-50 text-amber-500",
    red: "bg-red-50 text-red-500",
    green: "bg-emerald-50 text-emerald-500",
    blue: "bg-blue-50 text-blue-500"
  };

  return (
  <tr>
    <td className="py-4">{name}</td>
    <td className="py-4 text-gray-500">{date}</td>
    <td className="py-4 text-right">
      <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColor[color]} || statusColor.blue`}>
        {status}
      </span>
    </td>
  </tr>
);
};

export default Dashboard;