import style from './SignUpForm.module.css'
import Input from '../Input'
import Button from '../Header/Components/Button'
import { useState, useEffect,useRef} from 'react'

interface ISignUPForm {
   tel?: string,
   password?: string,
   repeadPassword?: string
}

interface ISignUPtouched {
    [field: string]: boolean,
}

const validation = (values: ISignUPForm): ISignUPForm => {
    const errors: ISignUPForm = {}
  
    if(!values.tel) errors.tel = 'login is required'
    if(values.tel?.length && values.tel?.length < 3) errors.tel = 'login is too short'
    if(!values.password) errors.password = 'password is required'
    if(values.password?.length && values.password?.length < 3) errors.password = 'password is too short'
    if(!values.repeadPassword) errors.repeadPassword = 'repeadPassword is required'
    if(values.repeadPassword?.length && values.repeadPassword?.length < 3) errors.repeadPassword = 'repeadPassword is too short'
  
    return errors
  }

const SignUPForm = () =>{
    const [formReg, setFormReg] = useState<ISignUPForm>({tel: '', password: '',repeadPassword: ''})
    const [error, setError] = useState<ISignUPForm>({})
    const [touched, setTouched] = useState<ISignUPtouched>({login: false, password: false,repeadPassword: false})

    useEffect(()=>{
        setError(()=>validation(formReg))
    },[formReg])

    const handleFormChange = (name: string) => (e: { target: HTMLInputElement }) => {
        setFormReg(prev => ({...prev, [name]: e.target.value}))
        if(!touched[name]){
            setTouched((prev)=>({...prev, [name]: true}))
        }
    }
    return (
        <div className={style.container}>
            <label className={style.label}>
                <Input title='Введите телефон' placeHolder='+7' type='tel' handler={handleFormChange}/>
                <span className={style.error__mesage}>{error  && touched.tel ? error.tel : ''}</span>
            </label>
            <label className={style.label}>
                <Input title='Введите пароль' placeHolder='Пароль' type='password'  handler={handleFormChange}/>
                <span className={style.error__mesage}>{error  && touched.password ? error.password : ''}</span>
            </label>
            <label className={style.label}>
                <Input title='Повторите пароль' placeHolder='Повторите еще раз' type='repeadPassword'  handler={handleFormChange}/>
                <span className={style.error__mesage}>{error  && touched.repeadPassword ? error.repeadPassword : ''}</span>
            </label>
            <div className={style.button}>
                <Button  text="Регистрация" type="basket"/>
            </div>
        </div>
    )
}

export default SignUPForm