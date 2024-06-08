import { Body } from "./Components/Body"
import { Body2 } from "./Components/Body2"
import { Caracteristicas } from "./Components/Caracteristicas"
import { Footer } from "./Components/Footer"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <section className="is-light">
        <Hero />
        <Body />
        <Caracteristicas />
        <Body2 />
      </section>
      <Footer />
    </>
  )
}

export default App
