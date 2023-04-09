import {Logo} from "../Logo/Logo";
import {UserInfo} from "../UserInfo/UserInfo";
import {Navigation} from "../Navigation";
import styles from './Header.module.css'

export const Header = () =>{
    return <header className={styles.Header}>
        <div className={styles.Header__wrapper}>
            <Logo/>
            <Navigation/>
            <UserInfo user={false} />
        </div>

    </header>
}
