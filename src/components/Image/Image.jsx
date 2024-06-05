import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const Image = ({ className, src, alt, size, shape }) => {
  const style = cva(["object-cover"], {
    variants: {
      size: {
        default: ["w-full", "h-full"],
        sm: ["w-10", "h-10"],
        md: ["w-20", "h-20"],
        lg: ["w-40", "h-40"],
      },
      shape: {
        circle: ["rounded-full"],
        square: ["rounded-xl"],
      },
    },
  });
  return (
    <img
      className={twMerge(style({ size, shape }), className)}
      src={src}
      alt={alt}
    />
  );
};

export default Image;
