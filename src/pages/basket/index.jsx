import React from 'react';

export const BasketPage = ({ productItems = [] }) => {
  return (
    <div>
      <h1>Basket</h1>
      {productItems.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul>
          {productItems.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt="" />
              <p>{product.name}</p>
              <p>Price: {product.price} $</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
