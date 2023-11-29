import {Col, Flex, Typography} from "antd";
const { Title } = Typography;
import '../../assets/disableBlock.css'

const button = {
    border: '1px solid #40a9ff',
    borderRadius: 20,
    margin:'10px',
};
const FingertipButton = ({text, click, size, fontSize}) => {
    return(
        <Col span={size} style={button} onClick={() => click(event, text)}>
            <Flex align="center" justify="center" vertical>
                <Title className="disable-text-selection" level={fontSize}>{text.toString()}</Title>
            </Flex>
        </Col>
    )
}
export default FingertipButton