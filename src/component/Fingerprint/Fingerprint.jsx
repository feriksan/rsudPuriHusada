import React, {useEffect, useState} from 'react';
import {Button, message, Result} from 'antd';
const Fingerprint = ({disabled}) => {
    const [fingerprint, setFingerprint] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();
    useEffect(() => {
        // window.open("fingerprintbpjs:launch");
        {disabled(true)}
        handleFingerprint()
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