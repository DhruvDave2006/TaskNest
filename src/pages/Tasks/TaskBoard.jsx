import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TaskBoard() {
  const navigate = useNavigate();
  // Grouping tasks by status
  const [boardData, setBoardData] = useState({
    "To Do": [
      { id: 3, title: "Research Competitors", dueDate: "Jan 10", initial: "RC" },
      { id: 4, title: "Write Specs", dueDate: "Jan 12", initial: "WS" }
    ],
    "In Progress": [
      { id: 1, title: "UI Design", dueDate: "Jan 10", initial: "UI" }
    ],
    "Done": [
      { id: 5, title: "Kickoff Meeting", dueDate: "Jan 01", initial: "KM" }
    ]
  });

  const colConfig = {
    "To Do": "bg-slate-400",
    "In Progress": "bg-blue-500",
    "Done": "bg-emerald-500"
  };

  return (
    <div className="main-back">
      <div className="sidebar p-6">
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Views</h4>
        <button onClick={() => navigate("/tasks")} className="w-full text-left px-4 py-3 text-slate-500 font-bold text-sm rounded-2xl hover:bg-slate-50">📋 List View</button>
        <button className="w-full text-left px-4 py-3 bg-blue-50 text-blue-600 font-bold text-sm rounded-2xl shadow-sm">🗂️ Kanban Board</button>
      </div>

      <div className="main-content p-6 overflow-x-auto">
        <div className="flex gap-6 min-w-max h-full">
          {Object.entries(boardData).map(([title, tasks]) => (
            <div key={title} className="w-80 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${colConfig[title]}`}></span>
                  <h3 className="font-bold text-slate-700">{title}</h3>
                </div>
                <span className="text-xs font-bold text-slate-400">{tasks.length}</span>
              </div>

              <div className="bg-slate-50/50 p-3 rounded-[2rem] border border-slate-100 flex-1 space-y-3">
                {tasks.map((task) => (
                  <div key={task.id} onClick={() => navigate(`/taskDetail/${task.id}`)} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer transition-all group">
                    <p className="font-bold text-slate-800 group-hover:text-blue-600">{task.title}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-bold">{task.initial}</div>
                      <span className="text-[10px] font-bold text-slate-400 italic">{task.dueDate}</span>
                    </div>
                  </div>
                ))}
                <button onClick={() => navigate("/taskCreate")} className="w-full py-3 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-xs font-bold hover:bg-white transition-all">+ Add Task</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskBoard;