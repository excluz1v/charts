import styles from "./CreativeGallery.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";
import {CustomTable} from "../../../components/Table";
import {galleries} from "../../../pages/Settings/constants";

export const CreativesGalleryTable = ()=>{
    return <section className='wrapper'>
        <header className={styles.Table__header}>
            <p>Creatives Gallery</p>
            <button><FontAwesomeIcon size='xl' icon={faGear}/></button>
        </header>
        <CustomTable data={galleries}/>
    </section>
}
