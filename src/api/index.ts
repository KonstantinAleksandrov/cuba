import axios from 'axios'
import {IfetchProductsError,IProducts } from '../types'
const BASEURL = 'http://92.63.101.253:5005'

export const fetchProducts = async (): Promise<IProducts | IfetchProductsError>  => {
    try{
        const response = await axios.get(`${BASEURL}/catalog`)
        return response.data
    } catch(error){
        return { error:(error as Error).message }
    }
}