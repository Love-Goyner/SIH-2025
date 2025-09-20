import React from "react";
import { useNavigate } from "react-router-dom";

export default function TopBar(){
  const navigate = useNavigate();
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-sky-600 text-white font-bold px-3 py-2 rounded">IR</div>
          <div>
            <div className="font-semibold">Section Controller Console</div>
            <div className="text-xs text-slate-500">Realtime decision support · demo UI</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-slate-600">Shift: Day</div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center"  onClick={()=>navigate("/login")}>L</div>
            <div className="text-sm">Love</div>
          </div>
        </div>
      </div>
    </div>
  );
}
