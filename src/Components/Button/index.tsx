import { FC } from 'react';
import style from './Button.module.css'

interface Ibutton {
    text : string;
    type : string;
    handler? : ()=> void;
}

const Button:FC<Ibutton> = ({text,type}) =>{
    return(
        <div className={style[`shell__${type}`]}>
            <a href="#" className={style[type]}>{text}</a>
        </div>
    )
}
export default Button