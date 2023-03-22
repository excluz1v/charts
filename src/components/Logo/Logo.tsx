import logo from "../../assets/img.png";
import styles from './Logo.module.css'

export const Logo= ()=>{
    return <img className={styles.Logo} src={logo} alt='логотип' />
}
