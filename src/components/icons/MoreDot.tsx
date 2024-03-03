import { SVGProps } from "react";

export const MoreDot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.8}
      d="M16 20.167a1.667 1.667 0 1 1 0 3.333 1.667 1.667 0 0 1 0-3.333ZM16 14.333a1.667 1.667 0 1 1 0 3.334 1.667 1.667 0 0 1 0-3.334ZM17.667 10.167a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0Z"
    />
  </svg>
);
