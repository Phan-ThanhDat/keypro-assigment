import SimpleBar from "simplebar-react";

import { LineSkeleton, ObjectButton } from "@components";
import { AA, Line, More, Note, Point, Polygon } from "@components/icons";
import { BoardObjectType } from "@models";
import { useBoardStore } from "@stores/board";

export function Sidebar() {
  const setBoard = useBoardStore((state) => state.set);
  const objectType = useBoardStore((state) => state.currentType);

  function handleObjectClick(type: BoardObjectType) {
    return () => {
      setBoard((state) => {
        if (state.currentType !== type) {
          state.currentType = type;
          state.currentMarker = undefined;
        }
      });
    };
  }

  return (
    <div className="w-[280px] flex flex-col h-full border-r border-[#EFF2F7] flex-shrink-0">
      <div className="pt-4 px-4">
        <div className="rounded-xl bg-background inline-flex p-1 items-center">
          <div className="py-1 px-2">Templates</div>
          <button className="py-1 px-2 bg-white rounded-lg ml-1">
            Add new
          </button>
        </div>
      </div>
      <div className="mt-5 px-4">
        <h2 className="font-semibold">Objects</h2>
        <div className="mt-2 grid grid-cols-3 gap-2">
          <ObjectButton
            active={objectType === BoardObjectType.TEXT}
            icon={<AA />}
            label="Text"
            onClick={handleObjectClick(BoardObjectType.TEXT)}
          />
          <ObjectButton
            active={objectType === BoardObjectType.POINT}
            icon={<Point />}
            label="Point"
            onClick={handleObjectClick(BoardObjectType.POINT)}
          />
          <ObjectButton
            active={objectType === BoardObjectType.LINE}
            icon={<Line />}
            label="Line"
            onClick={handleObjectClick(BoardObjectType.LINE)}
          />
          <ObjectButton
            active={objectType === BoardObjectType.POLYGON}
            icon={<Polygon />}
            label="Polygon"
            onClick={handleObjectClick(BoardObjectType.POLYGON)}
          />
          <ObjectButton
            active={objectType === BoardObjectType.NOTE}
            icon={<Note />}
            label="Note"
            onClick={handleObjectClick(BoardObjectType.NOTE)}
          />
          <ObjectButton
            icon={<More />}
            label="More"
            onClick={handleObjectClick(BoardObjectType.MORE)}
          />
        </div>
      </div>
      <div className="mt-5 px-4">
        <h2 className="font-semibold">Recents</h2>
      </div>
      <div className="h-full mt-2 overflow-hidden flex-1 flex flex-col">
        <div className="flex-1 h-full flex">
          <SimpleBar
            style={{
              height: "100%",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="px-4">
              {Array.from({ length: 60 }).map((_, index) => (
                <div key={index} className="mb-2">
                  <LineSkeleton />
                </div>
              ))}
            </div>
          </SimpleBar>
        </div>
      </div>
    </div>
  );
}
