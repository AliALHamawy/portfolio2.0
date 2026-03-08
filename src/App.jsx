import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'remixicon/fonts/remixicon.css'
import './App.css'
import Projects from './component/Projects/Projects'
import Contact from './component/Contact/Contact'
import Header from './component/Header/Header'
import Hero from './component/Hero/Hero'
import LandingProject from './component/Landing-Projects/LandingProject'
import SuggestedProjects from './component/Suggested-Projects/SuggestedProjects'
import Skills from './component/Skills/Skills'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><LandingProject /><SuggestedProjects /><Skills /></>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
