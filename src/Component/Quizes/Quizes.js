import { } from 'postcss';
import React, {} from 'react';
import {  } from 'react-router-dom';
import Option from '../Option/Option';

const Quizes = ({productId}) => {
     const { question, options } = productId
    // console.log(productId);
    // const qus = question;
    // console.log(JSON.parse(qus))


    return (
        <div className='text-xl border rounded bg-slate-300 '>
            {question}
            {
                options.map((optional)=> <Option
                   optional={optional}
                ></Option>)
            }

        </div>
    );
};

export default Quizes;