import NavBar from './NavBar';
import Home from "./pages/Home";
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from "./pages/About";
import CodeChambers from "./pages/CodeChambers";
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Helmet>
        <title>Experienced Oxford Developer - UX and SEO friendly web apps</title>
        <meta
          name="description"
          content="Get a modern website for 2024! Experienced Oxford based Software Developer specialising in the design and development of web apps for all devices including Android and IOS, that offer great user experience, account for accessibility, and are SEO friendly."
        />
        <meta
          name="keywords"
          content="Web development Oxford, hybrid app, software developer oxford, HTML, react, CSS, JavaScript, responsive, SQL, free web design tutorial, how to code, easy to learn, learn coding, how do websites work, from scratch"
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
            <Route path="/contact" element={<Contact />}></Route>
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
