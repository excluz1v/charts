import {Logo} from "../Logo/Logo";
import {UserInfo} from "../UserInfo/UserInfo";
import styles from './Header.module.css'

export const Header =()=>{
    return <header className={styles.Header}>
        <div className={styles.Header__wrapper}>
            <Logo/>
            <UserInfo user={true} />
        </div>

    </header>
}
