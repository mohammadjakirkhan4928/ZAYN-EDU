
import React from 'react';
// import { Card } from 'react-daisyui';
import { Link } from 'react-router-dom';


const Product = ({product}) => {
//    console.log(product);


    return (
     <div className='flex'>
          <div class="card w-64 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={product.logo} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{product.name}</h2>
        <div class="card-actions">
          <Link to={`/topic/${product.id}`} class="btn btn-primary">
            Start Practice
          </Link>
        </div>
      </div>
    </div>
     </div>
     );
 };

export default Product;