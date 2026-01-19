import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <nav className="flex items-center justify-end px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <button onClick={()=> navigate('/Login')} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Log in</button>
          <button onClick={()=> navigate('/Register')} className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-800 shadow-lg transition-all">
            Register
          </button>
        </div>
      </nav>

      <header className="pt-20 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
            Revolutionize your workflow
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
            Manage tasks with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">intelligence.</span>
          </h1>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            TaskNest helps teams organize, track, and conquer projects in one beautiful, unified workspace. Stop juggling, start soaring.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all transform hover:-translate-y-1">
              Start for Free
            </button>
            <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </header>

      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="text-center">
            <p className="text-4xl font-black text-slate-800">50k+</p>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-slate-800">12M</p>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Tasks Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-slate-800">99.9%</p>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Uptime</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-slate-800">4.9/5</p>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">User Rating</p>
          </div>
        </div>
      </section>

      <section id="features" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Everything you need to succeed</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Powerful tools built for high-performance teams. Simple enough for personal use, robust enough for enterprise.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-10 rounded-3xl border border-slate-100 bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">📊</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Deep Analytics</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Visualize your team's productivity with built-in heatmaps and performance charts.</p>
            </div>
            <div className="p-10 rounded-3xl border border-slate-100 bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all group">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">🛡️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Role Management</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Granular control over who can view, edit, or delete project data.</p>
            </div>
            <div className="p-10 rounded-3xl border border-slate-100 bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all group">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">🚀</div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Smart Workflows</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Automate repetitive tasks and keep your projects moving at lightning speed.</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Home;