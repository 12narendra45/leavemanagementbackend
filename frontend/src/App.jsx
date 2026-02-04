import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import ApplyLeave from './pages/ApplyLeave';
import ManageLeaves from './pages/ManageLeaves';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Navbar/>
      <main className="flex-1 flex items-start justify-center px-4 py-8">
        <div className="w-full max-w-5xl">
          <Routes>
            <Route path="/" element={<Navigate to="/apply" replace/>}/>
            <Route path="/apply" element={<ApplyLeave/>}/>
            <Route path="/manage" element={<ManageLeaves/>} />
            <Route path="*" element={<Navigate to="/apply" replace />} />
          </Routes>
        </div>
      </main>
      <footer className="py-4 text-center text-xs text-slate-500">
        Leave Management System
      </footer>
    </div>
  );
}

export default App;