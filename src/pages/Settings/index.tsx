import {Filters} from "../../components/FIlters";
import {CampaignTable} from "../../page-components/Settings/CampaignTable";
import {CreativesGalleryTable} from "../../page-components/Settings/CreativesGalleryTable";
import {PlacementsTable} from "../../page-components/Settings/PlacementsTable";
import {TargetsTable} from "../../page-components/Settings/TargetsTable";

export const Settings= ()=>{
    return <section>
        <h1>Settings</h1>
        <Filters/>
        <CampaignTable/>
        <CreativesGalleryTable />
        <PlacementsTable />
        <TargetsTable />
    </section>
}
