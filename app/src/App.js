import { Toaster } from "react-hot-toast";
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Register } from "./components/Register/Register";
import { Products } from "./components/Products/Products";
import { NotFound } from "./components/NotFound/NotFound";
import { Cart } from "./components/Cart/Cart";
import AboutUs from "./components/AboutUs/AboutUs";
import { Navbar } from './components/Navbar/Navbar';
import { AuthContext } from './components/Contexts/AuthContext';

function App() {
  let [logged, setLogged] = useState(false);
  let [user, setUser] = useState({});

  return (
    <>
      <AuthContext.Provider value={{ logged, setLogged, user, setUser }}>
        <Navbar />

        <Toaster />
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/order" element={<Cart />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </AuthContext.Provider>


    </>
  );
}

export default App;
