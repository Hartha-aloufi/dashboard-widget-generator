import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import WidgetCard from '../../WidgetCard';

const Linechart = props => (
    <WidgetCard>
        <ResponsiveContainer width="100%">
            <LineChart
                layout="vertical"
                width={500}
                height={300}
                data={props.data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <XAxis axisLine={false} type="number" domain={[0, 'dataMax + 1000']} />
                <YAxis axisLine={false} dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Line dataKey="pv" stroke="#8884d8" />
                <Line dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    </WidgetCard>
)



export default Linechart;