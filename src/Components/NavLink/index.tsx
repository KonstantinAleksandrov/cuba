import style from './NavLink.module.css'
import { FC } from 'react';

interface INavLink{
    handler? : ()=> void;
    text : string;
}
const NavLink:FC<INavLink> = ({text}) =>{
    return(
        <div className={style.shell}>
            <a href="#" className={style.link}>{text}</a>
        </div>
    )
}
export default NavLink