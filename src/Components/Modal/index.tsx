import { createPortal } from 'react-dom'
import style from './Modal.module.css'
import { IOpenModal } from '../../types'
import { FC, ReactElement, useEffect, useState } from 'react'

// const modalPortal: HTMLDivElement | null = document.querySelector('#modal')

interface IModal extends IOpenModal {
    children: ReactElement
    modalId: string
}

const Modal: FC<IModal> = ({ openModal, children, modalId }) => {
    const [modalContainer, setModalContainer] = useState<null | HTMLDivElement>(
        null
    )

    useEffect(() => {
        const existedEl = document.querySelector('#' + modalId)
        if (!existedEl) {
            const div = document.createElement('div')
            div.id = modalId
            document.body.append(div)
            setModalContainer(div)
        }

        return () => {
            document.querySelector('#' + modalId)?.remove()
        }
    }, [])

    return (
        <>
            {modalContainer &&
                createPortal(
                    <section
                        className={style.modalContainer}
                        onClick={() => openModal(false)}
                    >
                        <div onClick={(e) => e.stopPropagation()}>
                            {children}
                        </div>
                    </section>,
                    modalContainer
                )}
        </>
    )
}

export default Modal
