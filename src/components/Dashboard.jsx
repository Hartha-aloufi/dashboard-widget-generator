import React, { useEffect, useState, useMemo } from 'react'
import DashboardLayoutController from './DashboardLayoutController'
import usePrioritized from '../Hooks/usePrioitiezed'
import Chart from './Widgets/Widget';
import {default2 as defaultConfig} from '../default-config';

import { v4 as uuid } from 'uuid';
import styled from 'styled-components'

const WidgetCont = styled.div`
    grid-area: ${props => props.areaName};
    display: flex;
`

const Dashboard = () => {
    const [config, setConfig] = useState();
    const { responses } = usePrioritized(config?.charts || {});

    // did mount
    useEffect(() => {
        // get config by merging default config
        // with the custom config we recived
        const conf = {
            ...defaultConfig,
            ...(window.__dashboard_config || {})
        }

        // give an id for each data object
        conf.charts.forEach(chart => {
            chart.id = uuid();
        });

        setConfig(conf);
    }, []);


    /**
     * transform layout json to be more easy to use
     */
    const layout = useMemo(() => {
        if (!config)
            return;

        return (
            {
                ...config.layout,
                mobile: config.layout_mobile,
                tablet: config.layout_tablet,
            }
        )
    }, [config]);

    const Charts = useMemo(() => {
        if (!config || !config?.charts)
            return null;

        const { charts } = config;

        return charts.map((chart, idx) => (
            <WidgetCont areaName={`cell-${idx}`}>
                <Chart type={chart.type} data={responses[chart.id]?.data || []} />
            </WidgetCont>
        ))
    }, [config, responses]);

    return (
        <DashboardLayoutController layout={layout}>
            {Charts}
        </DashboardLayoutController>
    )
}

export default Dashboard;