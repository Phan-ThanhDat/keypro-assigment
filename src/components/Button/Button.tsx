import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "font-medium font-medium py-2 px-6 rounded-[12px] disabled:text-[rgba(0,0,0,0.4)] disabled:bg-[rgba(0,0,0,0.1)] disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ",
  {
    variants: {
      intent: {
        fill: ["bg-[rgba(0,0,0,0.1)] hover:bg-[#DEE2E9]"],
      },
      colorStyle: {
        default: [""],
        primary: [""],
      },
    },
    compoundVariants: [
      {
        intent: "fill",
        colorStyle: "primary",
        class: "text-white bg-[#007AFF] hover:bg-[#1475DE]",
      },
    ],
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends Omit<
      React.AnchorHTMLAttributes<HTMLAnchorElement> &
        React.ButtonHTMLAttributes<HTMLButtonElement>,
      keyof ButtonVariantProps
    >,
    ButtonVariantProps {}

export function Button(props: ButtonProps) {
  const {
    intent = "fill",
    href,
    children,
    className,
    colorStyle = "default",
    type = "button",
    ...others
  } = props;
  const tag = href ? "a" : "button";

  return React.createElement(
    tag,
    {
      className: twMerge(
        buttonVariants({
          colorStyle,
          intent,
        }),
        className,
      ),
      href,
      type,
      ...others,
    },
    children,
  );
}
