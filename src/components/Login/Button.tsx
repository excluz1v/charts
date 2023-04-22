import {useAuth0} from '@auth0/auth0-react'
import styles from './LoginButton.module.css'

export const LoginButton = ({user}) => {

    return <>
        {user ?
        <button className={styles.Logout} >Log out</button>
            : <button className={styles.Login} >
                Log in
            </button>
        }
    </>
}
