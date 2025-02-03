import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Feature from "./components/Feature.jsx"
import Workflow from "./components/Workflow.jsx"
import Pricing from "./components/Pricing.jsx"

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
      </div>

      <Feature />

      <Workflow/>

      <Pricing/>
    </div>
  )
}

export default App
