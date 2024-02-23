import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import Registration from './Components/Registration';
import Login from './Components/Login';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Home';
import Footer from './Components/Footer';
import Cart from './Components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
   <>
   <Router>
   <Navbar cartItems={cartItems} />
      {/* <Navbar/> */}
      <Routes>
        <Route path="/"  exact element={<HomePage addToCart={addToCart} />}/>
        
 
      <Route  path="/register" element={<Registration/>} />
          <Route  path="/login"  element={<Login/>} />
        {/*<Route path="/product/:id" component={<ProductDetail/>} /> */}
          <Route path="/cart" element ={<Cart cartItems={cartItems} />}>
            
          </Route> 
      </Routes>
      </Router>
      <Footer/>
   </>
  
  );
};

export default App;
