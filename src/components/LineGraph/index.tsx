import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from "@faker-js/faker";
import {Mark} from "../Mark";

import styles from './LineGraph.module.css'
import {Indicator} from "./Indicator";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const labels = ['Jan 2020', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dev'];

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            display: false
        },
        title: {
            display: false,
            text: 'Line Chart',
        },
    },
    scales: {
        y: {
            position:'right',
            grid:{
                color:'rgba(255, 255, 255, 0.08)',
            },
    border: {
                dash:[2,4]
            }
        },
        x: {
            grid:{
               display:false,
            }
        }
    },
};

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1500000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1500000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export const LineGraph = ()=>{
    return <section className={styles.Line_graph}>
        <div className={styles.Graphic}>
            <div className={styles.Graphic__indicator}>
                <Indicator title='eCPM' value='$1.20' />
                <Indicator title='eCPC' value='$0.23' />
                <Indicator title='CTR' value='0.51%' />
            </div>
            <Line options={options} data={data} />
        </div>
        <div className={styles.Mark}>
            <Mark title='Impressions' count='1 259 347' color='#1EC4DC' />
            <Mark title='Clicks' count='10 313' color='#27AE60' />
        </div>
    </section>
}
