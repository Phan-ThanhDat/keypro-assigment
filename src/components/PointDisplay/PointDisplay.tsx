import React from "react";

export interface PointDisplayProps {
  size?: number;
  lat: number;
  lng: number;
  children: React.ReactNode;
}

export function PointDisplay(props: PointDisplayProps) {
  const { children, size } = props;
  return (
    <div
      style={{
        fontSize: size,
        width: size,
        height: size,
        transform: size ? `translate(-${size / 2}px, -${size / 2}px)` : "",
      }}
      data-lat={props.lat}
      data-lng={props.lng}
    >
      {children}
    </div>
  );
}
