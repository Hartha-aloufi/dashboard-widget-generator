/**
 * A selection component
 */

import React from 'react'
import BarChart from './BarCharts';
import LineChart from './LineChart';
import StackedAreaChart from './StackedAreaChart';
import PieChart from './PiChart';
import Table from './Table';
import BriefAnalytics from './BriefAnalytics';

// TODO: use proptypes
const Chart = ({ type, data }) => {
    switch (type) {
        case 'barchart':
            return <BarChart data={data} />

        case 'linechart':
            return <LineChart data={data} />

        case 'stackedareachart':
            return <StackedAreaChart data={data} />

        case 'pichart':
            return <PieChart data={data} />

        case 'table':
            return <Table data={data} />

        case 'users-analytics':
            return <BriefAnalytics type="users" data={data} />

        case 'orders-analytics':
            return <BriefAnalytics type="orders" data={data} />

        case 'visitors-analytics':
            return <BriefAnalytics type="visitors" data={data} />

        case 'sales-analytics':
            return <BriefAnalytics type="sales" data={data} />
        default:
            console.warn(`we dont support chart of type ${type}`)
            return <></>
    }
}


export default Chart