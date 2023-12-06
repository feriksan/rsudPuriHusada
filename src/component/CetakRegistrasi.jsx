import React, {Component, Fragment, useEffect, useState} from 'react';
import {Button, Descriptions, Flex, Modal, Skeleton} from 'antd';
import { PDFViewer} from '@react-pdf/renderer'
import Invoice from "../component/Reports/Invoice.jsx";
import { useSelector} from "react-redux";
import Api from "../helper/Api.js";
import Helper from "../helper/helper.js";
import JsBarcode from "jsbarcode";
import QRCode from "qrcode";
const api = new Api()
const helper = new Helper()
const CetakRegistrasiBody = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sap, setSap] = useState(null)
    const bpjsData = useSelector((state) => state.bpjs.value)
    const penjadwalanData = useSelector((state) => state.jadwal.value)
    const rujukanData = useSelector((state) => state.rujukan.value)
    const items = [
        {
            key: '1',
            label: 'Nama Lengkap',
            children: sap != null ? sap.peserta.nama : "",
        },
        {
            key: '2',
            label: 'Jenis Kelamin',
            children: sap != null ? sap.peserta.kelamin : "",
        },
        {
            key: '3',
            label: 'Tanggal Lahir',
            children: sap != null ? sap.peserta.tglLahir:"",
        },
    ];

    const getSap = async() =>{
        let data= {
            "request": {
                "t_sep": {
                    "noKartu": bpjsData.noKartu,
                    "tglSep": helper.formatDate(),
                    "ppkPelayanan": "1101R008",
                    "jnsPelayanan": "2",
                    "klsRawat": {
                        "klsRawatHak": "2",
                        "klsRawatNaik": "",
                        "pembiayaan": "",
                        "penanggungJawab": ""
                    },
                    "noMR": "035715",
                    "rujukan": {
                        "asalRujukan": "1",
                        "tglRujukan": "",
                        "noRujukan": "",
                        "ppkRujukan": "11011302"
                    },
                    "catatan": "Tesing insert SEP IGD",
                    "diagAwal": "A01",
                    "poli": {
                        "tujuan": "IGD",
                        "eksekutif": "0"
                    },
                    "cob": {
                        "cob": "0"
                    },
                    "katarak": {
                        "katarak": "0"
                    },
                    "jaminan": {
                        "lakaLantas": "0",
                        "penjamin": {
                            "tglKejadian": "",
                            "keterangan": "",
                            "suplesi": {
                                "suplesi": "",
                                "noSepSuplesi": "",
                                "lokasiLaka": {
                                    "kdPropinsi": "",
                                    "kdKabupaten": "",
                                    "kdKecamatan": ""
                                }
                            }
                        }
                    },
                    "tujuanKunj": "0",
                    "flagProcedure": "",
                    "kdPenunjang": "",
                    "assesmentPel": "",
                    "skdp": {
                        "noSurat": "",
                        "kodeDPJP": ""
                    },
                    "dpjpLayan": "494786",
                    "noTelp": "08546854852",
                    "user": "Coba Ws"
                }
            }
        }
        await api
            .getSap(data)
            .then((response) => {
                setSap(response.data.sep)
                console.log(response.data.sep)
            })
    }
    useEffect(() => {
        getSap()
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    let canvas;
    let canvas2;
// For QR Code
    canvas = document.createElement('canvas');
    canvas2 = document.createElement('canvas');
    QRCode.toCanvas(canvas2, bpjsData.nama);
    const qr = canvas2.toDataURL(bpjsData.nama);
    JsBarcode(canvas, JSON.stringify({"nomorSep":sap ? sap.noSep : ""}), {displayValue:false});
    const barcode = canvas.toDataURL();
    console.log(qr)
    if(sap != null){
        return(
            <>
                <Descriptions title="User Info" layout="vertical" items={items} />
                <Button type="primary" onClick={showModal}>
                    Cetak Nomor Antrian
                </Button>
                <Modal width={1100} title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Flex justify={"center"}>
                        <Fragment>
                            <PDFViewer width="600" height="600" className="app" >
                                <Invoice invoice={sap} barcode={barcode} penjadwalan={penjadwalanData} qr={qr} rujukan={rujukanData} bpjsData={bpjsData}/>
                            </PDFViewer>
                        </Fragment>
                    </Flex>
                </Modal>
            </>
        )
    }else{
        return(
            <Skeleton active />
        )
    }
};
class CetakRegistrasi extends Component{
    state = {
        sep:null,
        isLoaded:false,
        data: {
            "request": {
                "t_sep": {
                    "noKartu": "0001787877202",
                    "tglSep": "2023-11-26",
                    "ppkPelayanan": "1101R008",
                    "jnsPelayanan": "2",
                    "klsRawat": {
                        "klsRawatHak": "2",
                        "klsRawatNaik": "",
                        "pembiayaan": "",
                        "penanggungJawab": ""
                    },
                    "noMR": "035715",
                    "rujukan": {
                        "asalRujukan": "1",
                        "tglRujukan": "",
                        "noRujukan": "",
                        "ppkRujukan": "11011302"
                    },
                    "catatan": "Tesing insert SEP IGD",
                    "diagAwal": "A01",
                    "poli": {
                        "tujuan": "IGD",
                        "eksekutif": "0"
                    },
                    "cob": {
                        "cob": "0"
                    },
                    "katarak": {
                        "katarak": "0"
                    },
                    "jaminan": {
                        "lakaLantas": "0",
                        "penjamin": {
                            "tglKejadian": "",
                            "keterangan": "",
                            "suplesi": {
                                "suplesi": "",
                                "noSepSuplesi": "",
                                "lokasiLaka": {
                                    "kdPropinsi": "",
                                    "kdKabupaten": "",
                                    "kdKecamatan": ""
                                }
                            }
                        }
                    },
                    "tujuanKunj": "0",
                    "flagProcedure": "",
                    "kdPenunjang": "",
                    "assesmentPel": "",
                    "skdp": {
                        "noSurat": "",
                        "kodeDPJP": ""
                    },
                    "dpjpLayan": "494786",
                    "noTelp": "08546854852",
                    "user": "Coba Ws"
                }
            }
        }
    }
    // async getSap(){
    //     const mapStateToProps = state => ({
    //         bpjsData: state.bpjs.value
    //     });
    //     console.log(mapStateToProps)
    //     await api
    //         .getSap(this.state.data)
    //         .then((response) => {
    //             console.log(response.data.sep)
    //             this.renderSap(response.data.sep)
    //         })
    // }
    // renderSap = (sap) => {
    //     const dataSAP = sap
    //     console.log(dataSAP)
    //     this.setState({sep: dataSAP})
    // }
    // componentDidMount() {
    //     console.log("SASA")
    //     this.getSap()
    //
    // }

    render() {
        const {sep} = this.state
        return(
            <CetakRegistrasiBody/>
        )
    }
}
export default CetakRegistrasi;