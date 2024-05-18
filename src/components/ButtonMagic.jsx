import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

const ButtonMagic =({,,,,,,,,,,,})=>{
const styles=cva([],{
variants:{

  },
 })

return (
 <>
  <button className={clsx(twMerge(styles({}), className)}>

  </button>
 </>
)
}
export default ButtonMagic;