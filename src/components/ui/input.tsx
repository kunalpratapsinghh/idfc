import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  hasRightAdornment?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      icon,
      iconPosition = "left",
      hasRightAdornment,
      className: _,
      ...props
    },
    ref
  ) => {
    const isLeft = icon && iconPosition === "left";
    const isRight = icon && iconPosition === "right";

    return (
      <div
        className={cn(
          "relative w-full" /* container for absolute icon and input */,
          className
        )}
      >
        {icon && (
          <span
            className={cn(
              "absolute top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none",
              isLeft && "left-3",
              isRight && "right-3"
            )}
          >
            {icon}
          </span>
        )}

        <input
          ref={ref}
          type={type}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-black/50 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            icon && "pl-3 md:pl-10 pr-10", // push input text right if icon is present
            isLeft && "pl-10", // space for left icon
            isRight && "pr-10", // space for right icon (if you ever need it)
            hasRightAdornment && "pr-10", // space for clear button on right
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input };
