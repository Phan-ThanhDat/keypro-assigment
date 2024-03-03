import { ObjectCard } from "@components";
import { PointAdd } from "@components/icons";

export interface PointInstructionProps {
  onClose: () => void;
}

export function PointInstruction(props: PointInstructionProps) {
  const { onClose } = props;

  return (
    <>
      <ObjectCard
        onClose={onClose}
        renderHeader={
          <>
            <div className="flex items-center">
              <span className="text-2xl">
                <PointAdd />
              </span>
              <p className="ml-2 font-bold">Add point</p>
            </div>
          </>
        }
      >
        <div className="px-4">
          <p className="text-sm">Click on the map to drop the point</p>
          <p className="mt-4 font-semibold">Location</p>
          <p className="mt-2">60°12’05”N 24°57’43”E</p>
        </div>
      </ObjectCard>
    </>
  );
}
