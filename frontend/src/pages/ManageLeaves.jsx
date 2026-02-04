import React, { useEffect, useState } from 'react';
import LeaveTable from '../components/LeaveTable';

function ManageLeaves() {
  const [leaves, setLeaves]=useState([]);
  const [loading, setLoading]=useState(true);
  const [updatingId, setUpdatingId]=useState(null);
  const [error, setError]=useState('');

  async function fetchLeaves() {
    try {
      setLoading(true);
      setError('');

      const res = await fetch('https://leavemanagementbackend-cp8h.onrender.com/api/leaves', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data=await res.json()

      if (!res.ok) {
        const message = data?.message || 'Failed to fetch leave requests.';
        throw new Error(message);
      }

      setLeaves(Array.isArray(data) ? data : data.leaves || []);
    } catch (err) {
      setError(err.message || 'Failed to fetch leave requests.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLeaves();
  }, []);

  async function handleStatusChange(id, status) {
    setUpdatingId(id);
    setError('');
    try {
      const res = await fetch(`https://leavemanagementbackend-cp8h.onrender.com/api/leaves/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });

      const data=await res.json()

      if (!res.ok) {
        const message=data?.message ||'Failed to update status.';
        throw new Error(message);
      }

      setLeaves((prev) =>
        prev.map((leave) =>
          (leave._id || leave.id)===id?{ ...leave, status } : leave
        )
      );
    } catch (err){
      setError(err.message||'Failed to update status.');
    } finally {
      setUpdatingId(null);
    }
  }

  return (
    <div className="space-y-4">
      <div className="mb-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          Manage Leaves
        </h1>
        <p className="text-sm text-slate-500">
          Admin-style view (not protected) to review and update leave
          request statuses.
        </p>
      </div>

      {error && (
        <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {error}
        </div>
      )}

      <LeaveTable
        leaves={leaves}
        loading={loading}
        onStatusChange={handleStatusChange}
        updatingId={updatingId}
      />
    </div>
  );
}

export default ManageLeaves;