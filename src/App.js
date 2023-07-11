import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Buy from './components/Buy'
import Sell from './components/Sell'
import About from './components/About'
import { useState } from 'react'


function App() {

  const [open, setOpen] = useState(false)


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="buy" element={<Buy />} />
          <Route path="sell" element={<Sell />} />
          <Route path="about" element={<About />} />

        </Route>
      </Routes>    
    </>
  );
}

export default App;
