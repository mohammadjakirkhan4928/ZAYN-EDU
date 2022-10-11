import { attrStringify } from 'daisyui/src/lib/postcss-prefixer/utils';
import React from 'react';
import { Button, Card } from 'react-daisyui';

const Product = ({product,handleAddToCart}) => {
    const {name,logo  }=product
    return (
        <Card {...attrStringify}>
      <Card.Image
        src= {logo}
        alt="Shoes"
      />
      <Card.Body>
        <Card.Title tag="h2">{name}</Card.Title>

        <Card.Actions className="justify-end">
          <Button color="primary" onClick={()=>handleAddToCart(product)}>Start Practice</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
    );
};

export default Product;