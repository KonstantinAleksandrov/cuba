import style from './Input.module.css'
import { FC, useContext } from 'react'
import { Context } from '../SignUpForm/context'


interface IInput {
    title: string,
    placeHolder: string,
    type: string
}

const Input: FC<IInput> = ({ title, placeHolder, type }) => {
    const { dispatch } = useContext(Context)
    return (
        <div className={style.inpit__container}>
            <div className={style.title}>{title}</div>
            <input type="text" className={style.input} placeholder={placeHolder} onChange={(e) => {
                dispatch({ type: type, payload: e.target.value })
            }} />
        </div>
    )
}

export default Input