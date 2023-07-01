import { FC, ReactElement } from 'react'
import style from './Button.module.css'

interface Ibutton {
    text: string
    type: string
    children?: ReactElement | boolean
    onClick?: () => void
}

const Button: FC<Ibutton> = ({ text, type, children = false, onClick }) => {
    return (
        <div className={style[`shell__${type}`]} onClick={onClick}>
            {children ? (
                children
            ) : (
                <a href="#" className={style[type]}>
                    {text}
                </a>
            )}
        </div>
    )
}
export default Button
