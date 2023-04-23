import {
    BASE_URL,
    FORGOT_PASSWORD_URL, GET_PASSWORD_STATUS_URL,
    LOGIN_URL,
    LOGOUT_URL,
    REGISTER_URL,
    RESET_PASSWORD_URL, TRIGGER_COOKIE_URL,
    UPDATE_USER_INFO_URL, UPDATE_USER_PASSWORD_URL
} from "./config";
import {BaseService} from "../Base/BaseService";
import axios from "axios";

class UserService extends BaseService{
    async login () {
        return await this.fetchExtended({url: BASE_URL+ LOGIN_URL, method: 'POST'})
            .then(response =>this.handleResponse(response))
    }
    async logout () {
        return await this.fetchExtended({url: BASE_URL + LOGOUT_URL, method: 'POST'})
            .then(response =>this.handleResponse(response))
    }
    async forgotPassword () {
        return await this.fetchExtended({url: BASE_URL+ FORGOT_PASSWORD_URL, method: 'POST'})
            .then(response =>this.handleResponse(response))
    }
    async resetPassword () {
        return await this.fetchExtended( {url: BASE_URL+ RESET_PASSWORD_URL,method: 'POST'})
            .then(response =>this.handleResponse(response))
    }
    async register (credentials) {
        return await this.fetchExtended({url:BASE_URL+ REGISTER_URL, method: 'POST', body: JSON.stringify(credentials)})
            .then(response =>this.handleResponse(response))
    }
    async updateUserInfo () {
        return await this.fetchExtended({url:BASE_URL+ UPDATE_USER_INFO_URL, method: 'PUT'})
            .then(response =>this.handleResponse(response))
    }
    async getPasswordStatus () {
        return await this.fetchExtended({url:BASE_URL+ GET_PASSWORD_STATUS_URL, method: 'PUT'})
            .then(response =>this.handleResponse(response))
    }
    async updateUserStatus () {
        return await this.fetchExtended({url:BASE_URL+ UPDATE_USER_PASSWORD_URL, method: 'PUT'})
            .then(response =>this.handleResponse(response))
    }
     triggerCookie () {
        return axios.get(BASE_URL+ TRIGGER_COOKIE_URL, {
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        }).then(res=>{
            console.log(res.headers)
            console.log(res.data)
            // axios.post(BASE_URL+ REGISTER_URL, {}, {
            //         // headers:{
            //         //     'X-XSRF-TOKEN': 'eyJpdiI6Img3VE5oaVRJUjZ6NFkyMmFBS3YxOEE9PSIsInZhbHVlIjoiTmlOdW14UVNjSWE2dllZUzJld0ZCZHFMQ1RFOS9qMXFzeCt6TUR2WDE0ZTJ0UnBIemhmLzBPallLTDQxZDNRVnNKM1VCWnVRNFpnM2g1UktNM1pabWxqaUtRRkZtZjVrMzd3NVFvaUU1eTNFaHlkOHRPWENPYlY3a2JWckFNYmsiLCJtYWMiOiJiYTJiZTIzNDY5MWQ3ODg0NjJmNzM4ZDJhMDc3NDA2YjY1YjY2MDM1ZGUyYjA0ZDE1MjU3NWYyZDBkZTNmZDNhIiwidGFnIjoiIn0%3D'
            //         // }
            // }
            //    )
            console.log(res)
        })
    }
}

export const userService= new UserService()
