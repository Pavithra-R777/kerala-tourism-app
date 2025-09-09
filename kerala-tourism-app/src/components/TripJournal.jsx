import React, { useState } from "react";

export default function TripJournal() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);

  const handleAdd = () => {
    if (entry.trim()) {
      setEntries([...entries, entry]);
      setEntry("");
    }
  };

  return (
    <div>
      <h2>Trip Journal</h2>
      <textarea
        placeholder="Write your experience..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button onClick={handleAdd}>Add Entry</button>

      <ul>
        {entries.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
