import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import SignUpPage from "./Components/Pages/SignUpPage";
import LoginPage from "./Components/Pages/LoginPage";
import ItemDetailsPage from "./Components/Pages/ItemDetailsPage";

const dummyData = [
  {
    id: "1",
    title: "Isaac Asimov: The Complete Stories, Vol. 1",
    description:
      "Isaac Asimov best work In a world of robots how can we keep on keeping on",
    price: 68.9,
    img: "isaac_asimov.jpeg",
  },
  {
    id: "2",
    title: "Isaac Asimov: The Complete Stories, Vol. 1",
    description:
      "Isaac Asimov best work In a world of robots how can we keep on keeping on",
    price: 68.9,
    img: "isaac_asimov.jpeg",
  },
  {
    id: "3",
    title: "Isaac Asimov: The Complete Stories, Vol. 1",
    description:
      "Isaac Asimov best work In a world of robots how can we keep on keeping on",
    price: 68.9,
    img: "isaac_asimov.jpeg",
  },
  {
    id: "4",
    title: "Isaac Asimov: The Complete Stories, Vol. 1",
    description:
      "Isaac Asimov best work In a world of robots how can we keep on keeping on",
    price: 68.9,
    img: "isaac_asimov.jpeg",
  },
  {
    id: "5",
    title: "Isaac Asimov: The Complete Stories, Vol. 1",
    description:
      "Isaac Asimov best work In a world of robots how can we keep on keeping on",
    price: 68.9,
    img: "isaac_asimov.jpeg",
  },
  {
    id: "6",
    title: "1984",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    price: 19.99,
    img: "1984first.jpg",
  },
];

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage items={dummyData} />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          {dummyData.map((item) => 
            <Route path={'/item' + item.id} element={<ItemDetailsPage {...item} />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
