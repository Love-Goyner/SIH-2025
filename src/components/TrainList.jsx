import React from "react";

export default function TrainList({trains = [], onSelect}){
  return (
    <div className="bg-white p-3 rounded-xl shadow h-64 overflow-auto">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">Active Trains</h3>
        <div className="text-xs text-slate-400">Total: {trains.length}</div>
      </div>
      <table className="w-full text-sm">
        <thead className="text-slate-500 text-xs">
          <tr>
            <th className="text-left">Train</th>
            <th>ETA</th>
            <th>Delay</th>
          </tr>
        </thead>
        <tbody>
          {trains.map(t => (
            <tr key={t.id} className="border-t hover:bg-slate-50 cursor-pointer" onClick={()=>onSelect && onSelect(t)}>
              <td className="py-2">
                <div className="font-medium">{t.no} <span className="text-xs text-slate-400">· {t.type}</span></div>
                <div className="text-xs text-slate-400">{t.name}</div>
              </td>
              <td className="text-center">{t.eta}</td>
              <td className="text-center">{t.delay}m</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
