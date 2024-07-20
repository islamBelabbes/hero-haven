import { cn } from "@/utility/utility";
import React, { forwardRef } from "react";

type TButton = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  ref?: React.Ref<HTMLButtonElement>;
};

const Button = forwardRef<HTMLButtonElement, TButton>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          "rounded-lg px-6 py-2 font-semibold text-white",
          className,
        )}
        style={{
          background:
            "linear-gradient(to right,rgba(89,157,33),rgba(25,155,126))",
        }}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
