import { useEffect, useState } from 'react'
import { IfetchProductsError,IProducts } from '../types'

export const useRequest = (apiFunction:() => Promise<IProducts | IfetchProductsError>) =>{
    const [data,setData] = useState<IProducts | null | IfetchProductsError>(null)

    useEffect(()=>{
        apiFunction()
        .then((products: IProducts | IfetchProductsError) =>{
            setData(products)
        })
       
    },[])

    return data
}