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
  const style = cva([], {
    variants: {
      color: {},
      px: {},
      mode: {},
      shape: {},
      outline: {},
      fit: {},
      loading: {},
      bezel: {},
      height: {},
      width: {},
      variant: {},
      size: {},
    },
    defaultVariants: {},
  });
  return (
    <button
      className={twMerge(
        style({
          color,
          px,
          mode,
          shape,
          outline,
          fit,
          loading,
          bezel,
          height,
          width,
          variant,
          size,
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
