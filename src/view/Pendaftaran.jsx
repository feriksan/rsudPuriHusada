import React, { useState } from 'react';
import {Button, message, Steps, theme} from 'antd';
import InputBpjs from "../component/BPJS/InputBpjs.jsx";
import Penjadwalan from "../component/Penjadwalan.jsx";
import CetakRegistrasiBody from "../component/CetakRegistrasi.jsx";
import Fingerprint from "../component/Fingerprint/Fingerprint.jsx";

const Pendaftaran = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const [disabled, setDisabled] = useState(true)
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const steps = [
        {
            title: 'Registrasi Pasien',
            content: <InputBpjs next={next}/>,
        },
        {
            title: 'Pemilihan Poli',
            content: <Penjadwalan disabled={setDisabled}/>,
        },
        {
            title: 'Fingerprint',
            content: <Fingerprint disabled={setDisabled}/>,
        },
        {
            title: 'Cetak Nomor Antrian',
            content: <CetakRegistrasiBody/>,
        },
    ];
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    const contentStyle = {
        color: token.colorTextTertiary,
        marginTop: 16,
    };

    return(
        <>
            <Steps current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
            <div
                style={{
                    marginTop: 24,
                }}
            >
                {current < steps.length - 1 && current > 0 && (
                    <Button type="primary" onClick={() => next()} disabled={disabled}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
            </div>
        </>
    )
}

export default Pendaftaran;