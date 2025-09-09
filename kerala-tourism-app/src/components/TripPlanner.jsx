import React from "react";

export default function TripPlanner({ destination }) {
  return (
    <div className="card-form">
      <h2>Plan your trip to {destination.name}</h2>
      <p style={{ color: "#666" }}>Real-time trip sharing will appear here (WebSocket integration coming soon!)</p>
    </div>
  );
}
