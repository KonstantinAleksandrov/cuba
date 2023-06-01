import style from './Slider.module.css'



const Slider = () =>{
    return(
        <div className={style.slider}>
        <div className={style.slider__container}>
            
        </div>
        <div className={style.arrows}>
            <div className={style.next__arrow}>
            </div>
            <div className={style.previous__arrow}>
            </div>
        </div>
    </div>
    )
}

export default Slider