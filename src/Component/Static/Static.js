import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Static = () => {
    const data = [
        {
            name: 'React',
            total: 8,
            quiz: 2400,
            amt: 2400,
        },
        {
            name: 'Javascript',
            total: 9,
            quiz: 1398,
            amt: 2210,
        },
        {
            name: 'CSS',
            total: 8,
            quiz: 9800,
            amt: 2290,
        },
        {
            name: 'Github',
            total: 11,
            quiz: 3908,
            amt: 2000,
        },
    ];
    return (
        <div>
              <h1>ReChart here</h1>
              <ResponsiveContainer className='mt-[200px] md:mt-[200px] sm:mt-[200px]' width={350} height={300}>
                <BarChart width={500} height={400} data={data}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Static;