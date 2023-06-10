import { FC } from 'react'
import style from './BlockProducts.module.css'
import Button from '../../Button'
import ProductCard from '../ProductCard'


interface IBlockProducts {
    title : string,
    products : number[]
}

const BlockProducts:FC<IBlockProducts> = ({title,products}) =>{

    return (
        <div className={style.block__Products}>
            <div className={style.header}>
                <div className={style.title}>{title}</div>
                <Button text='Перейти в раздел' type='default'/>
            </div>
            <div className={style.body}>
                {products.map((product)=>{
                    return (
                        <ProductCard 
                        productData={product} 
                        size={
                            title === 'Пицца'? 
                            {   
                                choosing: true,
                                minSize : '33 см (1кг)',
                                maxSize : '41 см (1.5кг)'
                            }:{
                                choosing: false,
                                minSize : '1л',
                                maxSize: ''
                            }
                        }
                        key={product}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default BlockProducts