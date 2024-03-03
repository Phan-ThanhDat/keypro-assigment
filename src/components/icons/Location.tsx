import { SVGProps } from "react";

export const Location = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="1em"
    height="1em"
    viewBox="0 0 26 26"
    {...props}
  >
    <circle cx={13} cy={12} r={12} fill="#007AFF" opacity={0.3} />
    <g filter="url(#svg-location)">
      <circle cx={13} cy={12} r={5} fill="#007AFF" />
      <circle cx={13} cy={12} r={6} stroke="#fff" strokeWidth={2} />
    </g>
    <defs>
      <filter
        id="svg-location"
        width="1em"
        height="1em"
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={3} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6001_64" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_6001_64"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
