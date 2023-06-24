import style from './Phones.module.css'
import Phone from '../Phone'

const Phones = () => {
    return (
        <ul className={style.phones}>
            <Phone number="123-45-67" />
            <Phone number="+12345678910" />
        </ul>
    )
}
export default Phones
