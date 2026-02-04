import React, { useState } from 'react';
import LeaveForm from '../components/LeaveForm';

function ApplyLeave() {
  const [formData, setFormData]=useState({
    employeeName: '',
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: ''
  });
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState('');

  function handleChange(e) {
    const { name, value }=e.target;
    setFormData((prev)=>({
      ...prev,
      [name]: value
    }));
  }

  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('https://leavemanagementbackend-cp8h.onrender.com/api/leaves', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data=await res.json();

      if (!res.ok){
        const message=data?.message || 'Failed to submit leave request.';
        throw new Error(message);
      }
      if (data?.message){
        alert(data.message);
      }
      setFormData({
        employeeName: '',
        leaveType: '',
        startDate: '',
        endDate: '',
        reason: ''
      });
    } catch (err) {
      setError(err.message || 'Failed to submit leave request.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="mb-2">
        <h1 className="text-2xl font-semibold text-orange-900">
          Apply Leave
        </h1>
        <p className="text-sm text-slate-500">
          This page represents the employee-facing part of the application.
        </p>
      </div>

      <LeaveForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default ApplyLeave;