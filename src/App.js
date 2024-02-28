import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home1 from './pages/home/Home1';
import List from './pages/list/List';
import Hotels from './pages/hotel/Hotels';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home1/>}/>
      <Route path='/hotels' element={<List/>}/>
      <Route path='/hotels/:id' element={<Hotels/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
