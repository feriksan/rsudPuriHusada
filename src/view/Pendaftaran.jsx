import React, { useState } from 'react';
import {Button, message, Steps, theme} from 'antd';
import InputBpjs from "../component/BPJS/InputBpjs.jsx";
import Penjadwalan from "../component/Penjadwalan.jsx";
import CetakRegistrasi from "../component/CetakRegistrasi.jsx";

const Pendaftaran = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
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
            content: <Penjadwalan/>,
        },
        {
            title: 'Cetak Nomor Antrian',
            content: <CetakRegistrasi/>,
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
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
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