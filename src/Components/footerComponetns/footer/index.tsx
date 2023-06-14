import Phones from '../../Header/Components/Phones'
import style from './Footer.module.css'
import { activeLinks } from '../Link/data'
import Link from '../Link'

const Footer = () =>{
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.info__activeLinks}>
                    {activeLinks.map((link)=><Link key={link} title={link}/>)}
                </div>
                <div className={style.info__staticLinks}>
                    <Phones/>
                </div>
            </div>
        </footer>
    )
}

export default Footer