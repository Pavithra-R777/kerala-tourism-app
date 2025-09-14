import React, { useState } from "react";

export default function DistrictDetail({ district }) {
  const [activeTab, setActiveTab] = useState("visitingPlaces");

  return (
    <div className="district-detail">
      <h2>{district.name}</h2>
      <div className="tabs">
        {Object.keys(district.categories).map((cat) => (
          <button
            key={cat}
            className={activeTab === cat ? "active" : ""}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="places-grid">
        {district.categories[activeTab].map((place, i) => (
          <div key={i} className="place-card">
            <img src={place.image} alt={place.name} />
            <p>{place.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
