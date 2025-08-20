import { useState } from "react";

export default function SearchBar({ onSearch, onClear }) {
  const [coord, setCoord] = useState(""); // "lat, lng"
  const [radius, setRadius] = useState(200); // meters

  const submit = () => onSearch(coord, Number(radius) || 200);

  return (
    <div className="panel">
      <div className="search-row">
        <input
          type="text"
          placeholder="Enter GPS coordinates, e.g., 16.4423, 80.6229"
          value={coord}
          onChange={(e) => setCoord(e.target.value)}
        />
        <input
          type="number"
          min="10"
          step="10"
          placeholder="Radius (m)"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        />
        <button onClick={submit}>Search</button>
        <button className="clear-btn" onClick={onClear}>Clear</button>
      </div>
    </div>
  );
}
