import styles from './LoginButton.module.css'
import {useState} from "react";
import {RootState} from "../../infrastructure/redux/store";
import {loginRequest} from "../../infrastructure/modules/user/action";
import {connect, ConnectedProps} from "react-redux";

const LoginForm = ({loginRequest}:PropsFromRedux)=>{

    const [login, setLogin]=useState('')
    const [password, setPassword]=useState('')

    const loginHandler = e =>{
       const target = e.target
        setLogin(target.value)
    }
    const passwordHandler = e =>{
        const target = e.target
        setPassword(target.value)
    }
    const submitHandler = e =>{
        e.preventDefault()
        loginRequest({password, login})
    }

    return <section className={styles.LoginWrapper}>
        <h2>Login</h2>
        <form className={styles.LoginForm} onSubmit={submitHandler}>
            <input className={styles.input} placeholder='Login' value={login} onChange={loginHandler} />
            <input className={styles.input} type='password' placeholder='Password' value={password} onChange={passwordHandler} />

            <button className={styles.button}>
                Confirm
            </button>
        </form>
    </section>
}

const mapStateToProps = (state: RootState) => ({
    user: state.user.user,
    loading: state.user.loading,
    error: state.user.error,
})

const mapDispatchToProps = ({
    loginRequest
})

const connector = connect(mapStateToProps,mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(LoginForm)
