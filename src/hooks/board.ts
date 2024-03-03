import { getPoints, savePoint, updatePoint } from "@apis";
import { PointMarker } from "@models";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useSavePoint() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: async (data: Omit<PointMarker, "id">) => {
      await savePoint(data);
      client.invalidateQueries({
        queryKey: ["points"],
      });
    },
  });
}

export function useGetPoints() {
  return useQuery({
    queryKey: ["points"],
    queryFn: async () => {
      const points = await getPoints();
      return points;
    },
  });
}

export function useUpdatePoint() {
  const client = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      data: Omit<PointMarker, "id" | "lat" | "lng">;
      id: string;
    }) => {
      await updatePoint(data);
      client.invalidateQueries({
        queryKey: ["points"],
      });
    },
  });
}
