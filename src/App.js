import HomePage from "./Components/Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
