import {FC, useEffect, useState, useRef} from 'react'
import style from './SignInForm.module.css'
import Input from '../Input'
import Button from '../Header/Components/Button'

interface ISignInForm {
  tel?: string,
  password?: string
}

interface SignInTouched {
  [field: string]: boolean,
}

const validation = (values: ISignInForm): ISignInForm => {
  const errors: ISignInForm = {}

  if(!values.tel) errors.tel = 'tel is required'
  if(values.tel?.length && values.tel?.length < 3) errors.tel = 'tel is too short'
  if(!values.password) errors.password = 'password is required'
  if(values.password?.length && values.password?.length < 3) errors.password = 'password is too short'

  return errors
}


const SignInForm: FC = () => { // TODO: change all of this useState to useReducer https://react.dev/reference/react/useReducer
  const [form, setForm] = useState<ISignInForm>({tel: '', password: ''})
  const [error, setError] = useState<ISignInForm>({})
  const [touched, setTouched] = useState<SignInTouched>({tel: false, password: false})
  const defFocus = useRef<HTMLInputElement>(null)

  /* useEffect(() => {
    defFocus?.current?.focus()
  }, []) */

  useEffect(() => {
    setError(validation(form))
  }, [form]);

  const handleFormChange = (name: string) => (e: { target: HTMLInputElement }) => {
    setForm(prev => ({...prev, [name]: e.target.value}))
    if(!touched[name]){
      setTouched(prev => ({...prev, [name]: true}))
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
        <div className={style.button}>
          <Button  text="Войти" type="basket"/>
        </div>
    </div>
  )
}

export default SignInForm
