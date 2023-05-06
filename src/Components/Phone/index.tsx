import style from './Phone.module.css'
import { FC } from 'react'

const Phone: FC<{number : string | number}> = ({number}) =>{
    const getLinkByNumber = (number: string | number): string =>{
        return `tel:${number}`
    }
    return(
        <li className={style.phone}>
            <a href={getLinkByNumber(number)}>{number}</a>
        </li>
    )
}

export default Phone 