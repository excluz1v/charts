import {LineGraph} from "../../components/LineGraph";
import {Filters} from "../../components/FIlters";
import styles from './Home.module.css'
import {CampaignTable} from "../../page-components/Home/CampaignTable";
import {PerformanceTable} from "../../page-components/Home/PerformanceTable";

export const Home = ()=>{
    return <section  className='container'>
        <h1>Overview</h1>
        <Filters />
        <LineGraph />
        <CampaignTable />
        <PerformanceTable/>
    </section>
}
