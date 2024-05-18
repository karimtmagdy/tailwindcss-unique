import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

const Box =({,,,,,,,,,,,})=>{
const styles=cva([],{
variants:{

  },
 })

return (
 <>
  <div className={clsx(twMerge(styles({}), className)}>

  </div>
 </>
)
}
export default Box;