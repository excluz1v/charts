import styles from './UserInfo.module.css'
import {LoginButton} from "../Login/Button";
import {useAuth0} from '@auth0/auth0-react'

export const UserInfo = () => {

    const {user}= useAuth0()

    return <div className={styles.Auth}>
        {user && <>
            <span>
                {user.name}
            </span>
            <img src={user.picture} alt={user.name} className={styles.avatar} />
        </>}
        <LoginButton />
    </div>
}
