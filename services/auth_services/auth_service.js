import * as general from "../../resources/auth_commons/general.js"
import * as auth from "../../resources/auth_commons/auth.js"
import http from 'k6/http'

const HEADERS = {
    headers: auth.headers
}

const BODY = auth.body

export const execute = () => {
    const url = `${general.base_url}${auth.url}`
    return http.post(url, JSON.stringify(BODY), HEADERS);
}
