import { twMerge } from "tailwind-merge";

export interface LocalObjectButtonProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

export interface ObjectButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "variant" | "children"
    >,
    LocalObjectButtonProps {}

export function ObjectButton(props: ObjectButtonProps) {
  const { className, icon, label, active, ...others } = props;
  return (
    <button
      className={twMerge(
        "w-full py-3 px-4 bg-background rounded-xl hover:bg-[#DEE2E9] focus:bg-[#DEE2E9] transition-colors inline-flex flex-col items-center justify-center",
        active && "bg-[#DEE2E9]",
        className,
      )}
      {...others}
    >
      <span className="text-3xl">{icon}</span>
      <span className="mt-1.5 text-sm">{label}</span>
    </button>
  );
}
