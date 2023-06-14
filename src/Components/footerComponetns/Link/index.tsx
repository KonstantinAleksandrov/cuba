import style from './Link.module.css'
import { FC } from 'react'

interface ILink {
    title : string
}

const Link:FC<ILink> = ({title}) =>{
    return (
        <div className={style.link}>{title}</div>
    )
}

export default Link