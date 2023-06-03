import s from 'Layout.module.css'
import {FC, ReactNode} from "react";

const Layout: FC<{children: ReactNode}> = ({children}) => {
  return <div className={s.layout}>
    {children}
  </div>
}

export default Layout