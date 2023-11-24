
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import WishList from './pages/WishList';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/cart' element={ <Cart/>}></Route>
        <Route path='/wishlist' element={ <WishList/>} ></Route>
      </Routes>
      <Footer/>

    
   
   
    </div>
  );
}

export default App;
