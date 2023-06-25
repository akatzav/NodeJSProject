import { useEffect, useState } from 'react';
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
import { Search } from './components/search/Search';
import { ItemProduct } from './pages/itemProduct/ItemProduct';
import { AddProduct } from './pages/addProduct/AddProduct';
import { Tutorial } from './pages/tutorial/Tutorial';

function App() {

  const [user, setUser] = useState<any>(null)
  console.log('user', user);


  return (

    <div className="App">
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path="/Signin" element={<LogIn setUser={setUser} />} />
        <Route path='/About' element={<ShopSection />} />
        <Route path='/Favoraite' element={<Test />} />
        <Route path='/Products' element={<ProductList user={user} />} />
        <Route path='/Products/:id' element={<ItemProduct />} />
        <Route path='/products/add' element={<AddProduct />} />
        <Route path='/tutorials/:id' element={<Tutorial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
