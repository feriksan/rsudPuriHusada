import React, {Fragment, useState} from 'react';
import {Button, Descriptions, Modal} from 'antd';
import {PDFViewer} from '@react-pdf/renderer'
import Invoice from "../component/Reports/Invoice.jsx";
import invoice from "./../data/invoice-data.js";

const items = [
    {
        key: '1',
        label: 'UserName',
        children: 'Zhou Maomao',
    },
    {
        key: '2',
        label: 'Telephone',
        children: '1810000000',
    },
    {
        key: '3',
        label: 'Live',
        children: 'Hangzhou, Zhejiang',
    },
    {
        key: '4',
        label: 'Address',
        span: 2,
        children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    },
    {
        key: '5',
        label: 'Remark',
        children: 'empty',
    },
];
const CetakRegistrasi = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return(
        <>
            <Descriptions title="User Info" layout="vertical" items={items} />
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Fragment>
                    <PDFViewer width="1000" height="600" className="app" >
                        <Invoice invoice={invoice}/>
                    </PDFViewer>
                </Fragment>
            </Modal>
        </>
    )
};
export default CetakRegistrasi;