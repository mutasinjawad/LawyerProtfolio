import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const position = [23.7302886, 90.4019035]; // Set latitude and longitude

  return (
    <MapContainer center={position} zoom={15} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Dhaka, Bangladesh</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
