import { FC } from 'react'
import style from './ProductCard.module.css'
import pizza from './icons/pizza.png'
import infoIcon from './icons/infoIcon.png'
import Button from '../../Header/Components/Button'
import ProductCardSticker from '../ProductCardSticker'
import { useState } from 'react'
import ProductCardSChooseSize from '../ProductCardSChooseSize'
import { IProductData } from '../../../types'
import Modal from '../../Modal'

const ProductCard: FC<IProductData> = ({ productData, size }) => {
    // TODO: line 41 add mew component for modal view
    const [productSize, setProductSize] = useState('min')
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    return (
        <div className={style.card} onClick={(e): void => e.stopPropagation()}>
            <div
                className={style.img}
                onClick={() => (modalOpen ? null : setModalOpen(true))}
            >
                <img src={pizza} alt="pizza" />
            </div>
            <div className={style.title}>ва-банк</div>
            <div className={style.description}>
                Грудка куриная копченая, колбаски кабаносси, маринованный лук,
                перчик халапеньо, помидоры, соус острый, сыр моцарелла.
            </div>
            <div className={style.bottom}>
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
                <div className={style.buy}>
                    <Button text="В корзину" type="basket" />
                    <div className={style.price}>
                        {productSize === 'min' ? 650 : 850}
                        <span>Р</span>
                    </div>
                </div>
            </div>
            <div className={style.stickers}>
                <ProductCardSticker text="Хит продаж" type="green" />
            </div>
            {modalOpen && (
                <Modal
                    modalId={'modalId' + productData}
                    openModal={setModalOpen}
                >
                    <ProductCard
                        productData={1}
                        size={{
                            choosing: true,
                            minSize: '33 см (1кг)',
                            maxSize: '41 см (1.5кг)',
                        }}
                    />
                </Modal>
            )}
        </div>
    )
}

export default ProductCard
