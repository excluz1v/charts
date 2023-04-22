class DashboardService  {
    async getReachModeling (){
        const url = "http://api.briskly.tech/data/companies"

        let headers:HeadersInit = {
            "Content-Type": "application/json",
            "Accept": "application/json",


        };

        return await fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then(response => response.json())
            .then(json => console.log(json));
    }
}

export const dashboardService = new DashboardService()
