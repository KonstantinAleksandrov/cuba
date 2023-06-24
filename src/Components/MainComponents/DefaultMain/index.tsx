import BlockProducts from "../BlockProducts"
import Slider from "../Slider"
import { products } from "../ProductsData"
import { FC } from 'react'
import { IOpenModal } from '../../../types'

const DefaultMain:FC<IOpenModal> = ({openModal}) =>{
    return(
        <>
            <Slider/>
            <BlockProducts title={products.pizza.type} route={products.pizza.route} selected={false} products={products.pizza.products} openModal={openModal}/>
            <BlockProducts title={products.snaks.type} route={products.snaks.route} selected={false} products={products.snaks.products} openModal={openModal}/>
            <BlockProducts title={products.beverages.type} route={products.beverages.route} selected={false} products={products.beverages.products} openModal={openModal}/>
        </>
    )
}
export default DefaultMain