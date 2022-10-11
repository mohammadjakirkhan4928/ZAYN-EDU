
import React, { useContext } from 'react';
import { ProductContext } from '../../layout/Main';
import Product from '../Product/Product';

const Topic = () => {
const products = useContext(ProductContext);
console.log(products);

const handleAddToCart =(product)=>{
  console.log(handleAddToCart)
}

  return (
    <div className='px-4 py-16 mx-auto'>
         <div className='grid gap-3 row-gap-5'>
          {
              products.map(product => <Product
                   key={product.id}
                   product={product}
                   handleAddToCart={handleAddToCart}
              ></Product>)
          }
         </div>
    </div>
  );
};

export default Topic;