import { createPortal } from 'react-dom';
import style from './Modal.module.css'
import { IOpenModal } from '../../types';
import { FC,ReactElement } from 'react'

const modalPortal: HTMLDivElement | null = document.querySelector('#modal')

interface IModal extends IOpenModal{
    children: ReactElement
}


const Modal:FC<IModal> = ({openModal,children}) => {

    return (
        <>{modalPortal && createPortal(
        <div className={style.modalContainer} onClick={()=>openModal(false)}>
            {children}
        </div>,
        modalPortal)}</>
    )
}

export default Modal