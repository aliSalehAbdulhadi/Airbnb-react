import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapSection = () => {
  return (
    <div className="h-full w-full mt-10 border-t-[1px] pt-10">
      <div className="mb-5 font-cerealMedium text-xl">Where You will be.</div>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>Exact location provided after booking.</Popup>
        </Marker>
      </MapContainer>
      <div className="my-10">
        <h1 className="font-cerealMedium">Nordland, Norway</h1>
        <h2 className="font-cerealNormal my-3">
          First of all, you're on a cozy island-in the fall and spring, there's
          no one or few others on the island. In the summer, there are up to
          three families present, but it is not crowded.
        </h2>
        <button className="font-cerealMedium underline">Show more</button>
      </div>
    </div>
  );
};

export default MapSection;
