// import React from 'react';
import {Col, Row, Button} from 'antd';
import '../../assets/disableBlock.css'
import FingertipButton from "./FingertipButton.jsx";

const FingerInput = ({setNumber, clearForm, backspace, submit, numbers}) => {
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
                        <FingertipButton text={1} click={handleClick} size={5} fontSize={10} type={"finger"}/>
                        <FingertipButton text={2} click={handleClick} size={5} fontSize={10} type={"finger"}/>
                        <FingertipButton text={3} click={handleClick} size={5} fontSize={10} type={"finger"}/>
                    </Row>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <FingertipButton text={4} click={handleClick} size={5} fontSize={10} type={"finger"}/>
                        <FingertipButton text={5} click={handleClick} size={5} fontSize={10} type={"finger"}/>
                        <FingertipButton text={6} click={handleClick} size={5} fontSize={10} type={"finger"}/>
                    </Row>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <FingertipButton text={7} click={handleClick} size={5} fontSize={10} type={"finger"}/>
                        <FingertipButton text={8} click={handleClick} size={5} fontSize={10} type={"finger"}/>
                        <FingertipButton text={9} click={handleClick} size={5} fontSize={10} type={"finger"}/>
                    </Row>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <FingertipButton text={0} click={handleClick} size={5} fontSize={10} type={"finger"}/>
                    </Row>
                </Col>

                <Col span={6}>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <FingertipButton text={"Hapus"} click={backspace} size={9} fontSize={10} type={"button"} disabled={numbers.length <= 0}/>
                    </Row>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <FingertipButton text={"Reset"} click={clearForm} size={10} fontSize={5} type={"button"} disabled={numbers.length <= 0}/>
                    </Row>
                    <Row gutter={48} justify={"center"} align={"middle"}>
                        <FingertipButton text={"Submit"} click={submit} size={10} fontSize={5} type={"button"} disabled={numbers.length <= 0}/>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};
export default FingerInput;