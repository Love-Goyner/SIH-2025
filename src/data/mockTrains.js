export function mockTrainsInit() {
  return [
    { id: 't1', no: '12345', name: 'Rajdhani Express', type: 'Express', priority: 'High', x: 80,  y: 120, speed: 10, eta: '00:42', delay: 2, color: '#0ea5a4', delays: [2,3,2,1,2] },
    { id: 't2', no: '54321', name: 'Freight 12', type: 'Freight', priority: 'Low', x: 240, y: 260, speed: 5, eta: '01:10', delay: 5, color: '#64748b', delays: [4,5,6,5,5] },
    { id: 't3', no: '09123', name: 'Local 78', type: 'Local', priority: 'Medium', x: 400, y: 400, speed: 7, eta: '00:20', delay: 0, color: '#f97316', delays: [0,1,0,0,0] },
    { id: 't4', no: '67890', name: 'Superfast 4', type: 'Superfast', priority: 'High', x: 540, y: 180, speed: 9, eta: '00:30', delay: 1, color: '#2563eb', delays: [1,2,1,1,0] },
    { id: 't5', no: '80011', name: 'Maintenance 2', type: 'Maintenance', priority: 'Low', x: 720, y: 280, speed: 4, eta: '02:15', delay: 0, color: '#10b981', delays: [0,0,1,0,0] },

    { id: 't6',  no: '12678', name: 'Shatabdi Express', type: 'Express', priority: 'High', x: 150, y: 340, speed: 6, eta: '00:55', delay: 0, color: '#9333ea', delays: [0,1,0,0,0] },
    { id: 't7',  no: '34012', name: 'Local 21', type: 'Local', priority: 'Medium', x: 300, y: 480, speed: 3, eta: '00:35', delay: 4, color: '#eab308', delays: [3,4,5,4,4] },
    { id: 't8',  no: '47890', name: 'Goods 45', type: 'Freight', priority: 'Low', x: 500, y: 320, speed: 2, eta: '01:40', delay: 7, color: '#57534e', delays: [6,7,8,7,7] },
    { id: 't9',  no: '23678', name: 'Passenger 9', type: 'Local', priority: 'Medium', x: 660, y: 200, speed: 4, eta: '00:50', delay: 1, color: '#22c55e', delays: [0,1,1,2,1] },
    { id: 't10', no: '11223', name: 'Duronto Express', type: 'Superfast', priority: 'High', x: 850, y: 420, speed: 8, eta: '00:25', delay: 0, color: '#dc2626', delays: [0,0,0,0,0] },

    { id: 't11', no: '55789', name: 'Freight 88', type: 'Freight', priority: 'Low', x: 940, y: 300, speed: 3, eta: '01:20', delay: 3, color: '#0f172a', delays: [2,3,4,3,3] },
    { id: 't12', no: '77890', name: 'Local 52', type: 'Local', priority: 'Medium', x: 1050, y: 500, speed: 4, eta: '00:15', delay: 0, color: '#facc15', delays: [0,0,0,0,0] },
    { id: 't13', no: '33445', name: 'Superfast 9', type: 'Superfast', priority: 'High', x: 1150, y: 260, speed: 7, eta: '00:40', delay: 2, color: '#14b8a6', delays: [1,2,2,3,2] },
    { id: 't14', no: '22334', name: 'Express Mail', type: 'Express', priority: 'High', x: 1250, y: 380, speed: 6, eta: '00:33', delay: 1, color: '#ef4444', delays: [1,1,2,1,1] },
    { id: 't15', no: '99001', name: 'Track Maintenance 5', type: 'Maintenance', priority: 'Low', x: 1350, y: 180, speed: 1, eta: '02:50', delay: 0, color: '#3b82f6', delays: [0,0,0,0,0] },
  ];
}
