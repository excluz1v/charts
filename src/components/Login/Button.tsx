import {useAuth0} from '@auth0/auth0-react'
import styles from './LoginButton.module.css'

export const LoginButton = () => {
    const {loginWithRedirect, logout, user} = useAuth0()
    console.log(user)
    return <>
        {user ?
        <button className={styles.Logout} onClick={logout}>Выйти</button>
            : <button className={styles.Login} onClick={loginWithRedirect}>
                Вход/Регистрация
            </button>
        }

    </>

}
