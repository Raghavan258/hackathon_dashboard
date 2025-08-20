export default function PlantModal({ plant, onClose }) {
  if (!plant) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <article className="modal" onClick={(e) => e.stopPropagation()}>
        <header>
          <h2>{plant.localName} <span style={{fontWeight:400, color:"#6b7280"}}>— <i>{plant.biologicalName}</i></span></h2>
          <button onClick={onClose} style={{background:"transparent", border:"none", fontSize:22, cursor:"pointer"}}>✕</button>
        </header>

        <div className="content">
          {/* Images */}
          <section className="images">
            {plant.images.map((src, i) => (
              <img key={i} src={src} alt={`${plant.localName}-${i}`} />
            ))}
          </section>

          {/* Key fields */}
          <section className="details">
            <div className="kv">
              <div className="k">Local Name</div>
              <div className="v">{plant.localName}</div>
            </div>
            <div className="kv">
              <div className="k">Biological Name</div>
              <div className="v"><i>{plant.biologicalName}</i></div>
            </div>
            <div className="kv">
              <div className="k">Family</div>
              <div className="v">{plant.family}</div>
            </div>
            <div className="kv">
              <div className="k">Venation</div>
              <div className="v">{plant.venation}</div>
            </div>
            <div className="kv">
  <div className="k">Coordinates</div>
  <div className="v">{plant.lat}, {plant.lng}</div>
</div>

            <div className="kv" style={{gridColumn:"span 2"}}>
              <div className="k">Family Characteristics</div>
              <div className="v" style={{fontWeight:500}}>{plant.familyCharacteristics}</div>
            </div>
            <div className="kv">
              <div className="k">Water Intake / week</div>
              <div className="v">{plant.waterIntakePerWeekLiters} L</div>
            </div>
            <div className="kv">
              <div className="k">Oxygen / year</div>
              <div className="v">{plant.oxygenPerYearKg} kg</div>
            </div>
            <div className="kv">
              <div className="k">CO₂ Purified / year</div>
              <div className="v">{plant.co2PurifiedPerYearKg} kg</div>
            </div>
            <div className="kv" style={{gridColumn:"span 2"}}>
              <div className="k">Specific Uses</div>
              <div className="v" style={{fontWeight:500}}>{plant.uses}</div>
            </div>
          </section>
        </div>

        <footer>
          <button onClick={onClose}>Close</button>
        </footer>
      </article>
    </div>
  );
}
