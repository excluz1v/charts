import {LineGraph} from "../../components/LineGraph";
import {Filters} from "../../components/FIlters";
import {CampaignTable} from "../../page-components/Home/CampaignTable";
import {PerformanceTable} from "../../page-components/Home/PerformanceTable";
import {DoughnutsSection} from "../../page-components/Home/DoughnutsSection";
import {ProgressSection} from "../../page-components/Home/ProgressSection";

export const Home = ()=>{

    return <section  className='container'>
        <h1>Overview</h1>
        {/*<Filters />*/}
        {/*<LineGraph />*/}
        <CampaignTable />
        <PerformanceTable/>
        <DoughnutsSection />
        <ProgressSection />
    </section>
}
