import style from './Header.module.css'
import mainLogo from './icons/mainLogo.jpg'
import City from './Components/City'
import Phones from './Components/Phones'
import Button from './Components/Button'
import NavLink from './Components/NavLink'
import { Link } from 'react-router-dom'
import { products } from '../MainComponents/ProductsData'
import Modal from "../Modal";
import SignInForm from '../SignInForm'
import {useState} from 'react'

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.header__top}>
                    <Link to="/" className={style.main__logo}>
                        <img src={mainLogo} alt="main logo" />
                    </Link>
                    <div className={style.cities}>
                        <div className={style.cities_selected}>Воронеж</div>
                        <ul
                            className={style.cities_list}
                            style={{ display: 'none' }}
                        >
                            <City>Тула</City>
                            <City>Тамбов</City>
                            <City>Липецк</City>
                            <City>Рязань</City>
                        </ul>
                    </div>
                    <div className={style.content}>
                        <div className={style.workTime}>
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                fill="white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
                                ></path>
                            </svg>
                            <div className={style.workTime__text}>
                                10:00 — 00:00 / 00:01 — 09:00
                            </div>
                        </div>
                        <Phones />
                        <Button text="Войти" type="default" onClick={() => setIsModalOpen(true)}/>
                        {isModalOpen && <Modal modalId="sign-in" openModal={setIsModalOpen}>
                            <SignInForm/>
                        </Modal>}
                    </div>
                </div>
                <div className={style.header__bottom}>
                    <div className={style.header__menu}>
                        <NavLink
                            text={products.pizza.type}
                            route={products.pizza.route}
                        />
                        <NavLink
                            text={products.snaks.type}
                            route={products.snaks.route}
                        />
                        <NavLink
                            text={products.beverages.type}
                            route={products.beverages.route}
                        />
                    </div>
                    <Button text="Корзина" type="basket" />
                </div>
            </div>
        </header>
    )
}

export default Header
