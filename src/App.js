import React from "react"
import "./App.scss"
import ToolbarLayout from "./components/ToolbarLayout/ToolbarLayout"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Gallery from "./components/Gallery/Gallery"
import Contact from "./components/Contact/Contact"

const App = () => {
  return (
    <React.Fragment>
      <ToolbarLayout />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default App
