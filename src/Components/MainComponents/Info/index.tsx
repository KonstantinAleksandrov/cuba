import { FC } from "react"
import style from './Info.module.css'

export interface IInfo {
    title : string
}

const Info:FC<IInfo> = ({title}) =>{
    return (
        <div>
            <div className={style.title}>{title}</div>
            <div className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos fugit suscipit, ipsa nihil ipsum sapiente minima, consectetur aliquam ex dolore cumque explicabo laboriosam atque pariatur? Iusto dolorem commodi debitis.</div>
        </div>
    )
}

export default Info