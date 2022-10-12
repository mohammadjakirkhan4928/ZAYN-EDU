
import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../layout/Main';
import Product from '../Product/Product';

const Topic = () => {
const products = useContext(ProductContext);

const pro = products.data;
// console.log(pro);

// const navigate = useNavigate();

// const handleAddToCart =()=>{
//  navigate(`/topip/${id}`)
// }
  return (
    <div className=''>
         <div className='flex gap-3 m-5 justify-around my-8'>
          {
              pro.map(product => <Product
                   key={product.id}
                   product={product}
                  //  handleAddToCart={handleAddToCart}
              ></Product>)
          }
         </div>
    </div>
  );
};

export default Topic;