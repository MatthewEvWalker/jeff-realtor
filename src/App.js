import './App.scss';
import { Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
import Layout from './components/Layout';
import { useState } from 'react'


function App() {

  const [open, setOpen] = useState(false)


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
          {/* <Route index element={<Home />} /> */}

      </Routes>    
    </>
  );
}

export default App;
