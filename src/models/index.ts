export enum BoardObjectType {
  TEXT = "TEXT",
  POINT = "POINT",
  LINE = "LINE",
  POLYGON = "POLYGON",
  NOTE = "NOTE",
  MORE = "MORE",
}

export interface PointMarker {
  id: string;
  lat: number;
  lng: number;
  labelSize: string;
  category: string;
  installYear: number;
  usageState: string;
  owner: string;
}

export interface User {
  id: string;
  email: string;
}
