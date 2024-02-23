import React from 'react';
import styled from 'styled-components';

const CartPageWrapper = styled.div`
  text-align: center;
`;

const CartItem = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveButton = styled.button`
//   background-color: #e74c3c;
background-color: red;
  color: white;
  padding: 5px;
  margin-left: 5px;
  cursor: pointer;
  border-radius:5px;

  
`;

const ProceedToBuyButton = styled.button`
  background-color: black;
  color: white;
  padding: 8px;
  width: 100px;
  cursor: pointer;
  border-radius: 5px;
`;

const Cart = ({ cartItems }) => {
  return (
    <CartPageWrapper>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id}>
            <div>
              <strong>{item.title}</strong>
              <p>${item.price}</p>
            </div>
            <RemoveButton>Remove</RemoveButton>
          </CartItem>
        ))
      )}
      <ProceedToBuyButton>Buy</ProceedToBuyButton>
    </CartPageWrapper>
  );
};

export default Cart;
