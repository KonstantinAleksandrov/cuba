import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import {sliderList, slide} from "./data";

const useTime = (defaultValue: number): [slide[], number, Dispatch<SetStateAction<number>>] => {
  const [sliders, setSliders] = useState(sliderList)
  const [sliderCounter, setSliderCounter] = useState(defaultValue);

  const timer = useRef<NodeJS.Timeout | null>(null) // {... current: null}

  useEffect(() => {
    const lastIndex: number = sliders.length - 1
    if (sliderCounter < 0) setSliderCounter(lastIndex)
    if (sliderCounter > lastIndex) {
      setSliderCounter(0)
    }
  }, [sliderCounter, sliders])

  useEffect(() => {
    timer.current && clearTimeout(timer.current)
    timer.current = setTimeout(() => setSliderCounter(sliderCounter + 1), 5000)
  }, [sliderCounter])


  return [sliders, sliderCounter, setSliderCounter]
}


export default useTime