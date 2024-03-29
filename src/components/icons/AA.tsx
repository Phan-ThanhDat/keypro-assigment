import { SVGProps } from "react";

export const AA = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.905 6.574a1 1 0 0 0-1.81 0l-8 17a1 1 0 1 0 1.81.851L4.987 20h10.025l2.083 4.425a1 1 0 1 0 1.81-.851l-8-17ZM5.929 18 10 9.349 14.071 18H5.93ZM25 12c-1.595 0-2.841.434-3.704 1.29a1 1 0 0 0 1.408 1.42c.475-.471 1.25-.71 2.296-.71 1.654 0 3 1.125 3 2.5v.402A5.346 5.346 0 0 0 25 16c-2.758 0-5 2.019-5 4.5s2.242 4.5 5 4.5a5.342 5.342 0 0 0 3-.906A1 1 0 1 0 30 24v-7.5c0-2.481-2.242-4.5-5-4.5Zm0 11c-1.654 0-3-1.125-3-2.5s1.346-2.5 3-2.5 3 1.125 3 2.5-1.346 2.5-3 2.5Z"
    />
  </svg>
);
