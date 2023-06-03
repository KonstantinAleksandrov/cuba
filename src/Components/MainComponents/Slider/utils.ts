

interface IswipeSlide{
    setSliderCounter : (sliderCount : number) => any;
    sliderCounter : number;
    length : number;
}
const swipeSlide = (state: IswipeSlide) =>{
    state.setSliderCounter(state.sliderCounter)
    if(state.sliderCounter > length - 1){
        state.sliderCounter = 0 
    }else if(state.sliderCounter < 0){
        state.sliderCounter = length - 1
    }
   /*  sliderContainer.style.right = state.sliderCounter * slider.offsetWidth  + 'px'  */
}

export default swipeSlide