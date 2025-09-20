import React, { useState } from "react";
import TopBar from "../components/TopBar";
import MapView from "../components/MapView";
import TrainList from "../components/TrainList";
import DecisionPanel from "../components/DecisionPanel";
import KPIs from "../components/KPIs";
import IncidentPanel from "../components/IncidentPanel";
import AuditLogs from "../components/AuditLogs";
import { mockTrainsInit } from "../data/mockTrains";

export default function Dashboard(){
  const [trains, setTrains] = React.useState(mockTrainsInit());
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [logs, setLogs] = useState([]);

  // simulate train updates
  React.useEffect(() => {
    const id = setInterval(() => {
      setTrains(prev => prev.map(t => {
        // simple simulated movement along x
        const nextPos = {...t};
        nextPos.x = (t.x + t.speed) % 900;
        // random small delay bump
        if (Math.random() < 0.02) nextPos.delay += Math.floor(Math.random()*3);
        return nextPos;
      }));
    }, 1200);
    return () => clearInterval(id);
  }, []);

  const addLog = (entry) => {
    setLogs(l => [{time: new Date().toLocaleString(), entry}, ...l].slice(0,200));
  }

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <div className="flex-1 p-4 space-y-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 bg-white rounded-xl shadow p-4">
            <MapView trains={trains} onSelectTrain={setSelectedTrain} />
          </div>
          <div className="col-span-4 space-y-4">
            <TrainList trains={trains} onSelect={setSelectedTrain} />
            <DecisionPanel selected={selectedTrain} onAction={(a)=>addLog(a)} />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 bg-white rounded-xl shadow p-4">
            <KPIs trains={trains} />
          </div>
          <div className="col-span-4 space-y-4">
            <IncidentPanel onReport={(r)=>addLog('Incident reported: '+r)} />
            <AuditLogs logs={logs} />
          </div>
        </div>
      </div>
    </div>
  );
}
