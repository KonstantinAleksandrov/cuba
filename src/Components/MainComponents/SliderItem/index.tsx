import style from './SliderItem.module.css'
import { FC } from 'react'

const SliderItem:FC<{index: number,color: string}> = ({index,color}) =>{
    return(
        <div className={style.slider__item} style={{backgroundColor: color}}>{index + 1}</div>
    )
}
export default SliderItem