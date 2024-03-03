import { SVGProps } from "react";

export const Redo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.78 6.032a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H8.75a4.25 4.25 0 0 0 0 8.5H10a.75.75 0 0 1 0 1.5H8.75a5.75 5.75 0 0 1 0-11.5h5.69l-2.47-2.47a.75.75 0 0 1 1.06-1.06l3.75 3.75Z"
      clipRule="evenodd"
    />
  </svg>
);
