
import './App.css'
import Header from "./Components/header/Header.jsx"
import About from './Components/About/about.jsx'
import Experience from './Components/experience/experience.jsx'
import Services from "./Components/services/services.jsx"
import Portfolio from "./Components/portfolio/portfolio.jsx"
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Contacts from './Components/contact/contacts.jsx'
import Nav from './Components/nav/Nav.jsx'




function App() {


  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contacts/>
      <Nav></Nav>
      
    </>
  )
}

export default App
