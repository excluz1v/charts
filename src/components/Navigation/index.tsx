import {NavLink} from "react-router-dom";
import styles from './Navigation.module.css'

export const Navigation = ()=>{
    return <nav>
        <ul className={styles.Navigation}>

            <li>
                <NavLink
                    to='/'
                    className={({ isActive }) => {
                        return isActive ? styles.Active : styles.Inactive;
                    }}
                >Overview</NavLink>
            </li>
            <li>
                <NavLink to='/settings' className={({ isActive }) => {
                return isActive ? styles.Active : styles.Inactive;
            }}>Campaign`s settings</NavLink>
            </li>
        </ul>
    </nav>
}
