import {LineGraph} from "../../components/LineGraph";
import {Filters} from "../../components/FIlters";
import {CampaignTable} from "../../page-components/Home/CampaignTable";
import {PerformanceTable} from "../../page-components/Home/PerformanceTable";
import {DoughnutsSection} from "../../page-components/Home/DoughnutsSection";
import {ProgressSection} from "../../page-components/Home/ProgressSection";
import {RootState} from "../../infrastructure/redux/store";
import {connect, ConnectedProps} from "react-redux";
import {loginRequest} from "../../infrastructure/modules/user/action";

const Home = ({}:PropsFromRedux)=>{

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

const mapStateToProps = (state: RootState) => ({
        user: state.user.user
})
const mapDispatchToProps = ({
        getUsers: loginRequest
})

const connector = connect(mapStateToProps,mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(Home)

