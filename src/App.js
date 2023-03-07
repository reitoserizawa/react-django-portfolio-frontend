import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import WorkPage from "./components/WorkPage/WorkPage";
import Blog from "./components/Blog/Blog";
import BlogPage from "./components/BlogPage/BlogPage";
import Contact from "./components/Contact/Contact";
import Skill from "./components/Skill/Skill";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about_me" element={<About />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/work/:id" element={<WorkPage />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog/:title" element={<BlogPage />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/skills" element={<Skill />} />
      </Routes>
    </>
  );
}

export default App;
