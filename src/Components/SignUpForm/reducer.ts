import { Istate, Iaction,Iform } from '../../types'

export const initialState: Istate = {
    form: { tel: '', password: '', repeadPassword: '' },
    error: {},
    touched: { tel: false, password: false, repeadPassword: false }
}


const validation = (values: Iform): Iform => {
    const errors: Iform = {}

    if (!values.tel) errors.tel = 'login is required'
    if (values.tel?.length && values.tel?.length < 3) errors.tel = 'login is too short'
    if (!values.password) errors.password = 'password is required'
    if (values.password?.length && values.password?.length < 3) errors.password = 'password is too short'
    if (!values.repeadPassword) errors.repeadPassword = 'repeadPassword is required'
    if (values.repeadPassword?.length && values.repeadPassword?.length < 3) errors.repeadPassword = 'repeadPassword is too short'

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
        case 'repeadPassword':
            return {
                ...state,
                touched: {...state.touched, repeadPassword: true},
                form: { ...state.form, repeadPassword: action.payload },
                error: {...state.error, repeadPassword: validation(state.form).repeadPassword}
            }
        default:
            return state
    }
}