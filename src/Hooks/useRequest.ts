import { useEffect } from 'react'
import {RootState} from '../redux/store'
import { IfetchProductsError,IProducts } from '../types'
import {useAppDispatch, useAppSelector} from "../redux/reduxHooks";
import {getProductList} from '../modules/product'

export const useRequest = (apiFunction:() => Promise<IProducts | IfetchProductsError>) =>{
    const dispatch = useAppDispatch()
    const products = useAppSelector((state: RootState) => state.product)

    useEffect(()=>{
        apiFunction()
        .then((products: IProducts | IfetchProductsError) =>{
            if(Array.isArray(products)) {
                dispatch(getProductList(products))
            }
        })
       
    },[])

    return products
}