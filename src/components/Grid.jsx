import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

const Grid =({,,,,,,,,,,,})=>{
const styles=cva(['grid','grid-cols-1'],{
variants:{
xs:{'grid-cols-1'},
responsive:[
 xs:{'grid-cols-2'},
 sm:{'grid-cols-2'},
 md:{'gris-cols-3'},
 lg:{'grid-cols-4'},
 xl:{'grid-cols-5'},
],
  },
 })

return (
 <>
  <div className={clsx(twMerge(styles({}), className)}>

  </div>
 </>
)
}
export default Grid;