import style from './Input.module.css'
import { FC, useContext,Context } from 'react'
/* import { Context } from '../SignUpForm/context' */


interface IInput {
    title: string,
    placeHolder: string,
    type: string,
    context: Context<any>,
    handler: (arg: string) => {type: string, payload: string}
}

const Input: FC<IInput> = ({ title, placeHolder, type, context, handler}) => {
    /* let dispatch: any = null
    if(context){
        dispatch =  useContext(context).dispatch
    } */
    const { dispatch } = useContext(context)
    return (
        <div className={style.inpit__container}>
            <div className={style.title}>{title}</div>
            <input type="text" className={style.input} placeholder={placeHolder} onChange={(e) => {
                dispatch(handler(e.target.value))
            }} />
        </div>
    )
}

export default Input