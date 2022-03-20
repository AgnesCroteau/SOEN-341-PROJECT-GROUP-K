import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import SignUpPage from "./Components/Pages/SignUpPage";
import LoginPage from "./Components/Pages/LoginPage";
import ItemDetailsPage from "./Components/Pages/ItemDetailsPage";
import ManageProfilePage from "./Components/Pages/ManageProfilePage";
import ShoppingCartPage from "./Components/Pages/ShoppingCartPage";
import CustomerOrdersPage from "./Components/Pages/CustomerOrdersPage";

function App() {
  
  const [cart, setCart] = useState([]);
  const [allProducts, setAllProducts] = useState(null);

  // Handle adding and removing items to cart...
  // Still need to implement and test it...

  const handleAddProduct = (product) => {
    const itemExists = cart.find((item) => item._id === product._id);
    if (itemExists) {
        setCart(
            cart.map((item) =>
                item._id === product._id ? { ...itemExists, quantity: itemExists.quantity + 1 } : item)
        );
    } else {
        setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  const handleRemoveProduct = (product) => {
    const itemExists = cart.find((item) => item._id === product._id);
    if (itemExists.quantity === 1) {
        setCart(cart.filter((item) => item._id !== product._id));
    } else {
        setCart(setCart.map((item => item._id === product._id ? { ...itemExists, quantity: itemExists.quantity - 1 }
            : item)))
    }
  }

  useEffect(() => {
      fetch('http://localhost:3001/getAllProducts')
          .then(response =>  response.json() )
              .then(data => setAllProducts(data));
  }, [allProducts]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ allProducts ? <HomePage items={allProducts} /> : <Spinner animation="border" variant="primary" /> } />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/editprofile" element={<ManageProfilePage/>}/>
          <Route path="/cartpage" element={<ShoppingCartPage/>} />
          <Route path="/myorders" element={<CustomerOrdersPage />}/>
          {allProducts && allProducts.map((item) =>
            <Route path={'/item' + item._id} element={<ItemDetailsPage {...item} />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;