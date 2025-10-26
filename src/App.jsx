import './App.css'
import About from './assets/Components/About/About'
import ContactMe from './assets/Components/Contact Me/ContactMe'
import Footer from './assets/Components/Footer/Footer'
import Hero from './assets/Components/Hero/Hero'
import Navbar from './assets/Components/Navbar/Navbar'
import Portfolio from './assets/Components/Portfolio/Portfolio'

function App() {
  return <>
  <Navbar/>
  <Hero/>
  <Portfolio/>
  <About/>
  <ContactMe/>
  <Footer/>
  </>
}

export default App
