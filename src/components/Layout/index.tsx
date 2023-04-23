import {Header} from "../Header/Header";
import styles from './Layout.module.css'
import {Footer} from "../Footer";
import {connect, ConnectedProps} from "react-redux";
import {appInit} from "../../infrastructure/modules/init/action";
import {useEffect} from "react";


const Layout = ({children, init })=>{
    useEffect(()=>{
        init()
    }, [])
    return <>
        <Header/>
        <main className={styles.Layout}>
            {children}
        </main>
        <Footer/>
    </>
}

const mapDispatchToProps = ({
    init: appInit
})

const connector = connect(null,mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(Layout)
