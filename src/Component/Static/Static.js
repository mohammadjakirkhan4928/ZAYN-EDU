import React from 'react';
import {  Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ComposedChart, CartesianGrid, Legend, Area, Bar, Scatter } from 'recharts';


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
              <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="quiz" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="total" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Static;