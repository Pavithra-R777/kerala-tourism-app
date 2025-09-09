import React from "react";

export default function DestinationCard({ destination, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(destination.id)}>
      <img 
        src={destination.image} 
        alt={destination.name} 
        className="card-image"
        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }}
      />
      <h3>{destination.name}</h3>
      <p>{destination.shortDescription}</p>
    </div>
  );
}
