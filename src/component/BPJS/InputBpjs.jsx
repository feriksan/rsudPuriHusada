import { Col, Input, Row} from "antd";
import { useDispatch } from 'react-redux'
import FingerInput from "../FingerInput/FingerInput.jsx";
import {useState} from "react";
import Api from "../../helper/Api.js";
import Helper from "../../helper/helper.js";
import {add} from '../../features/bpjs/saveBpjsData'
import {addRujukan} from '../../features/rujukan/saveRujukanData.js'

const bpjs = [0,0,0,2,0,5,0,4,3,8,7,9,2]
const api = new Api()
const helper = new Helper()
const InputBpjs = ({next,complete}) => {
    const [numberBpjs, setNumberBpjs] = useState(bpjs)
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
                dispatch(add(response.data.peserta))
                getRujukan(numberBpjs.join("").toString())
                // {next()}
                // {complete(1)}
            })
    }

    const getRujukan = async(bpjsNumber) => {
        let data = {
            "noka":bpjsNumber,
        }
        await api
            .getRujukan(data)
            .then((response) => {
                console.log(response)
                dispatch(addRujukan(response.data))
                {next()}
            })
    }

    return(
        <Row gutter={24} align={"middle"} justify="center">
            <Col span={12}>
                <FingerInput setNumber={changeNumber} numbers={numberBpjs} clearForm={clearForm} backspace={backspace} submit={getBpjsData}></FingerInput>
            </Col>
            <Col span={5}>
                <Input placeholder="Basic usage" value={numberBpjs.join("").toString()}/>
            </Col>
        </Row>
    )
}

export default InputBpjs;