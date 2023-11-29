import {Divider, Select} from "antd";
import Api from "../helper/Api.js";
import {useEffect, useState} from "react";
import Helper from "../helper/helper.js";
import {useDispatch} from "react-redux";
import {add} from "../features/penjadwalan/saveJadwal.js";

const api = new Api()
const helper = new Helper()
const Penjadwalan = () => {
    const [poli, setPoli] = useState([])
    const [dokter, setDokter] = useState([])
    const [jadwal, setJadwal] = useState([])
    const [selectedPoli, setSelectedPoli] = useState()
    const [selectedDoctor, setSelectedDoctor] = useState()
    const [selectedJadwal, setSelectedJadwal] = useState()
    const dispatch = useDispatch()
    let dataJson = {}

    const onChangePoli = (value) => {
        setSelectedPoli(value)
        console.log(`selected ${value}`);
    };
    const onChangeDoctor = (value) => {
        setSelectedDoctor(value)
        console.log(`selected ${value}`);
    };
    const onChangeJadwal = (value) => {
        setSelectedJadwal(value)
        dataJson = {
            "poli":selectedPoli,
            "doctor":selectedDoctor,
            "jadwal":value
        }
        dispatch(add({dataJson}))
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const getPoli = async() =>{
        await api
            .getPoli({"poli":"INT"})
            .then((response) => {
                setPoli(response.data.poli)
                console.log(response.data.poli)
            })
    }

    const getDokter = async() =>{
        await api
            .getDoctor({"kode":"INT", "jenpel":"2", "tgl":helper.formatDate()})
            .then((response) => {
                setDokter(response.data.list)
                console.log(response.data)
            })
    }

    const getJadwal = async() =>{
        await api
            .getJadwal({"kdpoli":"INT", "tgl":helper.formatDate()})
            .then((response) => {
                setJadwal(response.data)

            })
    }

    useEffect(() => {
        getPoli()
        getDokter()
        getJadwal()
    }, []);

// Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    return(
        <>
        <h2>Pilih Poli</h2>
        <Select
            showSearch
            placeholder="Select poli"
            optionFilterProp="children"
            style={{ width: '100%' }}
            onChange={onChangePoli}
            onSearch={onSearch}
            filterOption={filterOption}
            options={poli.map((data) => ({ label: data.nama, value: data.nama }))}
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
                options={dokter.map((data) => ({ label: data.nama, value: data.nama }))}
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
                options={jadwal.map((data) => ({ label: data.jadwal, value: data.jadwal }))}
            />
        </>
    )
}
export default Penjadwalan;