import * as auth_service from "../../services/auth_services/auth_service.js"
import { sleep, check } from 'k6'

export default () => {
    const result = auth_service.execute()
    check(result, {
        'status was 200': r => r.status == 200,
        'status 404 not found': r => r.status == 404,
        'erro' : r => r.body.includes("Realm does not exist")
    })
    
    sleep(1);
}