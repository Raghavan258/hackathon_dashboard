export default function PlantCard({ plant, onClick }) {
  return (
    <div className="card" onClick={() => onClick(plant)}>
      <img src={plant.images[0]} alt={plant.localName} />
      <div className="meta">
        <h3>{plant.localName}</h3>
        <p><i>{plant.biologicalName}</i></p>
      </div>
    </div>
  );
}
