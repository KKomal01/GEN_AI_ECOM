import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  background-color: #333;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const CartIcon = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const ItemCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px;
`;

const Navbar = ({ cartItems }) => {
  const cartItemCount = cartItems.length;

  return (
    <NavbarWrapper>
      <logo>E-Commerce</logo>
      <div style={{display:'flex' , justifyContent:'left'}}>

      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/register">Register</NavbarLink>
      <NavbarLink to="/login">Login</NavbarLink>
      <NavbarLink to="/cart">
        <CartIcon>
          🛒
          {cartItemCount > 0 && <ItemCount>{cartItemCount}</ItemCount>}
        </CartIcon>
      </NavbarLink>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
