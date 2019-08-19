import React from 'react';

const Products = (props) => {
  return (
    <div className='product-list-entry'>
      <img src={props.product.image} />
      <div onClick={() => props.onProductClick(props.index)}>
        <p> {props.product.item}</p>
        <label>Current Bid:</label><span> {props.product.curr_bid}</span>
        <p>Item ends in {props.product.ends_in} day(s)</p>
      </div>
    </div>
  )
}

export default Products