import style from './Phone.module.css'
import { FC, useCallback } from 'react'

const Phone: FC<{number : string | number}> = ({number}) =>{
    const getLinkByNumber = useCallback<(arg: number | string) => string>((number: string | number): string => {
        return `tel:${number}`
    }, [number])
    return(
        <li className={style.phone}>
            <a href={getLinkByNumber(number)}>{number}</a>
        </li>
    )
}

export default Phone 