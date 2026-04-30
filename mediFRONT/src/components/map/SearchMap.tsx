import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Doctor } from '../../types/doctor';

// Fix for default marker icon
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface SearchMapProps {
  doctors: Doctor[];
}

const SearchMap: React.FC<SearchMapProps> = ({ doctors }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);
  const markersLayer = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (mapRef.current && !leafletMap.current) {
      // Initialize map
      leafletMap.current = L.map(mapRef.current).setView([19.4326, -99.1332], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(leafletMap.current);

      markersLayer.current = L.layerGroup().addTo(leafletMap.current);
    }

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (markersLayer.current && leafletMap.current) {
      markersLayer.current.clearLayers();

      const markers: L.Marker[] = [];
      doctors.forEach((doc) => {
        const marker = L.marker([doc.location.lat, doc.location.lng])
          .bindPopup(`<b>${doc.name}</b><br>${doc.specialty}`);
        marker.addTo(markersLayer.current!);
        markers.push(marker);
      });

      if (markers.length > 0) {
        const group = L.featureGroup(markers);
        leafletMap.current.fitBounds(group.getBounds().pad(0.1));
      }
    }
  }, [doctors]);

  return (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-inner border border-slate-200">
      <div ref={mapRef} className="w-full h-full z-0" />
    </div>
  );
};

export default SearchMap;
