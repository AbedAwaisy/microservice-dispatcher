import React from 'react';

function PreviewProductComponent({ product }) {
  return (
    <div>
      <h4>Product Preview</h4>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default PreviewProductComponent;
