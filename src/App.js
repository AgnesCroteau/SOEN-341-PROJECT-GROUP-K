import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import SignUpPage from "./Components/Pages/SignUpPage";
import LoginPage from "./Components/Pages/LoginPage";
import ItemDetailsPage from "./Components/Pages/ItemDetailsPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/item" element={<ItemDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
