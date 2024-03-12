import NavBar from './NavBar';
import Home from "./pages/Home";
import Projects from './pages/Projects';
import Services from "./pages/Services";
import Contact from './pages/Contact';
import About from "./pages/About";
import CodeChambers from "./pages/CodeChambers";
import PostChangingCareer from './pages/PostChangingCareer';
import Footer from './Footer';
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className='main' id='main'>
        <div className='main-container'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/codechambers" element={<CodeChambers />}></Route>
            <Route path="/postchangingcareer" element={<PostChangingCareer />}></Route>
          </Routes>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
