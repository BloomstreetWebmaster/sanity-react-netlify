import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import DetailPost from "./components/DetailPost";
import Post from "./components/Post";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<About />} path="/about" />
        <Route element={<DetailPost />} path="/post/:slug" />
        <Route element={<Post />} path="/post" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
