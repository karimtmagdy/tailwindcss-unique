import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

export const Button = (props) => {
  const {
    onClick,
    className,
    children,
    size,
    shape,
    px,
    width,
    fit,
    variant,
    outline,
    bezel,
    disabled,
    ...props
  } = props;
  const styles = cva(["", "", "", "", "", "", ""], {
    variants: {
      size: {
        sm: ["text-xs", "py-1", "px-2", "rounded-sm"],
        md: ["text-sm", "py-2", "px-4", "rounded-md"],
        lg: ["text-base", "py-3", "px-6", "rounded-lg"],
      },
      shape: {
        square: ["rounded-md"],
        rounded: ["rounded-xl"],
        circle: ["rounded-full"],
      },
      variant: {
        primary: ["bg-primary-500", "text-white", "hover:bg-primary-600"],
        secondary: ["bg-secondary-500", "text-white", "hover:bg-secondary-600"],
        success: ["bg-success-500", "text-white", "hover:bg-success-600"],
      },
    },
    defaultVariants: {
      shape: "square",
    },
  });
  return (
    <>
      <button
        {...props}
        onClick={onClick}
        className={clsx(twMerge(styles({}), className))}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};
