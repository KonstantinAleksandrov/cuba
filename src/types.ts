import { Dispatch, SetStateAction } from 'react'

export interface IOpenModal {
    openModal: Dispatch<SetStateAction<boolean>>
}

interface ISize {
    choosing: boolean
    minSize: string
    maxSize: string
}

export interface IProductData {
    productData: number
    size: ISize
}

export interface Iform {
    tel: string,
    password: string,
    repeatPassword?: string
}

export interface Itouched {
    [field: string]: boolean,
}

export interface Istate {
    form: Iform,
    error: Validation,
    touched: Itouched,
}
export interface Iaction {
    type: string,
    payload: string
}
export interface IContextProps {
    state: Istate;
    dispatch: Dispatch<Iaction>;
}

export interface Validation {
    [errorName: string]: string
}
