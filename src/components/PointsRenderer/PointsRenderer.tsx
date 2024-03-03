import { CurrentMarker } from "./CurrentMarker";
import { SavedPoints } from "./SavedPoints";

export function PointsRenderer() {
  return (
    <>
      <SavedPoints />
      <CurrentMarker />
    </>
  );
}
