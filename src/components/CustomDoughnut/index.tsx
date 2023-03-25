import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CoreChartOptions, PluginChartOptions,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {doughnutData} from "../../pages/Home/constants";
import styles from "./CustomDoughnut.module.css";


ChartJS.register(ArcElement, Tooltip, Legend);

export const options: PluginChartOptions<"doughnut"> & CoreChartOptions<"doughnut"> = {
    plugins: {
        legend: {
            display:false,
            labels: {
                textAlign:'right'
            },
        }
    },
    cutout: 125,
};


export const CustomDoughnut = ({data})=>{
    const dataTotalSum=doughnutData.datasets[0].data.reduce((a,b)=>a+b)
    return <section className={styles.Doughnut}>
        <div className={styles.Doughnut__wrapper}>
            <Doughnut data={data} options={options}></Doughnut>
        </div>
        <div>
            {doughnutData.datasets[0].data.map((d,index)=>{
                const color=doughnutData.datasets[0].backgroundColor[index]
                const label=doughnutData.labels[index]
                return <div className={styles.Description} key={index}>
                    <div className={styles.Description__title}>
                        <p className={styles.Mark} style={{backgroundColor:color}}></p>
                        <p style={{color:color}}>{label}</p>
                    </div>
                    <div className={styles.Description__title}>
                        <p className={styles.Description__value}>{d}</p>
                        <p className={styles.Description__percent}>{(d/dataTotalSum*100).toFixed(2)}%</p>
                    </div>
                </div>
            })}
        </div>
    </section>
}
