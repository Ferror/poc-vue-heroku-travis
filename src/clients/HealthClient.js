const axios = require('axios');
import ServicesData from '@/assets/services.json';

export default {
    getStatus: function() {
        for (let service of ServicesData.services) {
            console.log(service);
            axios
                .get(service)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
}
