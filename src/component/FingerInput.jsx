// import React from 'react';
import {Typography, Col, Row, Flex} from 'antd';
import '../assets/disableBlock.css'
const { Title } = Typography;

const button = {
    border: '1px solid #40a9ff',
    borderRadius: 20,
    margin:'10px',
};

const FingerInput = ({setNumber, clearForm, backspace, submit}) => {
    const handleClick = (event, number) =>{
        switch (event.detail){
            case 1:{
                setNumber(number)
                break
            }
            case 2:{
                setNumber(number)
                break
            }
            case 3:{
                setNumber(number)
                break
            }
        }
    }
    return (
        <div>
            <Row>
                <Col span={10}>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <Col span={5} style={button} onClick={() => handleClick(event, 1)}>
                            <Flex gap="middle" align="center" justify="center" vertical>
                                <Title className="disable-text-selection" level={1}>1</Title>
                            </Flex>
                        </Col>
                        <Col span={5} style={button} onClick={() => handleClick(event, 2)}>
                            <Flex gap="middle" align="center" justify="center" vertical>
                                <Title className="disable-text-selection" level={1}>2</Title>
                            </Flex>
                        </Col>
                        <Col span={5} style={button} onClick={() => handleClick(event, 3)}>
                            <Flex gap="middle" align="center" justify="center" vertical>
                                <Title className="disable-text-selection" level={1}>3</Title>
                            </Flex>
                        </Col>
                    </Row>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <Col span={5} style={button} onClick={() => handleClick(event, 4)}>
                            <Flex gap="middle" align="center" justify="center" vertical>
                                <Title className="disable-text-selection" level={1}>4</Title>
                            </Flex>
                        </Col>
                        <Col span={5} style={button} onClick={() => handleClick(event, 5)}>
                            <Flex gap="middle" align="center" justify="center" vertical>
                                <Title className="disable-text-selection" level={1}>5</Title>
                            </Flex>
                        </Col>
                        <Col span={5} style={button} onClick={() => handleClick(event, 6)}>
                            <Flex gap="middle" align="center" justify="center" vertical>
                                <Title className="disable-text-selection" level={1}>6</Title>
                            </Flex>
                        </Col>
                    </Row>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <Col span={5} style={button} onClick={() => handleClick(event, 7)}>
                            <Flex gap="middle" align="center" justify="center" vertical>
                                <Title className="disable-text-selection" level={1}>7</Title>
                            </Flex>
                        </Col>
                        <Col span={5} style={button} onClick={() => handleClick(event, 8)}>
                            <Flex gap="middle" align="center" justify="center" vertical>
                                <Title className="disable-text-selection" level={1}>8</Title>
                            </Flex>
                        </Col>
                        <Col span={5} style={button} onClick={() => handleClick(event, 9)}>
                            <Flex gap="middle" align="center" justify="center" vertical>
                                <Title className="disable-text-selection" level={1}>9</Title>
                            </Flex>
                        </Col>
                    </Row>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <Col span={5} style={button} onClick={() => handleClick(event, 0)}>
                            <Flex gap="middle" align="center" justify="center" vertical>
                                <Title className="disable-text-selection" level={1}>0</Title>
                            </Flex>
                        </Col>
                    </Row>
                </Col>

                <Col span={6}>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <Col span={12} style={button} onClick={backspace}>
                            <Flex gap="middle" align="center" justify="center" vertical>
                                <Title className="disable-text-selection" level={1}>X</Title>
                            </Flex>
                        </Col>
                    </Row>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <Col span={12} style={button} onClick={clearForm}>
                            <Flex gap="middle" align="center" justify="center" vertical>
                                <Title className="disable-text-selection" level={1}>clear</Title>
                            </Flex>
                        </Col>
                    </Row>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <Col span={12} style={button} onClick={submit}>
                            <Flex gap="middle" align="center" justify="center" vertical>
                                <Title className="disable-text-selection" level={1}>done</Title>
                            </Flex>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};
export default FingerInput;