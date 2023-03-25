import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";
import {CustomTable} from "../../../components/Table";
import {campaigns} from "../../../pages/Home/constants";
import styles from "./CampaignTable.module.css";

export const CampaignTable = ()=>{
    return  <section className='wrapper'>
        <header className={styles.Table__header}>
            <p>Campaigns</p>
            <button><FontAwesomeIcon size='xl' icon={faGear}/></button>
        </header>
        <CustomTable data={campaigns} sortable />
    </section>
}
