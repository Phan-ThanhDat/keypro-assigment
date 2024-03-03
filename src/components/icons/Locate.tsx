import { SVGProps } from "react";

export const Locate = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.28 4.478c.602-1.348-.788-2.555-2.032-2.096L2.995 7.276c-1.318.487-1.397 2.293-.114 2.884l4.737 2.182a.085.085 0 0 1 .044.04l2.082 4.637c.56 1.247 2.37 1.252 2.929 0l5.606-12.541Z"
    />
  </svg>
);
