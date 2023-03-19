import styles from "./LineGraph.module.css";

export const Indicator = ({title, value})=>{
    return <div>
            <p className={styles.Indicator__title}>{title}</p>
            <p className={styles.Indicator__value}>{value}</p>
        </div>
}
