import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-400 py-16 px-6 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <img src="./public/TaskNestFinal(Header).png" alt="TaskNest" height={40} width={40} className="rounded-lg"/>
              <span className="text-white font-bold text-2xl tracking-tight">TaskNest</span>
            </div>
            <p className="text-base leading-relaxed mb-8 max-w-sm">
              The intelligent workspace for teams to organize, track, and conquer their daily goals. Built for speed and focus.
            </p>
            <div className="flex space-x-5 items-center">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img width="28" height="28" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook"/>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img width="28" height="28" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram"/>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity text-white">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity brightness-0 invert">
                <img width="28" height="28" src="https://img.icons8.com/material-rounded/24/github.png" alt="github"/>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-3 gap-8">
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6">Product</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/Dashboard" className="hover:text-blue-400 transition-colors footerText">Dashboard</Link></li>
                <li><Link to="/Projects" className="hover:text-blue-400 transition-colors footerText">Project List</Link></li>
                <li><Link to="/TaskBoard" className="hover:text-blue-400 transition-colors footerText">Kanban Board</Link></li>
                <li><Link to="/Tasks" className="hover:text-blue-400 transition-colors footerText">Task Analytics</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6">Resources</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-blue-400 transition-colors footerText">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors footerText">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors footerText">API Reference</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors footerText">Guides</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6">Support</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-blue-400 transition-colors footerText">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors footerText">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors footerText">Terms</a></li>
                <li className="pt-2">
                  <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full w-fit">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-tight">Systems Operational</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2026 TaskNest. Designed for High-Performance Teams.
          </p>
          <div className="flex gap-6 text-xs font-bold text-slate-600">
             <span className="flex items-center gap-1"><span className="text-blue-500">🛡️</span> Encrypted Workspace</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;