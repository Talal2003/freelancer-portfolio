import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './assets/Components/Footer/Footer.jsx'
import Navbar from './assets/Components/Navbar/Navbar.jsx'
import Home from './assets/Components/Home/Home.jsx'
import About from './assets/Components/About/About.jsx'
import ContactMe from './assets/Components/Contact Me/ContactMe.jsx'
import Portfolio from './assets/Components/Portfolio/Portfolio.jsx'

function App() {
  return <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/portfolio" element={<Portfolio />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact-me" element={<ContactMe />}></Route>
  </Routes>
  <Footer />
  </>
}

export default App
