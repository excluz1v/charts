import {doughnutData} from "../../../pages/Home/constants";
import styles from './Doughnuts.module.css'
import {CustomDoughnut} from "../../../components/CustomDoughnut";

export const DoughnutsSection = ()=>{

    return <section className={styles.Doughnuts}>
        <div className={'wrapper'+ " " +styles.Doughnut__container}>
            <p>Split by platforms</p>
            <div className={styles.Doughnut__wrapper}>
                <CustomDoughnut data={doughnutData} />
            </div>
        </div>
        <div className={'wrapper'+ " " +styles.Doughnut__container}>
            <p>Operating Systems</p>
            <div className={styles.Doughnut__wrapper}>
                <CustomDoughnut data={doughnutData} />
            </div>
        </div>
    </section>
}
