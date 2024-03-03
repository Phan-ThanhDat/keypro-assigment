import { Button, IconButton, Logo } from "@components";
import {
  Cursor,
  Locate,
  Pan,
  Redo,
  Undo,
  ZoomIn,
  ZoomOut,
} from "@components/icons";

export function AppHeader() {
  return (
    <header className="py-4 flex-shrink-0">
      <div className="px-4 mx-auto">
        <div className="flex items-center">
          <div className="flex items-center">
            <Logo />
            <h1 className="ml-3 text-[18px] leading-[24px]">
              Keypro Assignment
            </h1>
          </div>

          <div className="ml-auto flex items-center">
            <div className="flex gap-3">
              <div className="inline-flex bg-white p-1 rounded-xl">
                <IconButton>
                  <Undo />
                </IconButton>
                <IconButton>
                  <Redo />
                </IconButton>
              </div>

              <div className="inline-flex bg-white p-1 rounded-xl">
                <IconButton>
                  <Pan />
                </IconButton>
                <IconButton>
                  <Cursor />
                </IconButton>
              </div>

              <div className="inline-flex bg-white p-1 rounded-xl">
                <IconButton>
                  <Locate />
                </IconButton>
                <IconButton>
                  <ZoomOut />
                </IconButton>
                <IconButton>
                  <ZoomIn />
                </IconButton>
              </div>

              <Button disabled>Save as template</Button>
              <button className="w-9 h-9 inline-flex justify-center items-center font-medium bg-[#007AFF] text-white rounded-full border-[2px] border-white">
                A
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
