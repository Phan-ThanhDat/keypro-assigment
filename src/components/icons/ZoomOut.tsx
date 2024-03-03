import { SVGProps } from "react";

export const ZoomOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.947 12.737h3.58M19 19l-2.684-2.684M4.684 15.42H3.79A1.79 1.79 0 0 1 2 13.631v-.894m0-3.58v-.894m0-3.579V3.79A1.79 1.79 0 0 1 3.79 2h.894m3.58 0h.894m3.579 0h.895a1.79 1.79 0 0 1 1.79 1.79v.894m-7.159 8.053a4.474 4.474 0 1 0 8.948 0 4.474 4.474 0 0 0-8.948 0Z"
    />
  </svg>
);
