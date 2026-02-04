import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-white border-b border-black-500">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-10 items-center justify-center rounded-md bg-red-900 text-white text-sm font-semibold">
            LM
          </span>
          <div>
            <h1 className="text-sm font-semibold text-slate-900">
              Leave Management System
            </h1>
            <p className="text-xs text-slate-500">MERN Stack</p>
          </div>
        </div>
        <nav className="flex items-center gap-2 text-sm">
          <Link
            to="/apply"
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-100"
          >
            Apply Leave
          </Link>
          <Link
            to="/manage"
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-100"
          >
            Manage Leaves
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;