import { FC } from 'react'
import style from './ProductCard.module.css'
import pizza from './icons/pizza.png'
import infoIcon from './icons/infoIcon.png'
import Button from '../../Header/Components/Button'
import ProductCardSticker from '../ProductCardSticker'
import { useState } from 'react'
import ProductCardSChooseSize from '../ProductCardSChooseSize'
import { IProductData } from '../../../types'

const ProductCard: FC<IProductData> = ({ productData, size , openModal}) => {
    const [productSize, setProductSize] = useState('min')

    return (
        <div className={style.card} onClick={(e):void => e.stopPropagation()}>
            <div className={style.img} onClick={()=>openModal(true)}>
                <img src={pizza} alt="pizza" />
            </div>
            <div className={style.title}>ва-банк</div>
            <div className={style.description}>Грудка куриная копченая, колбаски кабаносси, маринованный лук, перчик халапеньо, помидоры, соус острый, сыр моцарелла.</div>
            <div className={style.bottom}>
                {size.choosing 
                    ?
                    <ProductCardSChooseSize type={productSize} minSize={size.minSize} maxSize={size.maxSize} setProductSize={setProductSize}/>
                    : 
                    <div className={style.size}>
                        <div className={style.min}>{size.minSize}</div>
                        <div className={style.background}></div>
                    </div>
                }
                <div className={style.buy}>
                    <Button text='В корзину' type='basket' />
                    <div className={style.price}>{productSize === 'min' ? 650 : 850}<span>Р</span></div>
                </div>
            </div>
            <div className={style.stickers}>
                <ProductCardSticker text='Хит продаж' type='green' />
            </div>
        </div>
    )
}

export default ProductCard