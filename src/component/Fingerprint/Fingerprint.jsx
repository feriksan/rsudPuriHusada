import React, {useEffect, useState} from 'react';
import { message, Result} from 'antd';
import Api from "../../helper/Api.js";
import { Cron } from "croner";
import {useSelector} from "react-redux";
import Helper from "../../helper/helper.js";
const api = new Api()
const helper = new Helper()
const Fingerprint = ({disabled}) => {
    const [fingerprint, setFingerprint] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();
    const bpjsData = useSelector((state) => state.bpjs.value)
    useEffect(() => {
        window.open("fingerprintbpjs:launch");
        {disabled(true)}
        // handleFingerprint()
        const checkFingerprint = Cron('*/5 * * * * *', async() => {
            console.log(helper.formatDate())
            let data = {
                "noka":bpjsData.noKartu,
                "tanggal": helper.formatDate()
            }
            await api
                .fingerprint(data)
                .then((response) => {
                    console.log(response)
                    if(response.data.kode == "1"){
                        success()
                        {disabled(false)}
                        setFingerprint(true);
                        checkFingerprint.stop();
                    }
                    checkFingerprint.stop();
                })
        });
    }, []);

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Verifikasi Fingerprint Berhasil',
        });
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'This is an error message',
        });
    };

    const handleFingerprint = () => {
        setTimeout(() => {
            setFingerprint(true);
            success()
            {disabled(false)}
        }, 5000);
    }

    if(fingerprint){
        return (
            <>
                {contextHolder}
                <Result
                    status="success"
                    title="Verifikasi Fingerprint Berhasil"
                    subTitle="Fingerprit dengan nama ...."
                />
            </>
        )
    }else{
        return (
            <>
                {contextHolder}
                <Result
                    status="warning"
                    title="Silahkan verifikasi fingerprint terlebih dahulu"
                />
            </>
        )
    }

}
export default Fingerprint;