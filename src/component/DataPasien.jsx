import {Button, Divider, Form, Input, Space} from "antd";
import React from "react";

const DataPasien = () => {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 20,
        },
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const onFinish = (values) => {
        console.log(values);
    };
    
    return(
        <div>
            <Form
                name="basic"
                layout={"inline"}
            >
                <Form.Item label="Rekam Medis">
                    <Input placeholder="Nomor Rekam Medis" />
                </Form.Item>
                <Form.Item
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Divider/>

                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 2000,
                    }}
                    validateMessages={validateMessages}
                >
                    <Space>
                        <Form.Item
                            name={['user', 'name']}
                            label="Name"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'email']}
                            label="Jenis Kelamin"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'email']}
                            label="Tgl Lahir"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'email']}
                            label="Alamat"
                        >
                            <Input />
                        </Form.Item>
                    </Space>
                </Form>
        </div>
    )
}
export default DataPasien;