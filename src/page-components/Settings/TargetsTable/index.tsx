import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faSort} from "@fortawesome/free-solid-svg-icons";
import styles from "./TargetsTable.module.css";
import * as React from "react";

export const TargetsTable= ()=>{
    return <section className='wrapper'>
        <header className={styles.Table__header}>
            <p>Targets</p>
            <button><FontAwesomeIcon size='xl' icon={faGear}/></button>
        </header>
        <div className={styles.Targets__table}>
            <div className={styles.Table}>
                <p className={styles.Table__title}>Target <FontAwesomeIcon icon={faSort} /></p>
                <p>Age</p>
                <p>Sex</p>
                <p>Geo fense</p>
            </div>
            <div className={styles.Table}>
                <p className={styles.Table__title}>Target value <FontAwesomeIcon icon={faSort} /></p>
                <p>35-45</p>
                <p>male</p>
                <p>m3424#xe3343</p>
            </div>
        </div>
    </section>
}
