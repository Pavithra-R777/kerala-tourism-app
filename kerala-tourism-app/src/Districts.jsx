
import React from "react";

export default function Districts({ onSelectDistrict, districtData }) {
  return (
    <div className="districts-grid">
      {districtData.map((district) => (
        <div
          key={district.name}
          className="district-card"
          onClick={() => onSelectDistrict(district)}
        >
          <img src={district.image} alt={district.name} />
          <h3>{district.name}</h3>
        </div>
      ))}
    </div>
  );
}
