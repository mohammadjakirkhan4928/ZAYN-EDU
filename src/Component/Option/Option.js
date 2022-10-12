import React from 'react';

const Option = ({optional}) => {
 const {options} = optional
    return (
        <div>
            <p>{options}</p>
        </div>
    );
};

export default Option;