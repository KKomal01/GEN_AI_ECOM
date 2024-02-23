import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ProductList = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content : space-around;
  gap: 20px;
  padding:30px 20px;
`;

const ProductCard = styled.div`

  width : 300px;
  height: 350px;
  border: 1px solid grey;
  padding: 10px;
  border-radius: 8px;
`;

const Image = styled.img`
  width:100px;
  height : 100px;
`;

const Title = styled.p`
  margin: 10px 0;
`;

const Price = styled.p`
 
  color: #3498db;
`;

const AddToCartButton = styled.button`
  padding: 5px 15px;
  background-color: black;
  // background-color: #3498db;
  color: white;
  cursor: pointer;
  border-radius:5px;

  // &:hover {
  //   background-color: #2980b9;
  // }
`;

const HomePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert('Item added to cart!');
  };


  return (
    <div>
      {/* <h2>Products</h2> */}
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <div style={{display:'flex',justifyContent:'center'}}>
            <Image src={product.image} alt={product.title} />
            </div>
            <Title style={{height:'100px'}}>{product.title}</Title>
            <Price>${product.price}</Price>
            <div style={{padding:'5px 20px'}}>
            <AddToCartButton onClick={() => handleAddToCart(product)}>Add to Cart</AddToCartButton>
            </div>
          </ProductCard>
        ))}
      </ProductList>
    </div>
  );
};

export default HomePage;
