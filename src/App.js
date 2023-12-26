import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import AllProduct from './AllProduct';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import ProductDetails from './ProductDetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar navPath={{url1:"/", url2:"/allproduct", url3:"/addproduct"}}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/allproduct" element={<AllProduct/>}/>
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path='/updateproduct/:pid' element={<UpdateProduct/>}/>
            <Route path='/product/:pid' element={<ProductDetails/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
