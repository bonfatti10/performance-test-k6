import * as auth_service from "../../services/auth_services/auth_service.js"
import * as service from "../../services/register_services/new_register_service.js"
import { sleep, check } from 'k6'


export let options = {
    vus: 10,
    duration: '30s',
    thresholds:{
        http_req_duration: ['p(95)<2000'], //95% das requisicoes devem responder em até 2s
        http_req_failed: ['rate<0.1'] //1% das requisicoes podem ocorrer erro
    }
}

export function setup() {
    return {
        authResponse: (JSON.parse(auth_service.execute().body).access_token)
    }
}

export default function (data) {
    const result = service.execute(data)

    check(result, {
        'status was 200': r => r.status == 200,
        'content message': r => r.body.includes("Cadastro realizado com sucesso"),
        'content response_code': r => r.body.includes("response_code")
    })

    sleep(1);

}
