import React, { useContext } from 'react';
// import { Line, LineChart, XAxis } from 'recharts';

const Static = () => {
    const products = useContext(ProductContext);
    return (
        <div>
            <h1>Static</h1>
            {/* <LineChart width={500} height={400} data={}>
                <Line type='monotone' datakey={} stroke='#82ca9d' />
                 <XAxis dataKey={}/>
            </LineChart> */}
        </div>
    );
};

export default Static;