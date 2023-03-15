import styles from './UserInfo.module.css'
import avatar from './../../assets/avatar.png'

type TUser = { user: boolean }

export const UserInfo = ({user}:TUser)=>{
    return <div className={styles.Auth}>
        {user ? <>
            <button>Выйти</button>
            <img src={avatar} />
            <p>Name</p>
        </> : <>
            Вход/Регистрация
        </>}
    </div>
}
