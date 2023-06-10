import style from './ProductCardSticker.module.css'
import { FC } from 'react';

interface IProductCardSticker {
    text: string;
    type: string;
}

const ProductCardSticker: FC<IProductCardSticker> = ({text,type}) =>{
    return (
        <div className={[style.sticker, style[type]].join(' ')}>{text}</div>
    )
}
 
export default ProductCardSticker