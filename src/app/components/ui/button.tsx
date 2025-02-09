import { cn } from "@/app/lib/utils";
import React from "react";
type ButtonProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};
const Button = ({ title, children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2",
        className
      )}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
};

export default Button;
