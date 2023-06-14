import { FC, ReactElement } from 'react';
import style from './Button.module.css'

interface Ibutton {
    text: string;
    type: string;
    children?: ReactElement | boolean
}

const Button:FC<Ibutton> = ({text,type,children = false}) =>{
    return(
        <div className={style[`shell__${type}`]}>
            {children ? children : <a href="#" className={style[type]}>{text}</a>}
        </div>
    )
}
export default Button