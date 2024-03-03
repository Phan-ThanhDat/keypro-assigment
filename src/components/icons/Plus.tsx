import { SVGProps } from "react";

export const Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13 10V3h-2v7H4v2h7v7h2v-7h7v-2h-7Z"
      clipRule="evenodd"
    />
    <path
      stroke="#fff"
      strokeOpacity={0.8}
      d="M4 12.5h6.5v7h3v-7h7v-3h-7v-7h-3v7h-7v3H4Z"
    />
  </svg>
);
