import {cva} from 'class-variance-authority'
import {twMerge} from 'tailwind-marge' 
const SideMenu = ({className,children}) => {
const style = cva([],{})
  return <aside className={twMerge(style({}),className)}>{children}</aside>
}

export default SideMenu