import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, Tooltip,
    ResponsiveContainer
} from 'recharts';
import WidgetCard from '../../WidgetCard';


const StackedAreaChart = props => {
    return (
            <WidgetCard>
        <ResponsiveContainer width="100%">
                <AreaChart
                    data={props.data}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <XAxis axisLine={false} dataKey="name" />
                    <YAxis axisLine={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
        </ResponsiveContainer>
            </WidgetCard>
    );
}

export default StackedAreaChart;