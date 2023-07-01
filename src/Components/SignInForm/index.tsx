import {FC, useEffect, useState, useRef, FormEventHandler} from 'react'
import style from './SignInForm.module.css'

interface SignInForm {
  login?: string,
  password?: string
}

interface SignInTouched {
  [field: string]: boolean,
}

const validation = (values: SignInForm): SignInForm => {
  const errors: SignInForm = {}

  if(!values.login) errors.login = 'login is required'
  if(values.login?.length && values.login?.length < 3) errors.login = 'login is too short'
  if(!values.password) errors.password = 'password is required'
  if(values.password?.length && values.password?.length < 3) errors.password = 'password is too short'

  return errors
}


const SignInForm: FC = () => { // TODO: change all of this useState to useReducer https://react.dev/reference/react/useReducer
  const [form, setForm] = useState<SignInForm>({login: '', password: ''})
  const [error, setError] = useState<SignInForm>({})
  const [touched, setTouched] = useState<SignInTouched>({login: false, password: false})
  const defFocus = useRef<HTMLInputElement>(null)

  const handleSignIn: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log(form)
  }

  useEffect(() => {
    defFocus?.current?.focus()
  }, [])

  useEffect(() => {
    setError(validation(form))
  }, [form]);

  const handleFormChange = (name: string) => (e: { target: HTMLInputElement }) => {
    setForm(prev => ({...prev, [name]: e.target.value}))
    if(!touched[name]){
      setTouched(prev => ({...prev, [name]: true}))
    }
  }

  // const handleFormChange = (e: { target: HTMLInputElement }) => {
  //   const name = e.target.name
  //   setForm(prev => ({...prev, [name]: e.target.value}))
  //}

  return <>
    <form onSubmit={handleSignIn} className={style.form}>
      <label className={style.label}>
        <input onChange={handleFormChange('login')} className={style.input} ref={defFocus}/>
        {error.login && touched.login ? <span className={style.alert}>{error.login}</span> : ''}
      </label>

      <label className={style.label}>
        <input type="password" onChange={handleFormChange('password')} className={style.input}/>
        {error.password && touched.login ? <span className={style.alert}>{error.password}</span> : ''}
      </label>

      <button className={style.btn}>Sign in</button>
    </form>
  </>
}

export default SignInForm
