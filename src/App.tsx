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
import { Footer } from './components/Footer/Footer';
import { EditProduct } from './pages/editProduct.tsx/EditProduct';
import { Filter } from './components/filter/Filter';

function App() {

  const [user, setUser] = useState<any>(null)
  const [ready, setReady] = useState(false)
  console.log('user', user);

  useEffect(() => {
    fetch('http://localhost:3001/api/auth/current', {
      headers: {
        'x-auth-token': localStorage.getItem('accessToken') ?? '',
        'Content-Type': 'application/json',

      }
    }).then(async res => {
      console.log(res)
      if (!res.ok) return setReady(true)


      const body = await res.json()
      setUser(body)
      setReady(true)
    })

  }, [])

  if (!ready) {
    return <div>loading...</div>
  }


  return (

    <div className="App">

      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path="/Signin" element={<LogIn setUser={setUser} />} />
        <Route path='/About' element={<About />} />
        <Route path='/Favoraite' element={<Test />} />
        <Route path='/Products' element={<ProductList user={user} />} />
        <Route path='/Products/:id' element={<ItemProduct />} />
        <Route path='/products/add' element={<AddProduct user={user} />} />
        <Route path='/update/:id' element={<EditProduct />} />
        <Route path='/Filter' element={<Filter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/*  <Footer /> */}
    </div>
  );
}

export default App;
