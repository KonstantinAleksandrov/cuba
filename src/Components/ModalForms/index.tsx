import style from './ModalForms.module.css'
import SignInForm from '../SignInForm'
import SignUpForm from '../SignUpForm'
import { useState } from 'react'
import CloseCross from '../CloseCross'
import { IOpenModal } from '../../types'
import { FC } from 'react'

const ModalForms:FC<IOpenModal> = ({openModal}) =>{
    const [formType,setFotmType] = useState<String>('Вход')

    return (
        <div className={style.container}>
            <CloseCross openModal={openModal}/>
            <div className={style.buttons}>
                <div className={[style.button , formType === 'Вход' ? style.active : ''].join(' ')} onClick={()=>{setFotmType('Вход')}}>Вход</div>
                <div className={[style.button , formType ==='Регистрация' ? style.active : ''].join(' ')} onClick={()=>{setFotmType('Регистрация')}}>Регистрация</div>
            </div>
            {formType === 'Вход' ? <SignInForm/> : <SignUpForm/>}
        </div>
    )
}
export default ModalForms