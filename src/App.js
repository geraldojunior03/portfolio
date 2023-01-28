import Navbar from './components/layout/navbar/Navbar'
import Home from './components/sections/home/Home'
import FloatingNav from './components/layout/floating_nav/FloatingNav'
import About from './components/sections/about/About'
import Services from './components/sections/services/Services'
import Projects from './components/sections/projects/Projects'
import Faqs from './components/sections/faqs/Faqs'
import Contact from './components/sections/contact/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <FloatingNav />
      <About /> */}
    </>
  );
}

export default App;
