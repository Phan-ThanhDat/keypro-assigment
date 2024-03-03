import { Map, ObjectInstruction, PointsRenderer, Sidebar } from "@components";

export function HomePage() {
  return (
    <div className="px-4 h-full flex-1 overflow-hidden">
      <div className="flex bg-white rounded-tl-xl rounded-tr-xl h-full flex-shrink-0">
        <Sidebar />
        <div className="w-full flex flex-col">
          <div className="h-full flex-1 relative rounded-tr-xl overflow-hidden">
            <Map>
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
