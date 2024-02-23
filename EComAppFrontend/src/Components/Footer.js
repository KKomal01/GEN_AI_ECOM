import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
width:100%;
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  position : fixed;
  bottom:0;
`;

const Footer = () => {
  return <FooterWrapper>&copy; 2024 Your E-commerce Website</FooterWrapper>;
};

export default Footer;
