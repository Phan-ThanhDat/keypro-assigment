import { SVGProps } from "react";

export const Polygon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.614 10.386h6.316a1.403 1.403 0 0 1 1.403 1.404v16.14a1.403 1.403 0 0 1-1.403 1.403H11.79a1.403 1.403 0 0 1-1.404-1.403v-6.316"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.614 4.07v6.316L10.386 21.614H4.07M21.614 4.07a1.403 1.403 0 0 0-1.404-1.403H4.07A1.404 1.404 0 0 0 2.667 4.07v16.14a1.404 1.404 0 0 0 1.403 1.404M21.614 4.07 4.07 21.614m23.86-11.228L11.088 27.228M29.333 16 16 29.333m0-26.666L2.667 16m26.666 7.017-6.316 6.316M8.982 2.667 2.667 8.982"
    />
  </svg>
);
