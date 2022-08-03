import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import styles from './style.module.css';

const data = [
    {
        uv: 3000,
    },
    {
        uv: 3000,
    },
    {
        uv: 2000,
    },
];

const Chart = ({rank}) => {
    if(rank.length === 0) {
        return;
    }
    return (
        <div className={styles.chart}>
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={500}
                height={400}
                data={rank}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8"/>
            </AreaChart>
        </ResponsiveContainer>
        </div>
    );
};

export default Chart;
