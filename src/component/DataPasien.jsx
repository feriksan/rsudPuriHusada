import {Button, Col, Divider, Form, Input, InputNumber, Row, Space} from "antd";
import React from "react";

const DataPasien = () => {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    /* eslint-disable no-template-curly-in-string */
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
    /* eslint-enable no-template-curly-in-string */

    const onFinish = (values) => {
        console.log(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
                    maxWidth: 1000,
                }}
                validateMessages={validateMessages}
            >
                <Row gutter={10}>
                    <Col>
                        <Form.Item
                            name={['user', 'name']}
                            label="Name"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name={['user', 'email']}
                            label="Jenis Kelamin"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name={['user', 'email']}
                            label="Tgl Lahir"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name={['user', 'email']}
                            label="Alamat"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Divider/>
                    <Col>
                        <Form.Item
                            name={['user', 'email']}
                            label="Pekerjaan"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name={['user', 'email']}
                            label="Status Nikah"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name={['user', 'email']}
                            label="Agama"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Divider/>
                    <Col>
                        <Form.Item
                            name={['user', 'email']}
                            label="Nama Keluarga"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name={['user', 'email']}
                            label="Kabupaten"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name={['user', 'email']}
                            label="Kelurahan"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name={['user', 'email']}
                            label="Kecamatan"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name={['user', 'email']}
                            label="Alamat"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
export default DataPasien;