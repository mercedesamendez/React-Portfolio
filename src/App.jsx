import './styles/App.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App;
