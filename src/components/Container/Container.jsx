import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  const style = cva(["container"], {});
  return (
    <section className={twMerge(style({}), className)}>{children}</section>
  );
};

export default Container;
