import React, { useState, useEffect } from "react";

export default function MapView({ trains = [], onSelectTrain }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTrain, setSelectedTrain] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTrainClick = (train) => {
    setSelectedTrain(train);
    if (onSelectTrain) onSelectTrain(train);
  };

  return (
    <div style={styles.container}>
      <div style={styles.monitorFrame}>
        <div style={styles.monitorTop}>
          <div style={styles.monitorBrand}>RAILTRACK SYSTEMS | LIVE MONITORING</div>
        </div>
        <div style={styles.monitorScreen}>
          <svg viewBox="0 0 1000 520" style={styles.svg}>
            {/* Definitions */}
            <defs>
              <linearGradient id="terrain-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e6f0f8" />
                <stop offset="70%" stopColor="#d4e5f4" />
                <stop offset="100%" stopColor="#c2d9ef" />
              </linearGradient>
              
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 0 0 L 50 0 50 50" fill="none" stroke="rgba(100, 148, 237, 0.2)" strokeWidth="0.5" />
              </pattern>
              
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              
              <linearGradient id="track-gravel" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#b0a090" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#9c8c7c" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            
            {/* Background */}
            <rect width="100%" height="100%" fill="url(#terrain-gradient)" />
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Terrain features */}
            <ellipse cx="250" cy="450" rx="120" ry="40" fill="#d9e6f2" />
            <ellipse cx="800" cy="470" rx="150" ry="50" fill="#d9e6f2" />
            <ellipse cx="600" cy="100" rx="80" ry="30" fill="#d9e6f2" />
            
            {/* Tracks - base */}
            <g stroke="#888" strokeWidth="4" strokeLinecap="round">
              <path d="M50 120 C200 100 400 180 600 150 C800 120 950 140 950 140" fill="none" />
              <path d="M50 260 C200 240 400 320 600 290 C800 260 950 280 950 280" fill="none" />
              <path d="M50 400 C200 380 400 460 600 430 C800 400 950 420 950 420" fill="none" />
            </g>
            
            {/* Track gravel */}
            <g strokeWidth="6">
              <path d="M50 120 C200 100 400 180 600 150 C800 120 950 140 950 140" stroke="url(#track-gravel)" />
              <path d="M50 260 C200 240 400 320 600 290 C800 260 950 280 950 280" stroke="url(#track-gravel)" />
              <path d="M50 400 C200 380 400 460 600 430 C800 400 950 420 950 420" stroke="url(#track-gravel)" />
            </g>
            
            {/* Rails */}
            <g stroke="#666" strokeWidth="2">
              <path d="M50 118 C200 98 400 178 600 148 C800 118 950 138 950 138" fill="none" />
              <path d="M50 122 C200 102 400 182 600 152 C800 122 950 142 950 142" fill="none" />
              
              <path d="M50 258 C200 238 400 318 600 288 C800 258 950 278 950 278" fill="none" />
              <path d="M50 262 C200 242 400 322 600 292 C800 262 950 282 950 282" fill="none" />
              
              <path d="M50 398 C200 378 400 458 600 428 C800 398 950 418 950 418" fill="none" />
              <path d="M50 402 C200 382 400 462 600 432 C800 402 950 422 950 422" fill="none" />
            </g>
            
            {/* Railroad ties */}
            <g stroke="#8c7355" strokeWidth="2">
              {/* First track ties */}
              {Array.from({ length: 20 }).map((_, i) => {
                const t = i / 19;
                const x = 50 + t * 900;
                const y = 120 + (t * 20) + (Math.sin(t * 2) * 10);
                return <line key={i} x1={x} y1={y} x2={x} y2={y - 5} />;
              })}
              
              {/* Second track ties */}
              {Array.from({ length: 20 }).map((_, i) => {
                const t = i / 19;
                const x = 50 + t * 900;
                const y = 260 + (t * 20) + (Math.sin(t * 2) * 10);
                return <line key={i} x1={x} y1={y} x2={x} y2={y - 5} />;
              })}
              
              {/* Third track ties */}
              {Array.from({ length: 20 }).map((_, i) => {
                const t = i / 19;
                const x = 50 + t * 900;
                const y = 400 + (t * 20) + (Math.sin(t * 2) * 10);
                return <line key={i} x1={x} y1={y} x2={x} y2={y - 5} />;
              })}
            </g>
            
            {/* Stations */}
            <g className="stations">
              <g transform="translate(70, 100)">
                <rect x="-15" y="-8" width="30" height="16" rx="2" fill="#5a7ea3" />
                <text x="0" y="4" textAnchor="middle" fill="#f8fafc" fontSize="10">Station A</text>
              </g>
              
              <g transform="translate(420, 180)">
                <circle r="10" fill="#5a7ea3" />
                <text x="0" y="4" textAnchor="middle" fill="#f8fafc" fontSize="10">Junction B</text>
              </g>
              
              <g transform="translate(700, 140)">
                <rect x="-15" y="-8" width="30" height="16" rx="2" fill="#5a7ea3" />
                <text x="0" y="4" textAnchor="middle" fill="#f8fafc" fontSize="10">Station C</text>
              </g>
            </g>
            
            {/* Signals */}
            <g className="signals">
              <g transform="translate(300, 90)">
                <rect x="-3" y="0" width="6" height="15" fill="#666" />
                <circle cx="0" cy="-5" r="5" fill="#ef4444" />
              </g>
              
              <g transform="translate(600, 250)">
                <rect x="-3" y="0" width="6" height="15" fill="#666" />
                <circle cx="0" cy="-5" r="5" fill="#10b981" />
              </g>
              
              <g transform="translate(750, 390)">
                <rect x="-3" y="0" width="6" height="15" fill="#666" />
                <circle cx="0" cy="-5" r="5" fill="#ef4444" />
              </g>
            </g>
            
            {/* Trains */}
            {trains.map((train) => (
              <g 
                key={train.id} 
                transform={`translate(${train.x}, ${train.y})`} 
                style={{ cursor: 'pointer' }}
                onClick={() => handleTrainClick(train)}
                filter="url(#glow)"
              >
                <rect x="-20" y="-10" width="40" height="20" rx="4" fill={train.color} stroke="#1e40af" strokeWidth="0.8" />
                <circle cx="-12" cy="12" r="4" fill="#374151" />
                <circle cx="12" cy="12" r="4" fill="#374151" />
                <rect x="-18" y="-7" width="10" height="5" rx="1" fill="#dbeafe" />
                <text x="0" y="5" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="700">{train.no}</text>
                <title>{train.name} — Delay: {train.delay}m — Priority: {train.priority}</title>
              </g>
            ))}
          </svg>
        </div>
      </div>
      
      <div style={styles.mapOverlay}>
        <div style={styles.mapTitle}>Central Rail Network</div>
        <div style={styles.mapScale}>Scale: 1:42,000 | {currentTime.toLocaleTimeString()}</div>
      </div>
      
      {selectedTrain && (
        <div style={styles.trainInfoPanel}>
          <div style={styles.trainInfoHeader}>
            <h3 style={styles.trainInfoTitle}>Train {selectedTrain.no}</h3>
            <button style={styles.closeButton} onClick={() => setSelectedTrain(null)}>×</button>
          </div>
          <div style={styles.trainInfoDetails}>
            <p><strong>Name:</strong> {selectedTrain.name}</p>
            <p><strong>Status:</strong> <span style={selectedTrain.delay > 0 ? styles.delayed : styles.onTime}>
              {selectedTrain.delay > 0 ? `Delayed by ${selectedTrain.delay} minutes` : 'On Time'}
            </span></p>
            <p><strong>Priority:</strong> {selectedTrain.priority}</p>
            <p><strong>Speed:</strong> {Math.round(60 + Math.random() * 40)} km/h</p>
            <p><strong>Next Stop:</strong> Station C (ETA: 12:45)</p>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    height: '520px',
    position: 'relative',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  monitorFrame: {
    background: '#f8fafc',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #cbd5e1',
    position: 'relative',
    height: '100%',
    boxSizing: 'border-box',
  },
  monitorTop: {
    height: '30px',
    background: '#e2e8f0',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    marginBottom: '-1px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #cbd5e1',
  },
  monitorBrand: {
    color: '#475569',
    fontSize: '0.8rem',
    fontWeight: '500',
  },
  monitorScreen: {
    background: '#f1f5f9',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.05)',
    height: 'calc(100% - 30px)',
    boxSizing: 'border-box',
    border: '1px solid #e2e8f0',
  },
  svg: {
    width: '100%',
    height: '100%',
  },
  mapOverlay: {
    position: 'absolute',
    top: '35px',
    left: '35px',
    zIndex: 10,
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '10px 15px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  mapTitle: {
    fontWeight: '600',
    marginBottom: '5px',
    color: '#334155',
  },
  mapScale: {
    fontSize: '0.8rem',
    color: '#64748b',
  },
  trainInfoPanel: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    background: 'rgba(255, 255, 255, 0.95)',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: '15px',
    width: '250px',
    zIndex: 10,
    color: '#334155',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  trainInfoHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '10px',
  },
  trainInfoTitle: {
    margin: 0,
    fontSize: '1.2rem',
    color: '#1e293b',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    color: '#64748b',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: 0,
    width: '30px',
    height: '30px',
  },
  trainInfoDetails: {
    fontSize: '0.9rem',
  },
  onTime: {
    color: '#10b981',
    fontWeight: '500',
  },
  delayed: {
    color: '#ef4444',
    fontWeight: '500',
  },
};