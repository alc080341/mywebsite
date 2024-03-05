import NavBar from './NavBar';
import Home from "./pages/Home";
import Projects from './pages/Projects';
import About from "./pages/About";
import CodeChambers from "./pages/CodeChambers";
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Helmet>
        <title>Chambers Creative | Affordable Oxford Web Development</title>
        <meta
          name="description"
          content="Experienced Software Developer specialising in the design and development of valuable web-based solutions, both independently and in a commercial environment. Home to Code Chambers - learn HTML and coding for the web."
        />
        <meta
          name="keywords"
          content="Web development Oxford, software developer oxford, HTML, react, CSS, JavaScript, responsive, SQL, free web design tutorial, how to code, easy to learn, learn coding, how do websites work, from scratch"
        />
      </Helmet>
      <header>
        <NavBar />
      </header>
      <main className='main'>
        <div className='main-container'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/codechambers" element={<CodeChambers />}></Route>
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
