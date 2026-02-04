import React from 'react';

function formatDate(value) {
  if (!value) return '-';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString();
}

function LeaveTable({ leaves, loading, onStatusChange, updatingId }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Leave Requests
          </h2>
          <p className="text-sm text-slate-500">
            View and manage all employee leave requests.
          </p>
        </div>
        <span className="text-xs text-slate-500">
          Total: {leaves.length}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-left font-semibold text-slate-600">
                Employee
              </th>
              <th className="px-4 py-2 text-left font-semibold text-slate-600">
                Type
              </th>
              <th className="px-4 py-2 text-left font-semibold text-slate-600">
                Start
              </th>
              <th className="px-4 py-2 text-left font-semibold text-slate-600">
                End
              </th>
              <th className="px-4 py-2 text-left font-semibold text-slate-600">
                Reason
              </th>
              <th className="px-4 py-2 text-left font-semibold text-slate-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-slate-500">
                  Loading leave requests...
                </td>
              </tr>
            )}

            {!loading && leaves.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-slate-500">
                  No leave requests yet.
                </td>
              </tr>
            )}

            {!loading &&
              leaves.map((leave) => (
                <tr key={leave._id || leave.id}   className="border-t border-slate-100 hover:bg-slate-50"
                >
                  <td className="px-4 py-2 align-top">
                    <div className="font-medium text-slate-800">
                      {leave.employeeName || '-'}
                    </div>
                    <div className="text-xs text-slate-500">
                      {leave._id || leave.id}
                    </div>
                  </td>
                  <td className="px-4 py-2 align-top">
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                      {leave.leaveType || '-'}
                    </span>
                  </td>
                  <td className="px-4 py-2 align-top text-slate-700">
                    {formatDate(leave.startDate)}
                  </td>
                  <td className="px-4 py-2 align-top text-slate-700">
                    {formatDate(leave.endDate)}
                  </td>
                  <td className="px-4 py-2 align-top text-slate-700 max-w-xs">
                    <p className="line-clamp-3 text-xs md:text-sm">
                      {leave.reason || '-'}
                    </p>
                  </td>
                  <td className="px-4 py-2 align-top">
                    <select
                      value={leave.status||'Pending'}
                      onChange={(e) =>
                        onStatusChange(
                          leave._id || leave.id,
                          e.target.value
                        )
                      }
                      disabled={updatingId === (leave._id || leave.id)}
                      className="block w-32 rounded-md border border-slate-300 bg-white px-2 py-1 text-xs md:text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaveTable;