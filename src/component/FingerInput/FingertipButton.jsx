import {Button, Col, Flex, Typography} from "antd";
const { Title } = Typography;
import '../../assets/disableBlock.css'

const button = {
    border: '1px solid #40a9ff',
    borderRadius: 20,
    margin:'10px',
};
const buttonFunction = {
    margin:'10px',
};
const FingertipButton = ({text, click, size, fontSize, type, disabled}) => {
    return(
        <>
        {type === "finger" ?
        <Col span={size} style={button} onClick={() => click(event, text)}>
            <Flex align="center" justify="center" vertical>
                <Title className="disable-text-selection" level={fontSize}>{text.toString()}</Title>
            </Flex>
        </Col>
            :
        <Col span={size} style={buttonFunction}>
        <Flex align="center" justify="center" vertical>
            <Button type="primary" size="large" onClick={() => click(event, text)} disabled={disabled}>
                {text}
            </Button>
        </Flex>
        </Col>}
        </>
    )
}
export default FingertipButton