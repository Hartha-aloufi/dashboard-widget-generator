import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => parseInt(100 / (props.width?.default * 100))}, 1fr);
    grid-template-rows: ${props => props.height?.default};
    grid-auto-rows: ${props => props.height?.default};
    grid-template-areas: ${props => props.areasTemplate};
    grid-gap: ${props => props.gap};

    padding: 0 40px;
    margin: 0 auto;

    @media(max-width: 768px) {
        grid-template-columns: repeat(${props => parseInt(100 / (props.width?.tablet * 100))}, 1fr);
        grid-template-areas: ${props => props.tabletAreas};
        grid-template-rows: ${props => props.height?.tablet};
        grid-auto-rows: ${props => props.height?.tablet};
    }
    @media(max-width: 425px) {
        grid-template-columns: repeat(${props => parseInt(100 / (props.width?.mobile * 100))}, 1fr);
        grid-template-areas: ${props => props.mobileAreas};
        grid-template-rows: ${props => props.height?.mobile};
        grid-auto-rows: ${props => props.height?.mobile};
    }
`

/**
 * utility that takes the cells map
 * and convert it to a grid area strings
 * @param {Array<Object>} cellsMap 
 */
const generateGridAreas = (cellsMap) => {
    const areas = [];
    //build grid area names
    cellsMap.forEach((cell, cellIdx) => {
        const { from, to } = cell;
        const rs = from[0], re = to[0];
        const cs = from[1], ce = to[1];

        for (let i = rs; i < re; i++)
            for (let j = cs; j < ce; j++) {
                // initialize array index
                if (!areas[i]) areas[i] = []
                // set the name
                areas[i][j] = `cell-${cellIdx}`;
            }
    });

    // convert it to string
    const template = areas.reduce((prev, cur) => {
        if (typeof prev === 'object') prev = `"${prev.join(' ')}"`

        return `${prev} "${cur.join(' ')}"`
    });

    return template;
}

const DashboardController = ({ layout, children }) => {
    // string represint area-templates css value
    const [areas, setAreas] = useState("");

    /**
     * the gird layout element that will manage 
     * the charts
     */
    useEffect(() => {
        if (!layout)
            return;

        setAreas((prev) => {
            return { ...prev, default: generateGridAreas(layout.cellsMap) }
        });

        // handle responsive layouts
        const responsive = ['mobile', 'tablet'];
        responsive.forEach((res) => {
            if (layout[res] && layout[res]?.cellsMap) {
                setAreas((prev) => {
                    return {
                        ...prev,
                        [res]: generateGridAreas(layout[res].cellsMap)
                    }
                })
            }
        })

    }, [layout]);


    const width = useMemo(() => (
        {
            default: layout?.cell_width,
            mobile: layout?.mobile?.cell_width,
            tablet: layout?.tablet?.cell_width
        }
    ), [layout]);

    const height = useMemo(() => (
        {
            default: layout?.cell_height,
            mobile: layout?.mobile?.cell_height,
            tablet: layout?.tablet?.cell_height
        }
    ), [layout]);

    return (
        <Container
            width={width}
            height={height}
            gap={layout?.gap}
            areasTemplate={areas?.default}
            tabletAreas={areas?.tablet}
            mobileAreas={areas?.mobile}

        >
            {children}
        </Container>
    )
}


export default DashboardController;
