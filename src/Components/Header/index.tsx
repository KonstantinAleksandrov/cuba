import style from './Header.module.css'
import mainLogo from './icons/mainLogo.png'
import City from './Components/City'
import Phones from './Components/Phones'
import {useMemo} from "react";

const Header = () => {
    const cityList = useMemo<string[]>(() => ['Тула', 'Тамбов', 'Липецк', 'Рязань'], []) 
    
    return(
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.header__top}>
                    <div className={style.main_logo}>
                        <img src={mainLogo} alt="main logo"/>
                    </div>
                    <div className={style.cities}>
                        <div className={style.cities_selected}>Воронеж</div>
                        <ul className={style.cities_list}>
                            {cityList.map(city => <City key={city}>{city}</City>)}
                            {/*<City>Тула</City>*/}
                            {/*<City>Тамбов</City>*/}
                            {/*<City>Липецк</City>*/}
                            {/*<City>Рязань</City>*/}
                        </ul> 
                    </div>
                    <div className={style.workTime}>10:00 — 00:00 / 00:01 — 09:00</div>
                    <Phones/>
                </div>
                <div className={style.header__bottom}>

                </div>
            </div>
        </header>
    )
}


export default Header