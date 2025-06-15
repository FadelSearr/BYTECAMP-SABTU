
import About from "./components/About"
import Home from "./components/Home"
import Testimonials from "./components/Testimonials"
import Work from "./components/Work"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <Home />

      <About />

      <Work />

      <Testimonials />

      <Contact />
    </div>
  )
}

export default App