import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";
import {CustomTable} from "../../../components/Table";
import {campaigns} from "../../../pages/Home/constants";
import styles from "./CampaignTable.module.css";

export const CampaignTable = ()=>{
    return  <section className='wrapper'>
        <header className={styles.Table__header}>
            <p>Campaigns</p>
            <p><FontAwesomeIcon size='xl' icon={faGear}/></p>
        </header>
        <CustomTable data={campaigns} sortable />
    </section>
}
