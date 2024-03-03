import { PointDisplay } from "@components";
import { Location } from "@components/icons";
import { OverlayView, OverlayViewF } from "@react-google-maps/api";

import { CurrentMarker } from "./CurrentMarker";
import { SavedPoints } from "./SavedPoints";

export function PointsRenderer() {
  return (
    <>
      <OverlayViewF
        position={{
          lat: 60.22411316855324,
          lng: 24.881603493072994,
        }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <PointDisplay
          size={32}
          lat={60.22411316855324}
          lng={24.881603493072994}
        >
          <Location />
        </PointDisplay>
      </OverlayViewF>
      <SavedPoints />
      <CurrentMarker />
    </>
  );
}
