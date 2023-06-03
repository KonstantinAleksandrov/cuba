import Slider from '../Slider'
import style from './Main.module.css'

const Main = () =>{
    return(
        <main className={style.main}>
            <div className={style.container}>
            <Slider/>
            </div>
        </main>
    )
}
export default Main