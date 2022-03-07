import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import SignUpPage from "./Components/Pages/SignUpPage";
import LoginPage from "./Components/Pages/LoginPage";
import ItemDetailsPage from "./Components/Pages/ItemDetailsPage";
import ManageProfilePage from "./Components/Pages/ManageProfilePage";

function App() {

  const [allProducts, setAllProducts] = useState(null);

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
          {allProducts && allProducts.map((item) => 
            <Route path={'/item' + item.id} element={<ItemDetailsPage {...item} />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
