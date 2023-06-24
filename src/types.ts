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
