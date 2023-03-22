import {LineGraph} from "../../components/LineGraph";
import {Filters} from "../../components/FIlters";
import styles from './Home.module.css'
import {CampaignTable} from "../../page-components/Home/CampaignTable";
import {PerformanceTable} from "../../page-components/Home/PerformanceTable";
import {CustomDoughnut} from "../../components/CustomDoughnut";
import {doughnutData} from "./constants";
import {DoughnutsSection} from "../../page-components/Home/DoughnutsSection";

export const Home = ()=>{
    return <section  className='container'>
        <h1>Overview</h1>
        <Filters />
        <LineGraph />
        <CampaignTable />
        <PerformanceTable/>
        <DoughnutsSection />

    </section>
}
