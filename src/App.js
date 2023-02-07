import Navbar from './components/layout/navbar/Navbar'
import Home from './components/sections/home/Home'
import About from './components/sections/about/About'
import Projects from './components/sections/projects/Projects'
import Faqs from './components/sections/faqs/Faqs'
import Contact from './components/sections/contact/Contact'
import Footer from './components/layout/footer/Footer'
import ScrollTop from './components/layout/button/ScrollTop'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Faqs />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
