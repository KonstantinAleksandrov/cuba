import style from './Input.module.css'
import { FC } from 'react'


interface IInput {
    title: string,
    placeHolder: string,
    type: string
    handler: ( arg: string )=>(arg:{ target: HTMLInputElement })=>void
}

const Input:FC<IInput> = ({title,placeHolder,type,handler}) =>{
    return (
        <div className={style.inpit__container}>
            <div className={style.title}>{title}</div>
            <input type="text" className={style.input} placeholder={placeHolder} onChange={handler(type)}/>
        </div>
    )
}

export default Input