import { useEffect } from 'react';
import './App.css';
import { HomePage } from './components/HomePage/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import { About } from './components/About/About';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/connection/SignUp/SignUp';
import { LogIn } from './components/connection/Sign in/SignIn';
import { Test } from './components/test/Test';
import { NotFound } from './components/Not-Found/NotFound';
import { ShopSection } from './components/HomePage/ShopSection/ShopSection';
import { ProductList } from './pages/productList/ProductList';

function App() {
  return (

    <div className="App">
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path="/Signin" element={<LogIn />} />
        <Route path='/About' element={<ShopSection />} />
        <Route path='/Favoraite' element={<Test />} />
        <Route path='/Products' element={<ProductList/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div> 
  );
}

export default App;
