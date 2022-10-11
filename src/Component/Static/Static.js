import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { Line, LineChart, XAxis } from 'recharts';
import { ProductContext } from '../../layout/Main';

const Static = () => {
    const products = useContext(ProductContext);

    return (
        <div>
            <h1>Static</h1>
            <LineChart width={500} height={400} data={products}>
                <Line type='monotone' datakey={data.total} stroke='#82ca9d' />
                 <XAxis dataKey={data.total}/>
            </LineChart>
        </div>
    );
};

export default Static;