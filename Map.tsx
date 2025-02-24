import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Hospital } from '../types';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  shadowSize: [41, 41]
});

interface MapProps {
  hospitals: Hospital[];
  onHospitalSelect: (hospital: Hospital) => void;
}

export default function Map({ hospitals, onHospitalSelect }: MapProps) {
  return (
    <div className="relative">
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        className="w-full h-[50vh] md:h-[60vh] lg:h-[600px] rounded-lg shadow-md"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hospitals.map((hospital) => (
          <Marker
            key={hospital.id}
            position={[hospital.latitude, hospital.longitude]}
            icon={icon}
            eventHandlers={{
              click: () => onHospitalSelect(hospital)
            }}
          >
            <Popup className="custom-popup">
              <div className="p-2">
                <h3 className="font-bold text-blue-900">{hospital.name}</h3>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="flex items-center gap-1">
                    <span className="font-semibold">Available Beds:</span>
                    <span className="bg-blue-100 px-2 py-0.5 rounded-full">
                      {hospital.availableBeds}
                    </span>
                  </p>
                  <p className="text-gray-600">{hospital.address}</p>
                  <p className="text-blue-600 hover:text-blue-800">
                    <a href={`tel:${hospital.contact}`}>{hospital.contact}</a>
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}