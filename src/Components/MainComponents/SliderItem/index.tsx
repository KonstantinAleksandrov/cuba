import style from './SliderItem.module.css'
import { FC } from 'react'

const SliderItem:FC<{text: number,backgroundColor: string, position: string}> = ({text,backgroundColor,position}) =>{
    return(
        <div className={[style.slider__item,style[position]].join(' ')} style={{backgroundColor: backgroundColor}}>{text}</div>
    )
}
export default SliderItem