// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/Shop' element={<Shop></Shop>}></Route>
        <Route path='/Orders' element={<Orders></Orders>}></Route>
        <Route path='/Inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/About' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
