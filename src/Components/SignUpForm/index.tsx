import style from './SignUpForm.module.css'
import Input from '../Input'
import Button from '../Header/Components/Button'
import { useReducer } from 'react'
import { signUpReducer, initialState, setTel, setPassword, setRepeatPassword } from './reducer'
import { Context } from './context'

const SignUPForm = () => {
    const [state, dispatch] = useReducer(signUpReducer, initialState)
    return (
        <Context.Provider value={{ state, dispatch }}>
            <div className={style.container}>
                <label className={style.label}>
                    <Input title='Введите телефон' placeHolder='+7' type='tel' context={Context} handler={setTel}/>
                    <span className={style.error__mesage}>{state.error && state.touched.tel ? state.error.tel : ''}</span>
                </label>
                <label className={style.label}>
                    <Input title='Введите пароль' placeHolder='Пароль' type='password'  context={Context} handler={setPassword}/>
                    <span className={style.error__mesage}>{state.error && state.touched.password ? state.error.password : ''}</span>
                </label>
                <label className={style.label}>
                    <Input title='Повторите пароль' placeHolder='Повторите еще раз' type='repeadPassword' context={Context} handler={setRepeatPassword}/>
                    <span className={style.error__mesage}>{state.error && state.touched.repeatPassword ? state.error.repeatPassword : ''}</span>
                </label>
                <div className={style.button}>
                    <Button text="Регистрация" type="basket" />
                </div>
            </div>
        </Context.Provider>
    )
}

export default SignUPForm