import React from "react";
import { twMerge } from "tailwind-merge";

export interface LocalInputProps {
  variant?: string;
}

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "variant">,
    LocalInputProps {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { className, ...others } = props;

    return (
      <input
        ref={ref}
        className={twMerge(
          "h-9 bg-background disabled:cursor-not-allowed disabled:opacity-50 px-3 rounded-xl border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 placeholder:text-muted-foreground w-full",
          className,
        )}
        {...others}
      />
    );
  },
);
