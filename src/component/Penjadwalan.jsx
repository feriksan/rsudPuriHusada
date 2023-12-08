import {Divider, message, Select} from "antd";
import Api from "../helper/Api.js";
import {useEffect, useState} from "react";
import Helper from "../helper/helper.js";
import {useDispatch, useSelector} from "react-redux";
import {add} from "../features/penjadwalan/saveJadwal.js";

const api = new Api()
const helper = new Helper()

const dataPoli = {
    "data": [
        {
            "kode": "AKP",
            "value": "Akupuntur"
        },
        {
            "kode": "ALG",
            "value": "Alergi"
        },
        {
            "kode": "ANA",
            "value": "Poli Anak"
        },
        {
            "kode": "ANU",
            "value": "Anuscopy"
        },
        {
            "kode": "APT",
            "value": "APOTIK"
        },
        {
            "kode": "ASM",
            "value": "ASM"
        },
        {
            "kode": "BDS",
            "value": "BDS"
        },
        {
            "kode": "BED",
            "value": "Poli Bedah"
        },
        {
            "kode": "BSY",
            "value": "Bedah Syaraf"
        },
        {
            "kode": "CAN",
            "value": "CAN"
        },
        {
            "kode": "CAP",
            "value": "Unit Pelayanan CAPD"
        },
        {
            "kode": "CTS",
            "value": "CT Scan"
        },
        {
            "kode": "DBM",
            "value": "Diabetes Melitus"
        },
        {
            "kode": "DRH",
            "value": "Darah"
        },
        {
            "kode": "ECO",
            "value": "Echo"
        },
        {
            "kode": "EKG",
            "value": "Rekam Jantung"
        },
        {
            "kode": "ELK",
            "value": "ELK"
        },
        {
            "kode": "END",
            "value": "Endokrin"
        },
        {
            "kode": "ESW",
            "value": "ESWL"
        },
        {
            "kode": "FIS",
            "value": "Fisioterapi"
        },
        {
            "kode": "GAS",
            "value": "Gastro"
        },
        {
            "kode": "GER",
            "value": "Geriatri"
        },
        {
            "kode": "GIG",
            "value": "Poli Gigi"
        },
        {
            "kode": "GIN",
            "value": "Ginjal"
        },
        {
            "kode": "GIZ",
            "value": "Gizi"
        },
        {
            "kode": "GP1",
            "value": "Gigi"
        },
        {
            "kode": "GTS",
            "value": "GILA"
        },
        {
            "kode": "HAM",
            "value": "HAM"
        },
        {
            "kode": "HCU",
            "value": "High Care Unit"
        },
        {
            "kode": "HDL",
            "value": "Hemodialisa"
        },
        {
            "kode": "HEM",
            "value": "Hematologi"
        },
        {
            "kode": "HEP",
            "value": "Hepatologi"
        },
        {
            "kode": "ICU",
            "value": "Intensive Care Unit"
        },
        {
            "kode": "IGD",
            "value": "Instalasi Gawat Darurat"
        },
        {
            "kode": "IKA",
            "value": "Ilmu Kesehatan Anak"
        },
        {
            "kode": "INF",
            "value": "INSTALASI FARMASI"
        },
        {
            "kode": "INT",
            "value": "Poli Penyakit Dalam"
        },
        {
            "kode": "IPD",
            "value": "Ilmu Penyakit Dalam"
        },
        {
            "kode": "IRM",
            "value": "Installasi Rehabilitasi Medik"
        },
        {
            "kode": "IVP",
            "value": "Intravena Pydografi"
        },
        {
            "kode": "JAN",
            "value": "Poli Jantung"
        },
        {
            "kode": "JIW",
            "value": "Poli Penyakit Jiwa"
        },
        {
            "kode": "JWA",
            "value": "Jiwa Anak"
        },
        {
            "kode": "JWD",
            "value": "Jiwa Dewasa"
        },
        {
            "kode": "KLT",
            "value": "Poli Kulit"
        },
        {
            "kode": "KOL",
            "value": "KOL"
        },
        {
            "kode": "LAB",
            "value": "Laboratorium"
        },
        {
            "kode": "LAI",
            "value": "Lain-Lain"
        },
        {
            "kode": "MAT",
            "value": "Poli Penyakit Mata"
        },
        {
            "kode": "MRI",
            "value": "MRI"
        },
        {
            "kode": "NUK",
            "value": "Radioterapi/Nuklir"
        },
        {
            "kode": "OBG",
            "value": "Poli Obstetri/Gyn."
        },
        {
            "kode": "OKM",
            "value": "OKM"
        },
        {
            "kode": "OPT",
            "value": "OPTIK"
        },
        {
            "kode": "ORT",
            "value": "ORT"
        },
        {
            "kode": "OTL",
            "value": "OTL"
        },
        {
            "kode": "PAR",
            "value": "Poli Paru-paru"
        },
        {
            "kode": "PAT",
            "value": "PAT"
        },
        {
            "kode": "PKM",
            "value": "PUSKESMAS"
        },
        {
            "kode": "PMI",
            "value": "PMI"
        },
        {
            "kode": "PPK",
            "value": "PPK"
        },
        {
            "kode": "PSI",
            "value": "PSI"
        },
        {
            "kode": "PSK",
            "value": "PSK"
        },
        {
            "kode": "PUL",
            "value": "Pulmonologi"
        },
        {
            "kode": "R12",
            "value": "Boneseah"
        },
        {
            "kode": "RAA",
            "value": "Radiologi Anak"
        },
        {
            "kode": "RAD",
            "value": "Radiologi"
        },
        {
            "kode": "RAT",
            "value": "Radioterapi"
        },
        {
            "kode": "REM",
            "value": "REM"
        },
        {
            "kode": "RHM",
            "value": "Rheumatologi"
        },
        {
            "kode": "RO2",
            "value": "RO2"
        },
        {
            "kode": "SAR",
            "value": "Poli Penyakit Saraf"
        },
        {
            "kode": "SPC",
            "value": "SPC"
        },
        {
            "kode": "TAK",
            "value": "TAK"
        },
        {
            "kode": "THT",
            "value": "Poli Telinga/Hidung/Tenggorok"
        },
        {
            "kode": "TON",
            "value": "Treadmil Test"
        },
        {
            "kode": "TRD",
            "value": "TUM"
        },
        {
            "kode": "TUM",
            "value": "Unit Gawat Darurat"
        },
        {
            "kode": "UGD",
            "value": "URE"
        },
        {
            "kode": "URE",
            "value": "URF"
        },
        {
            "kode": "URF",
            "value": "URO"
        },
        {
            "kode": "URO",
            "value": "USG"
        }
    ]
}
const Penjadwalan = ({disabled}) => {
    const [poli, setPoli] = useState([])
    const [dokter, setDokter] = useState([])
    const [jadwal, setJadwal] = useState([])
    const [selectedPoli, setSelectedPoli] = useState(null)
    const [selectedDoctor, setSelectedDoctor] = useState()
    const [selectedJadwal, setSelectedJadwal] = useState()
    const [disableSelect, setDisableSelect] = useState(true)
    const [selectedDoctorCode, setSelectedDoctorCode] = useState(0)
    const dispatch = useDispatch()
    const rujukanData = useSelector((state) => state.rujukan.value)
    const [messageApi, contextHolder] = message.useMessage();
    let dataJson = {}

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Dokter dan Jadwal tersedia',
        });
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Dokter dan Jadwal tidak tersedia untuk poli ini',
        });
    };

    const onChangePoli = (value, element) => {
        setSelectedPoli(element)
        setDisableSelect(true)
        setSelectedDoctor(null)
        setSelectedJadwal(null)
        console.log(`selected ${element}`);
        getDokter(value);
    };
    const onChangeDoctor = (value,element) => {
        setSelectedDoctor(element.label);
        // setSelectedDoctor(value);
        setDisableSelect(false)
        setSelectedDoctorCode(value);
        getJadwal(value);
        console.log(`selected ${value}`);
    };
    const onChangeJadwal = (value) => {
        console.log(selectedPoli);
        setSelectedJadwal(value)
        dataJson = {
            "poli":selectedPoli.label ?? "",
            "doctor":selectedDoctor ?? "",
            "jadwal":value ?? ""
        }
        {disabled(false)}
        dispatch(add({dataJson}))
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const getPoli = async() =>{
        await api
            .getPoli({"poli":rujukanData.rujukan ? rujukanData.rujukan.poliRujukan : dataPoli})
            .then((response) => {
                console.log(response.data)
                setPoli(response.data.code === "201" ? [] : response.data.poli)
            })
    }

    const getDokter = async(kodePoli) =>{
        if(selectedPoli == null){
            await api
                .getDoctor({"kode":kodePoli, "jenpel":"2", "tgl":helper.formatDate()})
                .then((response) => {
                    console.log(response.data)
                    if(response.data.code == "201"){
                        error()
                        setDokter([])
                    }else{
                        success()
                        setDokter(response.data.list)
                    }
                })
        }else{
            await api
                .getDoctor({"kode":kodePoli, "jenpel":"2", "tgl":helper.formatDate()})
                .then((response) => {
                    console.log(response.data)
                    if(response.data.code == "201"){
                        error()
                        setDokter([])
                    }else{
                        success()
                        setDokter(response.data.list)
                    }
                    setDokter(response.data.code === "201" ? [] : response.data.list)
                })
        }

    }

    const getJadwal = async(kodedokter) =>{
        if(selectedPoli == null){
            await api
                .getJadwal({"kdpoli":rujukanData.rujukan ? rujukanData.rujukan.poliRujukan.kode : "INT", "tgl":helper.formatDate()})
                .then((response) => {
                    console.log(response.data)
                    if(response.data.code == "201"){
                        setJadwal([])
                    }else{
                        let jadwalFiltered = [];
                        console.log("kode dokter",kodedokter);
                        for(let i in response.data){
                            if(response.data[i].kodedokter==kodedokter){
                                console.log("dapat");
                                jadwalFiltered.push(response.data[i]);
                            }
                        }
                        console.log(jadwalFiltered);
                        setJadwal(jadwalFiltered);
                    }
                })
        }else{
            await api
                .getJadwal({"kdpoli":selectedPoli.value, "tgl":helper.formatDate()})
                .then((response) => {
                    console.log(response.data)
                    if(response.data.code == "201"){
                        setJadwal([])
                    }else{
                        let jadwalFiltered = [];
                        console.log("kode dokter",kodedokter);
                        for(let i in response.data){
                            if(response.data[i].kodedokter==kodedokter){
                                console.log("dapat");
                                jadwalFiltered.push(response.data[i]);
                            }
                        }
                        console.log(jadwalFiltered);
                        setJadwal(jadwalFiltered);
                    }
                })
        }

    }

    const defaultValuePoli = () =>{
        let kodePoli = rujukanData.rujukan ? rujukanData.rujukan.poliRujukan.kode : "INT"
        for(let pol of dataPoli.data){
            console.log(pol.kode,kodePoli);
            if(pol.kode == kodePoli){
                setSelectedPoli({
                    label:pol.value,
                    value:pol.kode
                });
            }
        }
        getDokter(kodePoli);
    }

    useEffect(() => {
        {disabled(true)}
        getPoli()
        // getDokter()
        // getJadwal()
        defaultValuePoli()
    }, []);

// Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    return(
        <>
            {contextHolder}
            <h2>Pilih Poli</h2>
            <Select
                showSearch
                placeholder="Select poli"
                optionFilterProp="children"
                style={{ width: '100%' }}
                defaultValue={rujukanData.rujukan ? rujukanData.rujukan.poliRujukan.kode : "INT"}
                onChange={onChangePoli}
                onSearch={onSearch}
                filterOption={filterOption}
                allowClear={true}
                options={dataPoli.data.map((element) => ({ label: element.value, value: element.kode }))}
            />
            <Divider/>
            <h2>Pilih Dokter</h2>
            <Select
                showSearch
                placeholder="Select doctor"
                optionFilterProp="children"
                style={{ width: '100%' }}
                onChange={onChangeDoctor}
                onSearch={onSearch}
                filterOption={filterOption}
                allowClear={true}
                value={selectedDoctor}
                options={dokter.map((data) => ({ label: data.nama, value: data.kode }))}
            />
            <Divider/>
            <h2>Pilih Jadwal</h2>
            <Select
                showSearch
                placeholder="Select jadwal"
                optionFilterProp="children"
                style={{ width: '100%' }}
                onChange={onChangeJadwal}
                onSearch={onSearch}
                filterOption={filterOption}
                allowClear={true}
                value={selectedJadwal}
                disabled={disableSelect}
                options={jadwal.map((data) => ({ label: data.jadwal, value: data.jadwal }))}
            />
        </>
    )
}
export default Penjadwalan;