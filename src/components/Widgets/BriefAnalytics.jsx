import React from 'react'
import {
    SmileOutlined,
    CodeSandboxOutlined,
    DollarCircleOutlined,
    AliwangwangOutlined
} from '@ant-design/icons';
import WidgetCard from '../../WidgetCard';
import styled from 'styled-components'
import withConentLoader from '../../HOC/WithContentLoader';

const colors = { sales: '#f32f53', users: '#ffbb44', orders: '#6fd088', visitors: '#0097a7' }
const text = { sales: 'Total Sales', users: 'New Users', orders: 'New Orders', visitors: 'Unique Visitors' }

const isLight = { sales: true, users: true }

const icons = {
    'users': <SmileOutlined />,
    'orders': <CodeSandboxOutlined />,
    'sales': <DollarCircleOutlined />,
    'visitors': <AliwangwangOutlined />

}

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .info {
        color: ${props => isLight[props.type] ? '#000000a6': 'white'};
    }
`
const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: ${props => isLight[props.type] ? '#f8f9fa' : 'white'};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 30px;
        height: 30px;
        color: ${props => colors[props.type] || 'white'};
    }
`

const Count = styled.div`
    font-size: 24px; 
    color: ${props => isLight[props.type] ? colors[props.type] : 'white'};

    span {
        font-size: 10px;
        display: block;
    }
`

const BriefAnalytics = (props) => {
    return (
        <WidgetCard bg={isLight[props.type] ? 'white' : colors[props.type]}>
            <Row>
                <Icon type={props.type}>
                    {icons[props.type]}
                </Icon>
                <Count type={props.type}>
                    {props.data.count}
                    <span>{text[props.type]}</span>
                </Count>
            </Row>

            <Row type={props.type}>
                <spna className="info">Total income ${props.income}</spna>
                <spna className="info">Total income ${props.increase}</spna>
            </Row>
        </WidgetCard>

    )
}

export default withConentLoader(BriefAnalytics, 'data')