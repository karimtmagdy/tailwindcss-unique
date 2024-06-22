import {cva} from ''
import {twMerge} from 'tailwind-marge' 
const SideMenu = ({className,children}) => {
  return <aside className={twMerge()}>{children}</aside>
}

export default SideMenu