import HomePage from "./Components/HomePage";
import Posts from "./Components/Posts";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
