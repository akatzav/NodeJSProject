import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import { About } from './components/about/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
