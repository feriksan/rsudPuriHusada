import axios from "axios"

export default class Api {
    constructor() {
        this.api_token = null;
        this.client = null;
        this.api_url_production = "http://localhost:8881"
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
        return this.init().get(`/api/vclaim/peserta/noka`, {params: params})
    }
    getRujukan = (param) =>{
        return this.init().get('/api/vclaim/rujukan/noka', {params: param})
    }
    getNik = (params) => {
        return this.init().get(`/api/vclaim/peserta/nik`, {params: params})
    }
    getPoli = (params) => {
        return this.init().get('/api/vclaim/ref/poli', {params: params})
    }
    getDoctor = (params) => {
        return this.init().get('/api/vclaim/ref/dpjp', {params: params})
    }

    getJadwal = (params) => {
        return this.init().get('/api/antrol/jadwal', {params: params})
    }
    getRujukanNoka = (params) => {
        return this.init().get('/api/vclaim/rujukan/norujukan', {params: params})
    }
    getDiagnosa = (params) => {
        return this.init().get('/api/vclaim/ref/diagnosa', {params: params})
    }

    getSap = (params) => {
        return this.init().post('/api/vclaim/SEPv2/insert', params)
    }
}