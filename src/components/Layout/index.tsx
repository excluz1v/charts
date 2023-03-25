import {Header} from "../Header/Header";
import styles from './Layout.module.css'
import {Footer} from "../Footer";


export const Layout = ({children})=>{
    return <>
        <Header/>
        <main className={styles.Layout}>
            {children}
        </main>
        <Footer/>
    </>
}
