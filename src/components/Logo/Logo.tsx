import { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    {...props}
  >
    <rect width={36} height={36} fill="#262626" rx={12} />
    <path
      fill="#fff"
      d="M24.636 16.948h-7.01L22.17 11h-3.185l-4.537 5.948H12.14V11H9.5v14h2.64v-5.942h2.015L18.773 25h3.185l-4.621-5.942h7.299"
    />
    <path
      fill="#fff"
      d="M24.636 20.344c1.305 0 2.364-1.038 2.364-2.318s-1.059-2.318-2.364-2.318c-1.306 0-2.365 1.038-2.365 2.318s1.059 2.318 2.364 2.318Z"
    />
  </svg>
);
