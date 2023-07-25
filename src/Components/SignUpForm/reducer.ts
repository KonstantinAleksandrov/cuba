import {Istate, Iaction, Iform, Validation} from '../../types'

export const initialState: Istate = {
    form: { tel: '', password: '', repeatPassword: '' },
    error: {},
    touched: { tel: false, password: false, repeatPassword: false }
}


const validation = (values: Iform): Validation => {
    const errors: Validation = {}

    if (!values.tel) errors.tel = 'login is required'
    if (values.tel?.length && values.tel?.length < 3) errors.tel = 'login is too short'
    if (!values.password) errors.password = 'password is required'
    if (values.password?.length && values.password?.length < 3) errors.password = 'password is too short'
    if (!values.repeatPassword) errors.repeatPassword = 'repeatPassword is required'
    if (values.repeatPassword?.length && values.repeatPassword?.length < 3) errors.repeatPassword = 'repeatPassword is too short'

    return errors
}


export const signUpReducer = (state: Istate, action: Iaction) => {
    switch (action.type) {
        case 'tel':
            return {
                ...state,
                touched: {...state.touched, tel: true},
                form: { ...state.form, tel: action.payload },
                error: {...state.error, tel: validation(state.form).tel}
            }
        case 'password':
            return {
                ...state,
                touched: {...state.touched, password: true},
                form: { ...state.form, password: action.payload },
                error: {...state.error, password: validation(state.form).password}
            }
        case 'repeatPassword':
            return {
                ...state,
                touched: {...state.touched, repeatPassword: true},
                form: { ...state.form, repeatPassword: action.payload },
                error: {...state.error, repeatPassword: validation(state.form).repeatPassword}
            }
        default:
            return state
    }
}



/**
 ACTION CREATORS
 */

export const setTel = (tel: string) => ({ type: 'tel', payload: tel })
export const setPassword = (pass: string) => ({ type: 'password', payload: pass })
export const setRepeatPassword = (pass: string) => ({ type: 'repeatPassword', payload: pass })