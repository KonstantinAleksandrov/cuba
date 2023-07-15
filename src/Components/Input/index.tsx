import style from './Input.module.css'
import { FC, useContext,Context } from 'react'
/* import { Context } from '../SignUpForm/context' */


interface IInput {
    title: string,
    placeHolder: string,
    type: string,
    context: Context<any>
}

const Input: FC<IInput> = ({ title, placeHolder, type, context }) => {
    /* let dispatch: any = null
    if(context){
        dispatch =  useContext(context).dispatch
    } */
    const { dispatch } = useContext(context)
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