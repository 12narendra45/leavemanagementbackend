import React from 'react';

function LeaveForm({ formData, onChange, onSubmit, loading, error }) {
  return (
    <form onSubmit={onSubmit}
      className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 space-y-4"
    >
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Apply for Leave
        </h2>
        <p className="text-sm text-slate-500">
          Fill in the details below and submit your leave request.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="employeeName" className="block text-sm font-medium text-slate-700">
            Employee Name
          </label>
          <input
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
            id="employeeName"
            name="employeeName"
            type="text"
            value={formData.employeeName}
            onChange={onChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="leaveType" className="block text-sm font-medium text-slate-700">
            Leave Type
          </label>
          <select
             className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
            id="leaveType"
            name="leaveType"
            value={formData.leaveType}
            onChange={onChange}
            required
          >
            <option value="">Select leave type</option>
            <option value="Casual">Casual</option>
            <option value="Sick">Sick</option>
            <option value="Annual">Annual</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor="startDate" className="block text-sm font-medium text-slate-700">
            Start Date
          </label>
          <input
           className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
            id="startDate"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={onChange}
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="endDate" className="block text-sm font-medium text-slate-700">
            End Date
          </label>
          <input
             className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
            id="endDate"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={onChange}  
            required
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="reason" className="block text-sm font-medium text-slate-700"
        >
          Reason
        </label>
        <textarea
         className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
          id="reason"
          name="reason"
          rows={3}
          value={formData.reason}
          onChange={onChange}
          placeholder="Short description of your leave"
          required
        />
      </div>

      {error && (
        <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {error}
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting...' : 'Submit Request'}
        </button>
      </div>
    </form>
  );
}

export default LeaveForm;