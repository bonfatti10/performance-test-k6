import * as auth_service from "../../services/auth_services/auth_service.js"
import * as service from "../../services/register_services/update_register_service.js"
import { sleep, check } from 'k6'



export const options = {
    stages: [
      { duration: '10m', target: 200 }, 
      { duration: '30m', target: 200 }, 
      { duration: '5m', target: 0 }, 
    ]
};

export function setup() {
    return {
        authResponse: (JSON.parse(auth_service.execute().body).access_token)
    }
}

export default function (data) {
    const result = service.execute(data)
    check(result, {
        'status was 200': r => r.status == 200,
        'content message': r => r.body.includes("atualizado com sucesso"),
        'content response_code': r => r.body.includes("response_code")
    })

    sleep(1);

}
