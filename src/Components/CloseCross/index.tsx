import style from './CloseCross.module.css'
import { IOpenModal } from '../../types'
import { FC } from 'react'
import cross from './icons/cross.svg'

const CloseCross:FC<IOpenModal> = ({openModal}) =>{
    return (
        <div className={style.cross}  onClick={() => openModal(false)}>
            <img src={cross} alt="cross"/>
        </div>
    )
}

export default CloseCross