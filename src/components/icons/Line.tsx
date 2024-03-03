import { SVGProps } from "react";

export const Line = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      stroke="#262626"
      strokeWidth={2}
      d="M27.592 11.937c-4.323-4.324-11.333-4.324-15.656 0-4.324 4.323-4.324 11.333 0 15.656"
    />
    <path
      fill="#EFF2F7"
      stroke="#262626"
      strokeWidth={1.5}
      d="M9.129 26.175h4.575v4.575H9.129zM26.587 9.702v4.575h4.575V9.702z"
    />
    <path stroke="#262626" strokeWidth={2} d="M3.673 20.2 20.199 3.674" />
    <circle
      cx={4.108}
      cy={19.765}
      r={2.198}
      fill="#EFF2F7"
      stroke="#262626"
      strokeWidth={1.5}
      transform="rotate(-45 4.108 19.765)"
    />
    <circle
      cx={19.764}
      cy={4.108}
      r={2.198}
      fill="#EFF2F7"
      stroke="#262626"
      strokeWidth={1.5}
      transform="rotate(-45 19.764 4.108)"
    />
    <path
      fill="#EFF2F7"
      stroke="#262626"
      strokeWidth={1.5}
      d="M8.991 8.932h5.441v5.441H8.991z"
    />
  </svg>
);
