// import React from 'react';
import {Col, Row} from 'antd';
import '../../assets/disableBlock.css'
import FingertipButton from "./FingertipButton.jsx";

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
                        <FingertipButton text={1} click={handleClick} size={5} fontSize={10}/>
                        <FingertipButton text={2} click={handleClick} size={5} fontSize={10}/>
                        <FingertipButton text={3} click={handleClick} size={5} fontSize={10}/>
                    </Row>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <FingertipButton text={4} click={handleClick} size={5} fontSize={10}/>
                        <FingertipButton text={5} click={handleClick} size={5} fontSize={10}/>
                        <FingertipButton text={6} click={handleClick} size={5} fontSize={10}/>
                    </Row>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <FingertipButton text={7} click={handleClick} size={5} fontSize={10}/>
                        <FingertipButton text={8} click={handleClick} size={5} fontSize={10}/>
                        <FingertipButton text={9} click={handleClick} size={5} fontSize={10}/>
                    </Row>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <FingertipButton text={0} click={handleClick} size={5} fontSize={10}/>
                    </Row>
                </Col>

                <Col span={6}>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <FingertipButton text={"X"} click={backspace} size={9} fontSize={10}/>
                    </Row>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <FingertipButton text={"Clear"} click={clearForm} size={10} fontSize={5}/>
                    </Row>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <FingertipButton text={"Done"} click={submit} size={10} fontSize={5}/>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};
export default FingerInput;