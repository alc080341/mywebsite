import NavBar from './NavBar';
import Home from "./pages/Home";
import Projects from './pages/Projects';
import About from "./pages/About";
import CodeChambers from "./pages/CodeChambers";
import Footer from './Footer';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className='main'>
        <div className='main-container'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/blog" element={<CodeChambers />}></Route>
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
