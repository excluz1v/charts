import styles from './Progress.module.css'

export const Progress = ({text,percent})=>{
    return <div className={styles.Wrapper}>
        <p className={styles.Text}>{text}</p>
        <div className={styles.Progress}>
            <p className={styles.Done} style={{width: `${percent}%`}}></p>
        </div>
        <p className={styles.Percent}>{percent}%</p>
    </div>
}
