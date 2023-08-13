import * as general from "../../resources/auth_commons/general.js"
import * as file_register from "../../resources/register/new_register_params.js"
import http from 'k6/http'

const BODY = file_register.body

export const execute = (auth) => {
    const url = `${general.base_url}${file_register.url}`
    file_register.headers['Authorization'] = `Bearer ${auth.authResponse}`
    return http.post(url, JSON.stringify(BODY), { headers: file_registerc.headers });
}