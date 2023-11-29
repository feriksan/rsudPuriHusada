import { Col, Input, Row} from "antd";
import { useSelector, useDispatch } from 'react-redux'
import FingerInput from "../FingerInput/FingerInput.jsx";
import {useState} from "react";
import Api from "../../helper/Api.js";
import Helper from "../../helper/helper.js";
import {add} from '../../features/bpjs/saveBpjsData'

const bpjs = []
const api = new Api()
const helper = new Helper()
const InputBpjs = ({next}) => {
    const [numberBpjs, setNumberBpjs] = useState(bpjs)
    const [bpjsData, setBpjsData] = useState({})
    const [loaded, setLoaded] = useState(false)
    const count = useSelector((state) => state.bpjs.value)
    const dispatch = useDispatch()

    const changeNumber = (numbers) =>{
        setNumberBpjs(bpjs => [...bpjs, numbers])
    }

    const clearForm = () => {
        setNumberBpjs([])
    }

    const backspace = () => {
        setNumberBpjs(numberBpjs.slice(0, -1))
    }

    const getBpjsData = async() => {
        let data = {
            "noka":numberBpjs.join("").toString(),
            "tgl": helper.formatDate()
        }
        await api
            .getBpjs(data)
            .then((response) => {
                console.log(response)
                setBpjsData(response.data.peserta)
                dispatch(add(response.data.peserta))
                {next()}
                // getSap()
            })
    }

    // const getSap = async() => {
    //     let data = {
    //         "request": {
    //             "t_sep": {
    //                 "noKartu": "0001529593817",
    //                 "tglSep": "2023-11-25",
    //                 "ppkPelayanan": "1101R008",
    //                 "jnsPelayanan": "2",
    //                 "klsRawat": {
    //                     "klsRawatHak": "2",
    //                     "klsRawatNaik": "",
    //                     "pembiayaan": "",
    //                     "penanggungJawab": ""
    //                 },
    //                 "noMR": "035715",
    //                 "rujukan": {
    //                     "asalRujukan": "1",
    //                     "tglRujukan": "",
    //                     "noRujukan": "",
    //                     "ppkRujukan": "11011302"
    //                 },
    //                 "catatan": "Tesing insert SEP IGD",
    //                 "diagAwal": "A01",
    //                 "poli": {
    //                     "tujuan": "IGD",
    //                     "eksekutif": "0"
    //                 },
    //                 "cob": {
    //                     "cob": "0"
    //                 },
    //                 "katarak": {
    //                     "katarak": "0"
    //                 },
    //                 "jaminan": {
    //                     "lakaLantas": "0",
    //                     "penjamin": {
    //                         "tglKejadian": "",
    //                         "keterangan": "",
    //                         "suplesi": {
    //                             "suplesi": "",
    //                             "noSepSuplesi": "",
    //                             "lokasiLaka": {
    //                                 "kdPropinsi": "",
    //                                 "kdKabupaten": "",
    //                                 "kdKecamatan": ""
    //                             }
    //                         }
    //                     }
    //                 },
    //                 "tujuanKunj": "0",
    //                 "flagProcedure": "",
    //                 "kdPenunjang": "",
    //                 "assesmentPel": "",
    //                 "skdp": {
    //                     "noSurat": "",
    //                     "kodeDPJP": ""
    //                 },
    //                 "dpjpLayan": "494786",
    //                 "noTelp": "08546854852",
    //                 "user": "Coba Ws"
    //             }
    //         }
    //     }
    //     await api
    //         .getSap(data)
    //         .then((response) => {
    //             console.log(response)
    //             dispatch(add(response.data.sep))
    //             {next()}
    //         })
    // }

    return(
        <Row gutter={24} align={"middle"} justify="center">
            <Col span={12}>
                <FingerInput setNumber={changeNumber} clearForm={clearForm} backspace={backspace} submit={getBpjsData}></FingerInput>
            </Col>
            <Col span={5}>
                <Input placeholder="Basic usage" value={numberBpjs.join("").toString()}/>
            </Col>
        </Row>
    )
}

export default InputBpjs;