import React, { useState } from "react"; 

function Settings() {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    darkMode: false,
    language: "English (US)",
    timezone: "GMT +5:30 (IST)"
  });

  const [passwordData, setPasswordData] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  const handleToggle = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    // API Call to save preference: fetch('/api/user/settings', { method: 'POST', body: ... })
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (passwordData.new !== passwordData.confirm) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Updating password...", passwordData);
    // API Call to update password
  };

  return (
    <div className="main-back !grid-cols-1 overflow-y-auto">
      <div className="main-content p-6">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="px-2">
            <h1 className="text-3xl font-bold text-slate-800">Settings</h1>
            <p className="text-sm text-gray-400 mt-1">Manage your account preferences and security.</p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xl">⚙️</span>
              <h3 className="text-xl font-bold text-slate-800">General Preferences</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div>
                  <p className="text-sm font-bold text-slate-700">Email Notifications</p>
                  <p className="text-xs text-gray-400">Receive daily task reminders via email.</p>
                </div>
                <div 
                  className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-300 ${preferences.emailNotifications ? 'bg-blue-600' : 'bg-gray-300'}`}
                  onClick={() => handleToggle('emailNotifications')}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${preferences.emailNotifications ? 'right-1' : 'left-1'}`}></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div>
                  <p className="text-sm font-bold text-slate-700">Dark Mode</p>
                  <p className="text-xs text-gray-400">Switch between light and dark themes.</p>
                </div>
                <div 
                  onClick={() => handleToggle('darkMode')}
                  className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-300 ${preferences.darkMode ? 'bg-slate-800' : 'bg-gray-300'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${preferences.darkMode ? 'right-1' : 'left-1'}`}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xl">🔒</span>
              <h3 className="text-xl font-bold text-slate-800">Security</h3>
            </div>
            <form className="space-y-6" onSubmit={handlePasswordUpdate}>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Current Password</label>
                <input 
                  type="password" 
                  required
                  value={passwordData.current}
                  onChange={(e) => setPasswordData({...passwordData, current: e.target.value})}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">New Password</label>
                  <input 
                    type="password" 
                    required
                    value={passwordData.new}
                    onChange={(e) => setPasswordData({...passwordData, new: e.target.value})}
                    placeholder="New password"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Confirm Password</label>
                  <input 
                    type="password" 
                    required
                    value={passwordData.confirm}
                    onChange={(e) => setPasswordData({...passwordData, confirm: e.target.value})}
                    placeholder="Confirm new password"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm" 
                  />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="px-6 py-3 bg-slate-800 text-white rounded-xl font-bold text-sm hover:bg-slate-700 transition-all w-full md:w-auto"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Language & Region</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <select 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none"
                value={preferences.language}
                onChange={(e) => setPreferences({...preferences, language: e.target.value})}
               >
                 <option>English (US)</option>
                 <option>Hindi</option>
                 <option>Spanish</option>
               </select>
               <select 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none"
                value={preferences.timezone}
                onChange={(e) => setPreferences({...preferences, timezone: e.target.value})}
               >
                 <option>GMT +5:30 (IST)</option>
                 <option>GMT +0:00 (UTC)</option>
               </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;