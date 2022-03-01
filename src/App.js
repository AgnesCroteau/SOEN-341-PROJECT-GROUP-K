import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import SignUpPage from "./Components/Pages/SignUpPage";
import LoginPage from "./Components/Pages/LoginPage";
import ItemDetailsPage from "./Components/Pages/ItemDetailsPage";
import ManageProfilePage from "./Components/Pages/ManageProfilePage";

const dummyData = [
  {
    id: "1",
    title: "Isaac Asimov: The Complete Stories, Vol. 1",
    description:
      "Isaac Asimov best work In a world of robots how can we keep on keeping on.",
    price: 9.99,
    img: "isaac_asimov.jpeg",
  },
  {
    id: "2",
    title: "The Little Prince",
    description:
      "The Little Prince is a novella by French aristocrat, writer, and military aviator Antoine de Saint-Exupéry.",
    price: 12.99,
    img: "le_petit_prince.jpg",
  },
  {
    id: "3",
    title: "The Devil Wears Prada",
    description:
      "The Devil Wears Prada is a 2003 novel by Lauren Weisberger about a young woman who is hired as a personal assistant to a powerful fashion magazine editor.",
    price: 12.99,
    img: "the_devil_wears_prada.jpg",
  },
  {
    id: "4",
    title: "Harry Potter and the Philosopher's Stone",
    description:
      "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive.",
    price: 26.99,
    img: "harry_potter_and_philosopher_stone.jpg",
  },
  {
    id: "5",
    title: "The Silent Patient",
    description:
      "The Silent Patient is a 2019 psychological thriller novel written by British–Cypriot author Alex Michaelides.",
      
    price: 23.99,
    img: "the_silent_patient.jpg",
  },
  {
    id: "6",
    title: "1984",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    price: 7.99,
    img: "1984.jpg",
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
          <Route path="/editprofile" element={<ManageProfilePage/>}/>
          {dummyData.map((item) => 
            <Route path={'/item' + item.id} element={<ItemDetailsPage {...item} />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
