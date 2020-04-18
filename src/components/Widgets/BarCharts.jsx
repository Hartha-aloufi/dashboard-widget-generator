import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, ResponsiveContainer,
} from 'recharts';
import WidgetCard from '../../WidgetCard';



const renderCustomizedLabel = (props) => {
    const {
        x, y, width, height, value,
    } = props;
    const radius = 10;

    return (
        <g>
            <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
            <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
                {value.split(' ')[1]}
            </text>
        </g>
    );
};

const Barchart = (props) => {
    return (
        <WidgetCard>
            <ResponsiveContainer width="100%" >
                <BarChart
                    data={props.data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <YAxis axisLine={false} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
                        <LabelList dataKey="name" content={renderCustomizedLabel} />
                    </Bar>
                    <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
                </BarChart>
            </ResponsiveContainer>
        </WidgetCard>
    );
}


export default Barchart;