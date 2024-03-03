import { useMemo } from "react";

import { Marker } from "@components/icons";
import { useGetPoints } from "@hooks";
import {
  MarkerClustererF,
  MarkerF,
  OverlayView,
  OverlayViewF,
} from "@react-google-maps/api";
import { useBoardStore } from "@stores/board";

export function SavedPoints() {
  const savedPoints = useGetPoints();

  const setBoard = useBoardStore((state) => state.set);
  const editingPoint = useBoardStore((state) => state.editingPoint);

  const points = useMemo(() => {
    if (savedPoints.data === undefined) return [];
    return savedPoints.data.filter((point) => {
      return point.id !== editingPoint?.id;
    });
  }, [editingPoint?.id, savedPoints.data]);

  // Edit point will be rendered on top of the cluster
  // so it will be visible even if it's in a cluster
  return (
    <>
      <MarkerClustererF minimumClusterSize={5}>
        {(clusterer) => (
          <>
            {points.map((loc) => (
              <MarkerF
                onClick={() => {
                  setBoard((state) => {
                    state.editingPoint = loc;
                  });
                }}
                key={loc.id}
                icon={{
                  url: "/add.png",
                }}
                position={{
                  lat: loc.lat,
                  lng: loc.lng,
                }}
                clusterer={clusterer}
              />
            ))}
          </>
        )}
      </MarkerClustererF>
      {editingPoint && (
        <OverlayViewF
          position={{
            lat: editingPoint.lat,
            lng: editingPoint.lng,
          }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div
            style={{
              transform: `translate(-20px, -48px)`,
            }}
          >
            <div className="text-[32px] editing-point">
              <Marker />
            </div>
          </div>
        </OverlayViewF>
      )}
    </>
  );
}
