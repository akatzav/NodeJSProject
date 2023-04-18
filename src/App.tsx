import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import { About } from './components/about/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
