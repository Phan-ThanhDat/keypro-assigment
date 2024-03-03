import { Map, ObjectInstruction, Sidebar } from "@components";
import { Location } from "@components/icons";
import { PointDisplay } from "@components/PointDisplay";
import { PointsRenderer } from "@components/PointsRenderer";
import { OverlayView, OverlayViewF } from "@react-google-maps/api";

function Test() {
  return (
    <OverlayViewF
      position={{
        lat: 60.22411316855324,
        lng: 24.881603493072994,
      }}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <PointDisplay size={32} lat={60.22411316855324} lng={24.881603493072994}>
        <Location />
      </PointDisplay>
    </OverlayViewF>
  );
}

export function HomePage() {
  return (
    <div className="px-4 h-full flex-1 overflow-hidden">
      <div className="flex bg-white rounded-tl-xl rounded-tr-xl h-full flex-shrink-0">
        <Sidebar />
        <div className="w-full flex flex-col">
          <div className="h-full flex-1 relative rounded-tr-xl overflow-hidden">
            <Map>
              <Test />
              <PointsRenderer />
            </Map>
            <ObjectInstruction />
          </div>
          <div className="flex py-1.5 px-3">
            <div className="flex items-center gap-1">
              <button className="bg-background text-xs py-0.5 px-1">
                Map data 2024 Keypro
              </button>
              <button className="bg-background text-xs py-0.5 px-1">
                Terms of Use
              </button>
              <button className="bg-background text-xs py-0.5 px-1">
                Report a map errors
              </button>
            </div>
            <div className="ml-auto">
              <p className="text-xs">60°12’05”N 24°57’43”E 7 m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
