import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import DetailPost from "./components/DetailPost";
import Post from "./components/Post";
import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<About />} path="/about" />
        <Route element={<DetailPost />} path="/post/:slug" />
        <Route element={<Post />} path="/post" />
      </Routes>
    </HashRouter>
  );
}

export default App;
