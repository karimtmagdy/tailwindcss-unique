import { twMerge } from "tailwind-merge";
import { cva, cx } from "class-variance-authority";
const Button = ({
  // variant = "primary",
  color,
  px,
  mode,
  shape,
  outline,
  fit,
  loading,
  icon,
  bezel,
  arrow,
  height,
  text,
  width,
  variant,
  size,
  children,
  className,
  onClick,
  disabled,
  ...props
}) => {
  // const style = cx(
  //   twMerge(
  //     "relative flex items-center justify-center cursor-pointer",
  //     "font-medium text-base"
  //   )
  // );
  const style = cva(
    [
      "flex",
      "gap-1",
      "items-center",
      "font-medium",
      "text-white",
      "transition-colors",
      // `text-${color}`,
      `${mode === "switch" ? "justify-start" : "justify-center"}`,
      `${
        disabled
          ? ["cursor-not-allowed", " pointer-events-none"]
          : "cursor-pointer"
      }`,
    ],
    {
      variants: {
        loading: { true: true, false: false },
        px: {
          default: "",
          xs: "px-3",
          sm: "px-4",
          md: "px-5",
          lg: "px-7",
          xl: "px-8",
        },
        shape: {
          default: "rounded-md",
          rounded: "rounded-md",
          circle: "rounded-full",
          square: "rounded-xl",
        },
        mode: {
          menu: ["toggle-menu", "flex-col", "bg-black", "p-0.5"],
          switch: [
            "toggle-switch",
            "rounded-full",
            " px-0.5",
            "bg-black",
            "dark:bg-blue-700",
          ],
        },
        fit: {
          default: "",
          1: "w-6 h-6",
          2: "w-7 h-7",
          3: "w-8 h-8",
          4: "w-9 h-9",
          5: "w-10 h-10",
        },
        height: {
          default: "",
          xs: "h-6",
          sm: "h-7",
          md: "h-8",
          lg: "h-9",
          xl: "h-10",
        },
        width: {
          default: "",
          xs: "w-9 h-5",
          sm: "w-10 h-6",
          md: "w-11 h-6",
          lg: "w-12 h-7",
          xl: "w-14 h-8",
        },
        // "default": "text-base",
        // xs: "h-6 text-xs",
        // sm: "h-7 text-sm",
        // md: "h-8 text-md",
        // lg: "h-9 text-lg",
        // xl: "h-10 text-xl"
        size: { default: "", xs: "", sm: "", md: "", lg: "", xl: "" },
        color: {
          danger: {},
          success: {},
          info: {},
          warning: {},
          primary: {},
          secondary: {},
        },
        outline: {
          danger: {},
          success: {},
          info: {},
          warning: {},
          primary: {},
          secondary: {},
        },
        bezel: {},
        variant: {},
      },
      defaultVariants: {
        shape: "default",
      },
    }
  );
  return (
    <button
      className={twMerge(
        style({
          px,
          mode,
          shape,
          fit,
          loading,
          height,
          width,
          size,
          color,
          bezel,
          outline,
          variant,
        }),
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon ? <span>{icon}</span> : null}
      {children}
      {text ? <span>{text}</span> : null}
      {arrow ? <span>{arrow}</span> : null}
    </button>
  );
};

export default Button;
