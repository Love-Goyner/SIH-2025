import React, {useState} from "react";

export default function IncidentPanel({onReport}){
  const [msg, setMsg] = useState('');
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-2">Incident Management</h3>
      <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} className="w-full border rounded p-2 mb-2" rows="3" placeholder="Describe incident (e.g., loco failure at Station C)"></textarea>
      <div className="flex gap-2">
        <button className="flex-1 py-2 rounded border" onClick={()=>{
          if(!msg) return alert('Enter incident description');
          onReport(msg);
          setMsg('');
        }}>Report</button>
        <button className="flex-1 py-2 rounded bg-red-500 text-white" onClick={()=>{setMsg('');}}>Clear</button>
      </div>
    </div>
  );
}
