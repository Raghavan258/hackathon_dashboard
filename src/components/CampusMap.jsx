import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

const blueMarker = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
});

function FitToPlants({ plants }) {
  const map = useMap();
  useEffect(() => {
    if (!plants?.length) return;
    const bounds = L.latLngBounds(plants.map(p => [p.lat, p.lng]));
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [plants, map]);
  return null;
}

export default function CampusMap({ plants }) {
  const fallbackCenter = [16.4419, 80.6226];

  return (
    <div className="panel map-wrap">
      <MapContainer center={fallbackCenter} zoom={16} style={{ height: "100%", width: "100%", borderRadius: 12 }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {plants.map((p) => (
          <Marker key={p.id} position={[p.lat, p.lng]} icon={blueMarker}>
            <Popup>
              <b>{p.localName}</b><br />
              <i>{p.biologicalName}</i>
            </Popup>
          </Marker>
        ))}
        <FitToPlants plants={plants} />
      </MapContainer>
    </div>
  );
}
