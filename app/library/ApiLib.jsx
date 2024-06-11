import axios from "axios";

const ApiLib = axios.create({
    baseURL: 'https://data.mongodb-api.com/app/',
    headers: {
        'api-key' : ''
    }
})