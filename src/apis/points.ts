import axios from "axios";

import { config } from "@configs";
import { PointMarker } from "@models";

export async function getPoints() {
  const result = await axios.get<{ data: PointMarker[] }>(
    `${config.API_ENDPOINT}/points`,
    {
      withCredentials: true,
    },
  );
  return result.data.data;
}

export async function savePoint(data: Omit<PointMarker, "id">) {
  const result = await axios.post<{ data: PointMarker }>(
    `${config.API_ENDPOINT}/points`,
    data,
    {
      withCredentials: true,
    },
  );
  return result.data.data;
}

export async function updatePoint(data: {
  data: Omit<PointMarker, "id" | "lat" | "lng">;
  id: string;
}) {
  const result = await axios.put<{ data: PointMarker }>(
    `${config.API_ENDPOINT}/points/${data.id}`,
    data.data,
    {
      withCredentials: true,
    },
  );
  return result.data.data;
}
