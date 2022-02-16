import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import SignInPage from "./Components/Pages/SignInPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
