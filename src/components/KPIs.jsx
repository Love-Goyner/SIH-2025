import React, { useEffect, useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement,
  BarElement, ArcElement, Title, Tooltip, Legend
);

export default function KPIs({ trains = [] }) {
  const [prevAvgDelay, setPrevAvgDelay] = useState(0);

  // Main KPIs
  const avgDelay = Math.round((trains.reduce((s,t)=>s+t.delay,0)/Math.max(1,trains.length))*10)/10;
  const throughput = Math.max(0, Math.round(trains.length / 2));
  const punctuality = Math.max(0, Math.round(100 - avgDelay));
  const onTime = trains.filter(t => t.delay <= 5).length;
  const delayed = trains.length - onTime;
  const avgSpeed = Math.round((trains.reduce((s,t)=>s+t.speed,0)/Math.max(1,trains.length))*10)/10;

  const delayTrendArrow = avgDelay < prevAvgDelay ? '↑' : avgDelay > prevAvgDelay ? '↓' : '→';
  useEffect(()=> { setPrevAvgDelay(avgDelay); }, [avgDelay]);

  // Delay Trend (main chart)
  const delayTrendData = {
    labels: trains.map((t,i)=>`Train ${i+1}`),
    datasets: [{
      label: "Delay (min)",
      data: trains.map(t=>t.delay),
      borderColor: "rgb(34,197,94)",
      backgroundColor: "rgba(34,197,94,0.2)",
      tension: 0.3
    }]
  };

  const throughputData = {
    labels: ["Hour 1","Hour 2","Hour 3","Hour 4","Hour 5"],
    datasets:[{
      label:"Trains/hr",
      data:[2,3,1,4,2],
      backgroundColor:"rgb(59,130,246)"
    }]
  };

  const punctualityData = {
    labels:["On Time","Delayed"],
    datasets:[{
      data:[onTime,delayed],
      backgroundColor:["rgb(34,197,94)","rgb(251,191,36)"]
    }]
  };

  // Sparkline for horizontal scroll
  const sparklineData = (train) => ({
    labels: train.delays || [train.delay],
    datasets: [{
      data: train.delays || [train.delay],
      borderColor: "rgb(14,165,233)",
      backgroundColor: "rgba(14,165,233,0.2)",
      tension: 0.3
    }]
  });

  return (
    <div>
      <h3 className="font-semibold mb-4 text-xl">Performance & KPIs 🚄</h3>

      {/* KPI cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-sky-50 rounded">
          <div className="text-xs text-slate-500">Avg Delay (min)</div>
          <div className="text-2xl font-bold flex items-center">
            {avgDelay} <span className={`ml-2 ${delayTrendArrow==='↑'?'text-green-500':delayTrendArrow==='↓'?'text-red-500':'text-gray-500'}`}>{delayTrendArrow}</span>
          </div>
        </div>
        <div className="p-4 bg-emerald-50 rounded">
          <div className="text-xs text-slate-500">Throughput</div>
          <div className="text-2xl font-bold">{throughput}</div>
        </div>
        <div className="p-4 bg-amber-50 rounded">
          <div className="text-xs text-slate-500">Punctuality (%)</div>
          <div className="text-2xl font-bold">{punctuality}</div>
        </div>
        <div className="p-4 bg-pink-50 rounded">
          <div className="text-xs text-slate-500">Avg Speed (km/h)</div>
          <div className="text-2xl font-bold">{avgSpeed}</div>
        </div>
      </div>

      {/* Main Delay Trend chart (big) */}
      <div className="mb-6">
        <div className="text-sm font-semibold mb-2">Delay Trend (Main)</div>
        <Line data={delayTrendData} className="h-64"/>
      </div>

      {/* Horizontal scroll train delay charts */}
      <div className="mb-6">
        <div className="text-sm font-semibold mb-2">Train Delay Trends (Horizontal Scroll)</div>
        <div className="overflow-x-auto flex space-x-4 pb-2">
          {trains.map((train,idx)=>(
            <div key={idx} className="min-w-[180px] p-2 bg-slate-50 rounded text-xs">
              <div className="font-semibold mb-1">{train.name || `Train ${idx+1}`}</div>
              <Line data={sparklineData(train)} options={{
                responsive:true,
                plugins:{legend:{display:false}},
                scales:{x:{display:false},y:{display:false}}
              }} className="h-20"/>
            </div>
          ))}
        </div>
      </div>

      {/* Other charts */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="text-sm font-semibold mb-2">Throughput</div>
          <Bar data={throughputData} className="h-25"/>
        </div>
        <div>
          <div className="text-sm font-semibold mb-2">Punctuality</div>
          <Pie data={punctualityData} className="h-36"/>
        </div>
      </div>
    </div>
  );
}
