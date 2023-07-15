import { FC, useReducer } from 'react'
import style from './SignInForm.module.css'
import Input from '../Input'
import Button from '../Header/Components/Button'
import { signInReducer, initialState, setTel, setPassword } from './reducer'
import { Context } from './context'
import {useTraceUpdate} from "../../Hooks/useTraceUpdate";
import {signIn} from "../../api";
import {Iform} from "../../types";

const SignInForm: FC = () => {
  const [state, dispatch] = useReducer(signInReducer, initialState)

  const onSignIn = async () => {
    if(state.form.tel && state.form.password){
      const data = state.form
      const user = await signIn(data)
      console.log(user)
    }
  }


  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className={style.container}>
        <label className={style.label}>
          <Input title='Введите телефон' placeHolder='+7' type='tel'  context={Context} handler={setTel}/>
          <span className={style.error__mesage}>{state.error && state.touched.tel ? state.error.tel : ''}</span>
        </label>
        <label className={style.label}>
          <Input title='Введите пароль' placeHolder='Пароль' type='password'  context={Context} handler={setPassword} />
          <span className={style.error__mesage}>{state.error && state.touched.password ? state.error.password : ''}</span>
        </label>
        <div className={style.button}>
          <Button text="Войти" type="basket" />
        </div>
      </div>
    </Context.Provider>
  )
}

export default SignInForm
