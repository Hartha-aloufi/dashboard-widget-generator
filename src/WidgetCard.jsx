import React from 'react'
import styled from 'styled-components'

const WidgetCard = styled.div`
    box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.05);
    padding: ${props => props.padding != null ? props.padding : '20px'};
    border-radius: 3px;
    background-color: ${props => props.bg || 'white'};
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export default WidgetCard