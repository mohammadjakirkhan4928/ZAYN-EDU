import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';
// import Quizes from '../Quizes/Quizes';

const Quez = () => {
    const producstId = useLoaderData();
    // console.log(producstId);
    const product = producstId.data

     const {name,questions} = product;

    return (
        <div className='grid col-start-1 col-end-3'>
            <h1 className='text-2xl font-bold text-purple-900'>Quiz: {name}</h1>
            {
                questions.map((productId) => <Quizes
                key={productId.id}
                productId={productId}
                ></Quizes>)
            }

        </div>
    );
};

export default Quez;