const axios = require('axios');

export default class HealthClient
{
    getStatus() {
        let services = JSON.parse("@assets/services.json");

        for (let service in services['services']) {
            console.log(service);
        }
    }
}
