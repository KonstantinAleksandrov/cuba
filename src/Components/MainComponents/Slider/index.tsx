import SliderItem from '../SliderItem'
import style from './Slider.module.css'
import { useMemo, useState } from 'react'
import rightArrow from './icons/right.svg' 
import leftArrow from './icons/left.svg' 


const Slider = () => {
    const sliderList = useMemo<string[]>(() => ['#6495ED','#F0D1AF','#B30018', '#8834B3'], [])
    const [sliderCounter, setSliderCounter] = useState(0);

    return(
        <div className={style.slider__shell}>
            <div className={style.slider}>
                <div className={style.slider__container}>
                    {sliderList.map((slide,index)=><SliderItem index={index} color={slide} key={index + 10}/>)}
                </div>
                <div className={style.arrows}>
                    <div className={style.next__arrow} onClick={() => setSliderCounter(sliderCounter + 1)}>
                        <img src={rightArrow} alt="right Arrow" />
                    </div>
                    <div className={style.previous__arrow}>
                        <img src={leftArrow} alt="left Arrow" />
                    </div>
                </div>
            </div>
            <div className={style.dots}>
                {sliderList.map((slide,index)=><span key={index + 10}></span>)}
            </div>
        </div>
    )
}

export default Slider