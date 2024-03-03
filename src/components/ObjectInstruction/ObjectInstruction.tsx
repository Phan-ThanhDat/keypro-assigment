import { BoardObjectType } from "@models";
import { useBoardStore } from "@stores/board";

import { PointForm } from "./PointForm";
import { PointInstruction } from "./PointInstruction";

export function ObjectInstruction() {
  const setBoard = useBoardStore((state) => state.set);

  const { marker, type, editingPoint } = useBoardStore((state) => {
    return {
      type: state.currentType,
      marker: state.currentMarker,
      editingPoint: state.editingPoint,
    };
  });

  function handleClose() {
    if (editingPoint) {
      setBoard((state) => {
        state.editingPoint = undefined;
      });
    }
    setBoard((state) => {
      state.currentType = undefined;
    });
  }

  const editingMode = !!editingPoint;

  return (
    <>
      {!editingMode && type === BoardObjectType.POINT && !marker && (
        <PointInstruction onClose={handleClose} />
      )}
      {((type === BoardObjectType.POINT && marker) || editingPoint) && (
        <PointForm
          key={editingPoint?.id}
          onClose={handleClose}
          point={editingPoint}
        />
      )}
    </>
  );
}
