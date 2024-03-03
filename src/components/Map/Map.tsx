import React, { useCallback } from "react";

import { config } from "@configs";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useBoardStore } from "@stores/board";

export interface MapProps {
  children?: React.ReactNode;
}

const defaultProps = {
  center: {
    lat: 60.2014,
    lng: 24.9628,
  },
  zoom: 5,
};

export function Map(props: MapProps) {
  const { children } = props;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: config.GOOGLE_MAP_API_KEY,
  });

  const setBoard = useBoardStore((state) => state.set);

  const onLoad = useCallback(
    function callback(map: google.maps.Map) {
      setBoard((state) => {
        state.map = map;
      });
      map.setZoom(defaultProps.zoom);
      map.addListener("click", (mapsMouseEvent: google.maps.KmlMouseEvent) => {
        const objectType = useBoardStore.getState().currentType;

        // Maybe we should not set marker if the user dont select an object type. Improve performance because some components are listening to this state
        if (objectType === undefined) return;

        const lat = mapsMouseEvent.latLng?.lat();
        const lng = mapsMouseEvent.latLng?.lng();
        if (!lat || !lng) return;
        setBoard((state) => {
          state.currentMarker = { lat, lng };
        });
      });
    },
    [setBoard],
  );

  const onUnmount = useCallback(
    function callback() {
      setBoard((state) => {
        state.map = undefined;
      });
    },
    [setBoard],
  );

  return (
    <>
      {isLoaded && (
        <>
          <GoogleMap
            options={{
              mapTypeControl: false,
              streetViewControl: false,
              fullscreenControl: false,
              zoomControl: false,
              clickableIcons: false,
              zoom: defaultProps.zoom,
              // gestureHandling: "none",
              disableDefaultUI: true,
            }}
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
            center={{
              lat: defaultProps.center.lat,
              lng: defaultProps.center.lng,
            }}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {children}
          </GoogleMap>
        </>
      )}
    </>
  );
}
