import BlockProducts from '../BlockProducts'
import Slider from '../Slider'
import style from './Main.module.css'
import { useMemo } from 'react'

const Main = () => {
    const pizza = useMemo<number[]>(()=>[1,2,3,4,5,6,7,8,9,10],[])
    const snaks = useMemo<number[]>(()=>[1,2,3,4,5,6,7,8,9],[])
    const beverages = useMemo<number[]>(()=>[1,2,3,4],[])
    return(
        <main className={style.main}>
            <div className={style.container}>
            <Slider/>
            <BlockProducts title='Пицца' products={pizza}/>
            <BlockProducts title='Закуски' products={snaks}/>
            <BlockProducts title='Напитки' products={beverages}/>
            </div>
        </main>
    )
}
export default Main