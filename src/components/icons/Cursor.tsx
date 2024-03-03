import { SVGProps } from "react";

export const Cursor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.528 14.335a.75.75 0 0 0 .003-1.062l-3.78-3.792 1.626-1.631h0l.004-.005c.23-.233.392-.524.47-.841l-.727-.181.728.18a1.836 1.836 0 0 0-.53-1.783 1.827 1.827 0 0 0-.843-.445L4.515 2.303h0A1.824 1.824 0 0 0 2.316 3.59c-.084.303-.09.623-.014.928v.001l2.466 10.004.001.003a1.831 1.831 0 0 0 1.289 1.319 1.823 1.823 0 0 0 1.78-.476l.001-.002 1.62-1.625 3.778 3.788a.75.75 0 0 0 1.059.004l3.23-3.198Z"
    />
  </svg>
);
