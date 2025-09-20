import React from "react";

/*
  Simple decision card showing suggested action and override.
  In production, suggestions will come from optimization backend.
*/

export default function DecisionPanel({selected, onAction}){
  if(!selected) return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-2">Decision Support</h3>
      <p className="text-sm text-slate-500">Select a train on the map or list to see suggested actions (holds, reroutes).</p>
    </div>
  );

  const suggestion = `Hold ${selected.no} at next signal for 4 min to avoid conflict with higher-priority movement.`;

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-2">Decision Support</h3>
      <div className="mb-3">
        <div className="text-sm text-slate-500">Selected</div>
        <div className="font-medium">{selected.no} · {selected.name}</div>
        <div className="text-xs text-slate-400">{selected.type} · Priority: {selected.priority}</div>
      </div>

      <div className="mb-3 p-3 bg-slate-50 rounded">
        <div className="text-xs text-slate-500 mb-1">System suggestion</div>
        <div className="font-medium text-sm">{suggestion}</div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 py-2 rounded border" onClick={()=>onAction(`Accepted suggestion for ${selected.no}`)}>Accept</button>
        <button className="flex-1 py-2 rounded bg-amber-500 text-white" onClick={()=>onAction(`Overrode suggestion for ${selected.no}`)}>Override</button>
      </div>
    </div>
  );
}
