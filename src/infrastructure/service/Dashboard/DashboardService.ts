import {BASE_URL} from "../UserService/config";
import {
    GET_COMPANIES_URL,
    REACH_MODELING_URL,
    GET_CONVERSION_URL,
    GET_COMPANIES_LIST_URL,
    GET_BEST_ADVERTISE_URL,
    GET_WORST_ADVERTISE_URL,
    GET_SPLIT_BROWSER_URL,
    GET_SPLIT_OS_URL,
    GET_SPLIT_VENDOR_URL,
    GET_SPLIT_GENDER_URL, GET_SPLIT_AGE_URL, GET_SPLIT_CITY_URL, GET_SPLIT_CREATIVE_URL, GET_DELIVERY_WEEKEND_URL
} from "./config";

// let headers:HeadersInit = {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//
//
// };

class DashboardService  {
    async getReachModeling (){
        return await fetch(BASE_URL + REACH_MODELING_URL )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getCompanies (){
        return await fetch(BASE_URL + GET_COMPANIES_URL)
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getCompaniesList (){
        return await fetch(BASE_URL + GET_COMPANIES_URL)
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getConversionData (){
        return await fetch(BASE_URL + GET_CONVERSION_URL, {method: "POST"})
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getSpecifiecCompany (company){
        return await fetch(BASE_URL + GET_COMPANIES_LIST_URL + company )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getDay (company){
        return await fetch(BASE_URL + GET_COMPANIES_LIST_URL + company+ '/days' )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getDaysTotal (company){
        return await fetch(BASE_URL + GET_COMPANIES_LIST_URL + company+ '/daystotal' )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getTargetings (company){
        return await fetch(BASE_URL + GET_COMPANIES_LIST_URL + company+ '/targetings' )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getCreatives (company){
        return await fetch(BASE_URL + GET_COMPANIES_LIST_URL + company+ '/targetings' )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getPlacements (company){
        return await fetch(BASE_URL + GET_COMPANIES_LIST_URL + company+ '/placements' )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getPlacementsFull (company){
        return await fetch(BASE_URL + GET_COMPANIES_LIST_URL + company+ '/placementsfull' )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getWhiteList (company){
        return await fetch(BASE_URL + GET_COMPANIES_LIST_URL + company+ '/whitelist' )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getBlackList (company){
        return await fetch(BASE_URL + GET_COMPANIES_LIST_URL + company+ '/blacklist' )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getBestAdvertise (company){
        return await fetch(BASE_URL + GET_BEST_ADVERTISE_URL )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getWorstAdvertise (){
        return await fetch(BASE_URL + GET_WORST_ADVERTISE_URL )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getSplitBrowser (){
        return await fetch(BASE_URL + GET_SPLIT_BROWSER_URL )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getSplitOS (){
        return await fetch(BASE_URL + GET_SPLIT_OS_URL )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getSplitVendor (){
        return await fetch(BASE_URL + GET_SPLIT_VENDOR_URL )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getSplitAge (){
        return await fetch(BASE_URL + GET_SPLIT_AGE_URL )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getSplitCity (){
        return await fetch(BASE_URL + GET_SPLIT_CITY_URL )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getSplitCreative (){
        return await fetch(BASE_URL + GET_SPLIT_CREATIVE_URL )
            .then(response => response.json())
            .then(json => console.log(json));
    }
    async getDeliveryWeekend (){
        return await fetch(BASE_URL + GET_DELIVERY_WEEKEND_URL )
            .then(response => response.json())
            .then(json => console.log(json));
    }
}

export const dashboardService = new DashboardService()
