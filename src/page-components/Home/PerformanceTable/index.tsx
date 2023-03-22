import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";
import {CustomTable} from "../../../components/Table";
import { performance} from "../../../pages/Home/constants";
import styles from "./PerformanceTable.module.css";

export const PerformanceTable = ()=>{
    return  <section className={styles.Performance__table}>
        <div className={styles.Table__wrapper}>
            <header className={styles.Table__header}>
                <p>Best performing ads</p>
                <p><FontAwesomeIcon size='xl' icon={faGear}/></p>
            </header>
            <CustomTable data={performance}  />
        </div>
        <div className={styles.Table__wrapper}>
            <header className={styles.Table__header}>
                <p>Worst performing ads</p>
                <p><FontAwesomeIcon size='xl' icon={faGear}/></p>
            </header>
            <CustomTable data={performance}  />
        </div>
    </section>
}
