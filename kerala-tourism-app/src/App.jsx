import React, { useState } from 'react'
import TripPlanner from './components/TripPlanner'
import TripJournal from './components/TripJournal'
import Districts from "./components/Districts.jsx";
import DistrictDetail from "./components/DistrictDetail.jsx";



export default function App(){
  const [view, setView] = useState('planner')
  const [selectedDistrict, setSelectedDistrict] = useState(null)

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Kerala Tour Buddy</h1>
        <nav>
          <button onClick={()=>{setView('planner');setSelectedDistrict(null)}} className={view==='planner' ? 'active' : ''}>Trip Planner</button>
          <button onClick={()=>{setView('journal');setSelectedDistrict(null)}} className={view==='journal' ? 'active' : ''}>Trip Journal</button>
          <button onClick={()=>{setView('districts');setSelectedDistrict(null)}} className={view==='districts' ? 'active' : ''}>Explore Districts</button>
        </nav>
      </header>

      <main>
        {view === 'planner' && <TripPlanner />}
        {view === 'journal' && <TripJournal />}
        {view === 'districts' && !selectedDistrict && <Districts onSelectDistrict={setSelectedDistrict}/>}
        {view === 'districts' && selectedDistrict && <DistrictDetail districtId={selectedDistrict} onBack={()=>setSelectedDistrict(null)} />}
      </main>

      <footer>
        <small>Prototype — stores data locally. Swap to Firebase/Firestore for cloud save.</small>
      </footer>
    </div>
  )
}
