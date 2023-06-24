import { FC } from 'react'
import style from './City.module.css'

const City: FC<{ children: string }> = ({ children }) => {
    return <li className={style.city}>{children}</li>
}

export default City
