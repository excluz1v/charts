import {Progress} from "../../../components/Progress";
import {progressData} from "../../../pages/Home/constants";
import styles from './ProgressSection.module.css'

export const ProgressSection = ()=>{
    const totalSum=progressData.reduce((a,b)=> a +b.value, 0)
    return <section className={styles.Progress}>
        <div className='wrapper'>
            <p className={styles.Progress__title}>Delivery by Weekday</p>
            {progressData.map(el=>{
                return <Progress text={el.text} percent={(el.value/totalSum*100).toFixed(2)} />
            })}
        </div>
        <div className='wrapper'>
            <p className={styles.Progress__title}>Demography, city</p>
            {progressData.map(el=>{
                return <Progress text={el.text} percent={(el.value/totalSum*100).toFixed(2)} />
            })}
        </div>
    </section>
}
