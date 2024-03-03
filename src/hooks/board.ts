import { PointMarker } from "@models";
import { useBoardStore } from "@stores/board";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useSavePoint() {
  const setBoard = useBoardStore((state) => state.set);
  const client = useQueryClient();
  return useMutation({
    mutationFn: async (data: Omit<PointMarker, "id">) => {
      const raw = localStorage.getItem("points");
      const points = raw ? JSON.parse(raw) : [];
      points.push({
        ...data,
        id: new Date().getTime(),
      });
      localStorage.setItem("points", JSON.stringify(points));
      setBoard((state) => {
        state.points = points;
        client.invalidateQueries({
          queryKey: ["points"],
        });
      });
    },
  });
}

export function useGetPoints() {
  const setBoard = useBoardStore((state) => state.set);
  return useQuery({
    queryKey: ["points"],
    queryFn: async () => {
      const raw = localStorage.getItem("points");
      try {
        const points = raw ? JSON.parse(raw) : [];
        setBoard((state) => {
          state.points = points;
        });
        return points as PointMarker[];
      } catch (e) {
        console.error(e);
        return [] as PointMarker[];
      }
    },
  });
}

export function useUpdatePoint() {
  const setBoard = useBoardStore((state) => state.set);
  const client = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      data: Omit<PointMarker, "id" | "lat" | "lng">;
      id: string;
    }) => {
      const raw = localStorage.getItem("points");
      const points = raw ? JSON.parse(raw) : [];
      const index = points.findIndex((p: PointMarker) => p.id === data.id);
      points[index] = {
        ...points[index],
        ...data.data,
      };
      localStorage.setItem("points", JSON.stringify(points));
      setBoard((state) => {
        state.points = points;
        client.invalidateQueries({
          queryKey: ["points"],
        });
      });
    },
  });
}
