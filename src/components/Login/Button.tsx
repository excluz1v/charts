import styles from './LoginButton.module.css'
import {useState} from "react";
import {Modal} from "../Modal";
import LoginForm from "./Form";
import RegisterForm from "../Register/Form";

export const LoginButton = ({user}) => {
    const [showLoginModal, setShowLoginModal] =   useState(false)
    const [showRegModal, setShowRegModal] =   useState(false)

    const loginModalHandler = ()=>{
        setShowLoginModal(prev=>!prev)
    }
    const passwordModalHandler = ()=>{
        setShowRegModal(prev=>!prev)
    }

    return <>
        {showLoginModal && <Modal closeHandler={loginModalHandler} >
            <LoginForm/>
        </Modal>}
        {showRegModal && <Modal closeHandler={passwordModalHandler} >
            <RegisterForm/>
        </Modal>}
        {user ?
        <button className={styles.Logout}>Log out</button>
            : <div className={styles.button__wrapper}>
                <button className={styles.Login} onClick={passwordModalHandler}>Registration</button>
                <button className={styles.Login} onClick={loginModalHandler}>
                    Log in
                </button>
            </div>
        }
    </>
}
