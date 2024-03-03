import { Marker, Plus } from "@components/icons";
import { BoardObjectType } from "@models";
import { OverlayView, OverlayViewF } from "@react-google-maps/api";
import { useBoardStore } from "@stores/board";

export function CurrentMarker() {
  const { type, marker, edittingPoint } = useBoardStore((state) => {
    return {
      marker: state.currentMarker,
      type: state.currentType,
      edittingPoint: state.editingPoint,
    };
  });

  const editingMode = !!edittingPoint;

  return (
    <>
      {!editingMode && type === BoardObjectType.POINT && marker && (
        <OverlayViewF
          position={marker}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div
            style={{
              transform: `translate(-${40 / 2}px, -60px)`,
            }}
          >
            <div className="text-[32px]">
              <Marker />
            </div>
            <div className="text-[24px] flex items-center justify-center">
              <Plus />
            </div>
          </div>
        </OverlayViewF>
      )}
    </>
  );
}
