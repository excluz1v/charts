import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

import styles from './Mark.module.css'

type TProps = {
    title: string
    count:string
    color:string
}

export const Mark = ({title, count, color}:TProps)=>{
    return <section className={styles.Mark} style={{borderColor:color}}>
        <div className={styles.Mark__title}>
        <p>{title}</p>
        <FontAwesomeIcon icon={faCheckCircle} color={color} />
        </div>
        <p>{count}</p>
    </section>
}
