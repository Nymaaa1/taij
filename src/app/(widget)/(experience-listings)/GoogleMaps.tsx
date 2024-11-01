"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function GoogleMaps() {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        version: "quarterly",
        apiKey: "AIzaSyAW8OE5hUYW8nXRzmS_OlGTXT3DkIJl8NY",
        id: "__googleMapsScriptId",
        libraries: [],
        url: "https://maps.googleapis.com/maps/api/js",
      });

      const { Map } = await loader.importLibrary("maps");

      const locationInMap = {
        lat: 47.91424348939048,
        lng: 106.87954558125375,
      };

      // MARKER
      const { Marker } = await loader.importLibrary("marker");

      const options: any = {
        center: locationInMap,
        zoom: 15,
        mapId: "NEXT_MAPS_TUTS",
      };

      const map = new Map(mapRef.current as HTMLDivElement, options);

      // add the marker in the map
      const marker = new Marker({
        map: map,
        position: locationInMap,
      });
    };

    initializeMap();
  }, []);

  return <div className="h-[600px]" ref={mapRef} />;
}
