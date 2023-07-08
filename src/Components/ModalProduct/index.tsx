import style from './ModalProduct.module.css'
import { IProductData,IOpenModal } from '../../types'
import { FC, useState } from 'react'
import ProductCardSticker from '../MainComponents/ProductCardSticker'
import ProductCardSChooseSize from '../MainComponents/ProductCardSChooseSize'
import Button from '../Header/Components/Button'
import pizza from '../MainComponents/ProductCard/icons/pizza.png'
import CloseCross from '../CloseCross/'

interface IModalProduct extends IProductData,IOpenModal{

}

const ModalProduct: FC<IModalProduct> = ({ productData, size, openModal }) => {
    const [productSize, setProductSize] = useState('min')
    return (
        <div className={style.card}>
            <div className={style.img}>
                <img src={pizza} alt="product" />
            </div>
            <div className={style.info}>
                <div className={style.stickers}>
                    <ProductCardSticker text="Хит продаж" type="green" />
                </div>
                <div className={style.title}>Марреро</div>
                <div className={style.text}>Cоус «Тар-тар», морской коктейль, креветки, лосось, Моцарелла, соус «Унаги»</div>
                {size.choosing ? (
                    <ProductCardSChooseSize
                        type={productSize}
                        minSize={size.minSize}
                        maxSize={size.maxSize}
                        setProductSize={setProductSize}
                    />
                ) : (
                    <div className={style.size}>
                        <div className={style.min}>{size.minSize}</div>
                        <div className={style.background}></div>
                    </div>
                )}
                <div className={style.inCard}>
                    <Button text={`Добавить в корзину за ${productSize === 'min' ? 650 : 850}`} type="basket" />
                </div>
                <CloseCross openModal={openModal}/>
            </div>
        </div>
    )
}

export default ModalProduct