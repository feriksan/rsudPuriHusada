import {useState} from "react";
import {Avatar, Button, Card, Col, Divider, Empty, Input, Modal, Row, Tabs, Typography} from "antd";
const { Title } = Typography;
import {UserOutlined} from "@ant-design/icons";
import FingerInput from "../component/FingerInput/FingerInput.jsx";
import Api from "../helper/Api.js";

const box = {
    border: '1px solid #40a9ff',
    borderRadius: 20,
}
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};
const bpjs = []
const api = new Api()
const InputBpjs = () => {
    const [numberBpjs, setNumberBpjs] = useState(bpjs)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bpjsData, setBpjsData] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [poli, setPoli] = useState([])
    const [doctor, setDoctor] = useState([])

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const changeNumber = (numbers) =>{
        setNumberBpjs(bpjs => [...bpjs, numbers])
    }

    const clearForm = () => {
        setNumberBpjs([])
    }

    const backspace = () => {
        setNumberBpjs(numberBpjs.slice(0, -1))
    }

    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: 'Tab 1',
            children: [
                <div>
                    {loaded ?
                        <div>
                            <Row justify={"center"} align={"middle"}>
                                <Title className="disable-text-selection" level={3}>{bpjsData.noKartu}</Title>
                            </Row>
                            <Divider></Divider>
                            <Row justify={"center"} align={"middle"}>
                                <Col span={8}>
                                    <Avatar shape="square" size={140} icon={<UserOutlined />} />
                                </Col>
                                <Col span={10}>
                                    <p>Nama: {bpjsData.nama}</p>
                                    <p>Jenis Kelamin: {bpjsData.sex}</p>
                                    <p>Tanggal Lahir: {bpjsData.tglLahir}</p>
                                    <p>Status: {bpjsData.statusPeserta.keterangan}</p>
                                    <p>Kelas: {bpjsData.hakKelas.keterangan}</p>
                                </Col>
                            </Row>
                        </div> : <Empty></Empty>
                    }
                </div>
            ],
        },
        {
            key: '2',
            label: 'Tab 2',
            children: [
                <Card title="Poli List">
                    {poli.map(element => {
                        console.log(element);
                        return <Card.Grid style={gridStyle}>{element.nama}</Card.Grid>
                    })}
                </Card>
            ],
        },
        {
            key: '3',
            label: 'Tab 3',
            children: [
                <Card title="Doctor List">
                    {doctor.map(element => {
                        console.log(element);
                        return <Card.Grid style={gridStyle}>{element.nama}</Card.Grid>
                    })}
                </Card>
            ],
        },
    ];

    const getBpjsData = async() => {
        let data = {
            "nik":numberBpjs.join("").toString(),
            "tglPelayanan": formatDate()
        }
        await api
            .getBpjs(data)
            .then((response) => {
                setBpjsData(response.data.peserta)
                setLoaded(true)
                getPoliData()
                showModal()
            })
    }

    const getPoliData = async() => {
        let data = {
            "subSpesialis":"int"
        }
        await api
            .getPoli(data)
            .then((response) => {
                console.log(response)
                setPoli(response.data.poli)
                console.log(poli)
                getDoctorData()
            })
    }

    const getDoctorData = async() => {
        let data = {
            "jnsPelayanan":"int",
            "tglPelayanan":"2023-11-21",
            "subSpesialis":"int"
        }
        await api
            .getDoctor(data)
            .then((response) => {
                console.log(response)
                setDoctor(response.data.list)
            })
    }


    return (
        <div>
            <Row gutter={24} style={box} align={"middle"} justify="center">
                <Col span={12}>
                    <FingerInput setNumber={changeNumber} clearForm={clearForm} backspace={backspace} submit={getBpjsData}></FingerInput>
                </Col>
                <Col span={5}>
                    <Input placeholder="Basic usage" value={numberBpjs.join("").toString()}/>
                </Col>
            </Row>
            <Button onClick={showModal}>LA</Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={700}>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </Modal>
        </div>
    );
};
export default InputBpjs;