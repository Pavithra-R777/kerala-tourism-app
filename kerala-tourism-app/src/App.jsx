import React, { useState } from "react";
import DestinationCard from "./components/DestinationCard";
import Booking from "./components/Booking";
import Reviews from "./components/Reviews";
import TripPlanner from "./components/TripPlanner"; // Don't forget to import TripPlanner
import "./index.css";

export default function App() {
  const [view, setView] = useState("destinations");
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    { id:1, name:"Kovalam Beach", shortDescription:"Famous for sunset views", image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" },
    { id:2, name:"Munnar Tea Gardens", shortDescription:"Scenic tea plantations", image:"https://images.unsplash.com/photo-1582908820413-7168b1e537b3?auto=format&fit=crop&w=400&q=80" },
    { id:3, name:"Padmanabhaswamy Temple", shortDescription:"Ancient temple with intricate carvings", image:"https://images.unsplash.com/photo-1611270257161-c6aa0fa0c6b2?auto=format&fit=crop&w=400&q=80" },
    { id:4, name:"Alleppey Backwaters", shortDescription:"Serene backwater experience", image:"https://images.unsplash.com/photo-1609865981462-8d6b2020f521?auto=format&fit=crop&w=400&q=80" },
    { id:5, name:"Athirappilly Falls", shortDescription:"Largest waterfall in Kerala", image:"https://images.unsplash.com/photo-1584003044348-3e324d3c3f3c?auto=format&fit=crop&w=400&q=80" },
    { id:6, name:"Fort Kochi", shortDescription:"Historic city with colonial vibes", image:"https://images.unsplash.com/photo-1597880286427-3d3a456d01b8?auto=format&fit=crop&w=400&q=80" },
    { id:7, name:"Varkala Beach", shortDescription:"Cliffside beach with stunning views", image:"https://images.unsplash.com/photo-1577368909750-6d60c930df9e?auto=format&fit=crop&w=400&q=80" },
    { id:8, name:"Wayanad Wildlife Sanctuary", shortDescription:"Rich flora and fauna", image:"https://images.unsplash.com/photo-1588500728604-1564d15f1b12?auto=format&fit=crop&w=400&q=80" },
    { id:9, name:"Thekkady", shortDescription:"Periyar wildlife and spice plantations", image:"https://images.unsplash.com/photo-1603987925128-2b899b5f2b42?auto=format&fit=crop&w=400&q=80" },
    { id:10, name:"Bekal Fort", shortDescription:"Historic fort with ocean view", image:"https://images.unsplash.com/photo-1582373287062-41b62a76e1e3?auto=format&fit=crop&w=400&q=80" }
  ];
  const handleSelect = (id) => {
    const dest = destinations.find(d => d.id === id);
    setSelectedDestination(dest);
    setView("booking");
  }

  return (
  <div>
    <h1 style={{ textAlign: "center", margin: "20px 0", color: "#2E8B57" }}>
      Kerala Tourism
    </h1>

    {/* Navigation Buttons */}
    <div className="nav-buttons">
      <button onClick={()=>setView("destinations")}>Destinations</button>
      <button onClick={()=>setView("booking")} disabled={!selectedDestination}>Booking</button>
      <button onClick={()=>setView("reviews")} disabled={!selectedDestination}>Reviews</button>
      <button onClick={() => setView("tripPlanner")} disabled={!selectedDestination}>Trip Planner</button>
    </div>

    {/* Conditional Views */}
    {view==="destinations" && (
      <div className="cards-container">
        {destinations.map(dest => (
          <DestinationCard key={dest.id} destination={dest} onSelect={handleSelect}/>
        ))}
      </div>
    )}

    {view==="booking" && selectedDestination && <Booking destination={selectedDestination} />}
    {view==="reviews" && selectedDestination && <Reviews destination={selectedDestination} />}
    {view==="tripPlanner" && selectedDestination && <TripPlanner destination={selectedDestination} />}
  </div>
);

}
