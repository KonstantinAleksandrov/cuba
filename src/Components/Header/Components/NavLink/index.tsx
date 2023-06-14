import style from './NavLink.module.css'
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface INavLink{
    route: string
    text: string
    className?: string
}
const NavLink:FC<INavLink> = ({text,route,className = 'link'}) =>{
    return(
        <div className={style.shell}>
            <Link to={route} className={style[className]}>{text}</Link>
        </div>
    )
}
export default NavLink