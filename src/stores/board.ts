import { Draft, produce } from "immer";
import { create } from "zustand";

import { BoardObjectType, PointMarker } from "@models";

export interface ChatState {
  map?: google.maps.Map;
  currentType?: BoardObjectType;
  currentMarker?: { lat: number; lng: number };
  points?: PointMarker[];
  editingPoint?: PointMarker;
  set: (cb: (state: Draft<ChatState>) => void) => void;
}

export const useBoardStore = create<ChatState>((set) => ({
  currentType: undefined,
  set: (cb: (state: Draft<ChatState>) => void) => {
    set(produce(cb));
  },
}));
