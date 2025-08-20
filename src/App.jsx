import { useState } from "react";
import { plants } from "./data";
import SearchBar from "./components/SearchBar";
import StatsPanel from "./components/StatsPanel";
import PlantCard from "./components/PlantCard";
import PlantModal from "./components/PlantModal";
import CampusMap from "./components/CampusMap";
import "./App.css";

export default function App() {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [filteredPlants, setFilteredPlants] = useState(plants);

  // Search by coordinates + radius
  const handleSearch = (coord, radius) => {
    const [lat, lng] = coord.split(",").map(Number);
    if (isNaN(lat) || isNaN(lng)) return;

    const filtered = plants.filter((p) => {
      const d = Math.sqrt(
        (p.lat - lat) ** 2 + (p.lng - lng) ** 2
      );
      return d < radius / 10000; // crude distance check
    });
    setFilteredPlants(filtered);
  };

  const handleClear = () => setFilteredPlants(plants);

  return (
    <div className="page">
      <header className="header">
        <h1>🌳 KL University Plantation Dashboard</h1>
      </header>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} onClear={handleClear} />

      <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: 20 }}>
        {/* Plant grid */}
        <div className="panel">
          <div className="grid">
            {filteredPlants.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                onClick={setSelectedPlant}
              />
            ))}
          </div>
        </div>

        {/* Dashboard panel */}
        <StatsPanel allPlants={filteredPlants} />
      </div>

      {/* Map */}
      <CampusMap plants={filteredPlants} />

      {/* Modal for plant details */}
      <PlantModal plant={selectedPlant} onClose={() => setSelectedPlant(null)} />
    </div>
  );
}
