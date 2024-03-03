import { SVGProps } from "react";

export const PointAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 26 26"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.787 11.202A8.203 8.203 0 0 1 11.99 3a8.203 8.203 0 0 1 5.802 14c-.388.387-.912.82-1.479 1.288-1.606 1.325-3.556 2.934-3.707 4.601-.032.339-.277.616-.616.616-.34 0-.585-.277-.616-.616-.151-1.667-2.101-3.276-3.708-4.601-.567-.468-1.091-.9-1.479-1.288a8.176 8.176 0 0 1-2.401-5.798Zm10.938.001a2.734 2.734 0 1 1-5.468-.001 2.734 2.734 0 0 1 5.468.001Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21.75 3a1.75 1.75 0 1 0-3.5 0v1.25H17a1.75 1.75 0 1 0 0 3.5h1.25V9a1.75 1.75 0 1 0 3.5 0V7.75H23a1.75 1.75 0 1 0 0-3.5h-1.25V3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 3v6m-3-3h6"
    />
  </svg>
);
