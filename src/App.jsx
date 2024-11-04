import { Route, Routes } from "react-router-dom";
import Cards from "./pages/Cards";
import Settings from "./pages/Settings";
import CardInfo from "./pages/CardInfo";
import AddCard from "./pages/AddCard";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cards />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/addcard" element={<AddCard />}></Route>
        <Route path="/card/:id" element={<CardInfo />}></Route>
      </Routes>
    </>
  );
}
