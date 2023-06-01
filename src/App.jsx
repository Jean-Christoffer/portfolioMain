
import Hero from "./components/Hero.jsx"
import Contact from "./components/Contact.jsx"
import Projects from "./components/Projects.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation.jsx"







function App() {


  return (
    <>


        <BrowserRouter>
        <Navigation/>
          <Routes>
            <Route path="/" element={<Hero/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
        </BrowserRouter>

    

    </>
  )
}

export default App
