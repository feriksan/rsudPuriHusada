import axios from "axios"

export default class Api {
    constructor() {
        this.api_token = null;
        this.client = null;
        this.api_url_production = "http://localhost:471"
    }

    init = () => {
        let headers = {
            Accept: "application/json"
        }

        if(this.api_token){
            headers.Authorization = `Bearer ${this.api_token}`
        }

        this.client = axios.create({
            baseURL: this.api_url_production,
            timeout: 31000,
            headers: headers,
        })

        return this.client
    }

    getBpjs = (params) => {
        return this.init().get(`/api/peserta/nik`, {params: params})
    }
    getPoli = (params) => {
        return this.init().get('/api/referensis/poli', {params: params})
    }
    getDoctor = (params) => {
        return this.init().get('/api/referensis/dokterDpjp', {params: params})
    }
}