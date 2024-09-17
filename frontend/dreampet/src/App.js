import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sales } from './Pages/Sales';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assest/banner_mens.png'
import women_banner from './Components/Assest/banner_women.png'
import kid_banner from './Components/Assest/banner_kids.png'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Sales />} />
                    <Route path='/Dogs' element={<ShopCategory banner={men_banner} category="Dogs" />} />
                    <Route path='/Cats' element={<ShopCategory banner={women_banner} category="Cats" />} />
                    <Route path='/Food' element={<ShopCategory banner={kid_banner} category="Food" />} />
                    <Route path='/Accessories' element={<ShopCategory category="Accessories" />} />
                    <Route path='/Medicine' element={<ShopCategory category="Medicine" />} />
                    <Route path='/Product' element={<Product />} />
                    <Route path=':productId' element={<Product />} />
                    <Route/>
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/login' element={<LoginSignup />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
