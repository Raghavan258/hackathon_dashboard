export default function StatsPanel({ allPlants }) {
  const totalPlants = allPlants.length;
  const totalO2 = allPlants.reduce((s, p) => s + (p.oxygenPerYearKg || 0), 0);
  const totalCO2 = allPlants.reduce((s, p) => s + (p.co2PurifiedPerYearKg || 0), 0);

  const families = allPlants.reduce((acc, p) => {
    acc[p.family] = (acc[p.family] || 0) + 1;
    return acc;
  }, {});
  const topFamily = Object.entries(families).sort((a,b)=>b[1]-a[1])[0] || ["—", 0];

  return (
    <div className="panel">
      <h2 style={{marginBottom:12}}>Campus Dashboard</h2>
      <div className="stats">
        <div className="stat">
          <h4>Total Plants</h4>
          <div className="big">{totalPlants}</div>
        </div>
        <div className="stat">
          <h4>Total Oxygen / year</h4>
          <div className="big">{totalO2.toLocaleString()} kg</div>
        </div>
        <div className="stat">
          <h4>Total CO₂ Purified / year</h4>
          <div className="big">{totalCO2.toLocaleString()} kg</div>
        </div>
        <div className="stat">
          <h4>Most Common Family</h4>
          <div className="big">{topFamily[0]} ({topFamily[1]})</div>
        </div>
      </div>
    </div>
  );
}
