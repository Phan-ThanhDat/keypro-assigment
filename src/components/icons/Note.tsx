import { SVGProps } from "react";

export const Note = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.667 7.667c-.547 0-1-.454-1-1v-4c0-.547.453-1 1-1 .546 0 1 .453 1 1v4c0 .546-.454 1-1 1ZM21.333 7.667c-.546 0-1-.454-1-1v-4c0-.547.454-1 1-1 .547 0 1 .453 1 1v4c0 .546-.453 1-1 1ZM20 15.667H9.333c-.546 0-1-.454-1-1 0-.547.454-1 1-1H20c.547 0 1 .453 1 1 0 .546-.453 1-1 1ZM16 21H9.333c-.546 0-1-.453-1-1 0-.547.454-1 1-1H16c.547 0 1 .453 1 1 0 .547-.453 1-1 1Z"
    />
    <path
      fill="currentColor"
      d="M20 30.333h-8c-7.493 0-9-3.533-9-9.24v-8.226c0-6.32 2.133-8.894 7.613-9.2h10.72c5.534.306 7.667 2.88 7.667 9.2v8.466c0 .547-.453 1-1 1-.547 0-1-.453-1-1v-8.466c0-5.814-1.933-6.987-5.72-7.2H10.667C6.933 5.88 5 7.053 5 12.867v8.226c0 5.107.973 7.24 7 7.24h8c.547 0 1 .454 1 1 0 .547-.453 1-1 1Z"
    />
    <path
      fill="currentColor"
      d="M20 30.333a1.002 1.002 0 0 1-1-1v-4c0-3.226 1.773-5 5-5h4c.4 0 .773.24.92.614.16.373.067.8-.213 1.093l-8 8a.999.999 0 0 1-.707.293Zm4-8c-2.107 0-3 .894-3 3v1.587l4.587-4.587H24Z"
    />
  </svg>
);