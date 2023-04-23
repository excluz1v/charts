import cookie from 'react-cookies'

export const statusCodes = {
    ok: 200,
    accepted: 202,
    badRequest: 400,
    unauthorized: 401,
    conflict: 409,
    unprocessableEntity: 422,
    serverError: 500,
} as const

export const requestType = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
}

export const headerType = {
    json: 'application/json',
    X_SATRAP_1: 'X-Satrap-1',
    X_SATRAP_2: 'X-Satrap-2',
    LEO_ACCESS_TOKEN: 'atx-scr',
    LEO_REFRESH_TOKEN: 'rtx-scr',
    form: 'application/x-www-form-urlencoded',
}

interface IFetchArgs {
    url: string
    method?: string
    body?: BodyInit
    headers?: HeadersInit
}

export class BaseService {
    headers = {
        leoAccessToken: headerType.LEO_ACCESS_TOKEN,
        leoRefreshToken: headerType.LEO_REFRESH_TOKEN,
        accessTokenHeader: headerType.X_SATRAP_1,
        refreshTokenHeader: headerType.X_SATRAP_2,
        applicationTypeForm: headerType.form,
        applicationTypeJSON: headerType.json,
    }

    requestType = {
        GET: requestType.GET,
        POST: requestType.POST,
        PUT: requestType.PUT,
        PATCH: requestType.PATCH,
    }

    statusCodes = {
        ok: statusCodes.ok,
        badRequest: statusCodes.badRequest,
        unauthorized: statusCodes.unauthorized,
        conflict: statusCodes.conflict,
        unprocessableEntity: statusCodes.unprocessableEntity,
        internalServerError: statusCodes.serverError,
    }

    constructor() {
        this.fetchExtended = this.fetchExtended.bind(this)
        this.handleResponse = this.handleResponse.bind(this)
    }

    fetchExtended({ url, headers, body, method = this.requestType.GET }: IFetchArgs) {
        const currentHeaders = {
                "Content-Type": "application/json",
                "Accept": "application/json",
        }
        return fetch(url, {
            method,
            headers: {
                ...currentHeaders,
                ...headers,
            },
            body,
        })
    }

    handleResponse(response: any): { status: number; payload: any } {
        console.log('3434')
        return response.json().then((data: any) => {
            console.log(data)
            return {
                status: response.status,
                cookie: response.headers.get('set-cookie'),
                payload: data,
            }
        })
    }
}
