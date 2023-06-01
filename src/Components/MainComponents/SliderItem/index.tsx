import style from './SliderItem.module.css'
import { FC } from 'react'

const SliderItem:FC<{index : number}> = ({index}) =>{
    return(
        <div className={style.slider__item}>{index}</div>
    )
}
export default SliderItem