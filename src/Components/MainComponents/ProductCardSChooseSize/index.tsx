import { FC, Dispatch, SetStateAction } from 'react'
import style from './ProductCardSChooseSize.module.css'

interface IProductCardSChooseSize {
    type: string
    minSize: string
    maxSize: string
    setProductSize: Dispatch<SetStateAction<string>>
}

const ProductCardSChooseSize: FC<IProductCardSChooseSize> = ({
    type,
    minSize,
    maxSize,
    setProductSize,
}) => {
    return (
        <div className={style.size__choose}>
            <div className={style.min} onClick={() => setProductSize('min')}>
                {minSize}
            </div>
            <div className={style.max} onClick={() => setProductSize('max')}>
                {maxSize}
            </div>
            <div
                className={[
                    style.background,
                    style[`background__${type}`],
                ].join(' ')}
            ></div>
        </div>
    )
}
export default ProductCardSChooseSize
