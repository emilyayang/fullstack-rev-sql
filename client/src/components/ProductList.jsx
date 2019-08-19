import React from 'react';
import Products from './Products';

const ProductList = (props) => {
  return (
    <div className='product-list'>
      {props.products.map((product, i) => {
        return < Products product={product} index={i} key={i} onProductClick={props.onProductClick} />
      })}
    </div>
  )
}

export default ProductList