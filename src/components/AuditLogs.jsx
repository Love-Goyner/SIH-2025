import React from "react";

export default function AuditLogs({logs = []}){
  return (
    <div className="bg-white p-3 rounded-xl shadow max-h-60 overflow-auto">
      <h3 className="font-semibold mb-2">Audit Trail</h3>
      <div className="text-xs text-slate-400 mb-2">Recent actions & system decisions</div>
      <ul className="space-y-2">
        {logs.length === 0 && <li className="text-sm text-slate-400">No actions yet.</li>}
        {logs.map((l,idx) => (
          <li key={idx} className="text-sm">
            <div className="text-xs text-slate-400">{l.time}</div>
            <div>{l.entry}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
