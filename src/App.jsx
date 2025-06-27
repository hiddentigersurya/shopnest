import {Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProductDetails from './components/ProductDetails'
import PageNotFound from './pages/PageNotFound';
import Cart from './pages/Cart';
import User from './pages/User';
import PaginationProvider from './context/PaginationContext';
import './App.css'

function App() {
  return (
    <PaginationProvider>
    <NavBar></NavBar>
    {/* <Home /> */}
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/product/:id" element={<ProductDetails />}></Route>
      <Route path='/user' element={<User />}></Route>
      <Route path="/home" element={<Navigate to="/" />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
    </PaginationProvider>
  )
}

export default App
