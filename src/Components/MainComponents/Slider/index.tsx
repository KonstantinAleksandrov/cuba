import SliderItem from '../SliderItem'
import style from './Slider.module.css'
import { useState, useEffect } from 'react'
import rightArrow from './icons/right.svg'
import leftArrow from './icons/left.svg'
import { sliderList } from './data'


const Slider = () => {
    const [sliders, setSliders] = useState(sliderList)
    const [sliderCounter, setSliderCounter] = useState(0);

    useEffect(() => {
        const lastIndex: number = sliders.length - 1
        if (sliderCounter < 0) setSliderCounter(lastIndex)
        if (sliderCounter > lastIndex) setSliderCounter(0)
    }, [sliderCounter, sliders])

    useEffect(() => {
        let timer = setInterval(() => setSliderCounter(sliderCounter + 1), 5000)
        return () => {
            clearInterval(timer)
        }
    }, [sliderCounter])

    return (
        <div className={style.slider__shell}>
            <div className={style.slider}>
                <div className={style.slider__container}>
                    {sliders.map((slide, slideIndex) => {
                        const { id, backgroundColor } = slide
                        let position: string = 'nextSlide'

                        if (slideIndex === sliderCounter) position = 'activeSlide'
                        if (slideIndex === sliderCounter - 1 || (sliderCounter === 0 && slideIndex === sliders.length - 1)) position = 'lastSlide'

                        return (
                            <SliderItem text={id} backgroundColor={backgroundColor} key={id} position={position}/>
                        )
                    })}
                </div>
                <div className={style.arrows}>
                    <div className={style.next__arrow} onClick={() => setSliderCounter(sliderCounter + 1)}>
                        <img src={rightArrow} alt="right Arrow" />
                    </div>
                    <div className={style.previous__arrow} onClick={() => setSliderCounter(sliderCounter - 1)}>
                        <img src={leftArrow} alt="left Arrow" />
                    </div>
                </div>
            </div>
            <div className={style.dots}>
                {sliders.map((slide, dotIndex) =>{
                    let classModifier: string = ''
                    if (dotIndex === sliderCounter) classModifier = 'activeDot'
                    return(
                        <span className={style[classModifier]} key={slide.id} onClick={() => setSliderCounter(dotIndex)}></span>
                    )
                })}
            </div>
        </div>
    )
}

export default Slider