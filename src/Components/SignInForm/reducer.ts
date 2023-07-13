import { Istate, Iaction, Iform } from '../../types'


export const initialState: Istate = {
    form: { tel: '', password: '' },
    error: {},
    touched: { tel: false, password: false }
}


const validation = (values: Iform): Iform => {
    const errors: Iform = {}

    if (!values.tel) errors.tel = 'tel is required'
    if (values.tel?.length && values.tel?.length < 3) errors.tel = 'tel is too short'
    if (!values.password) errors.password = 'password is required'
    if (values.password?.length && values.password?.length < 3) errors.password = 'password is too short'

    return errors
}

export const signInReducer = (state: Istate, action: Iaction) => {
    switch (action.type) {
        case 'tel':
            return {
                ...state,
                form: { ...state.form, tel: action.payload },
                touched: { ...state.touched, tel: true },
                error: {...state.error, tel: validation(state.form).tel}
            }
        case 'password':
            return {
                ...state,
                form: { ...state.form, password: action.payload },
                touched: { ...state.touched, password: true },
                error: {...state.error, password: validation(state.form).password}
            }
        default:
            return state
    }
}