import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'remixicon/fonts/remixicon.css'
import './App.css'
import { Projects, Contact, Header, Hero, LandingProject, SuggestedProjects, Skills, Footer } from './Import.js'
import { ErrorBoundary } from './component/ErrorBoundary.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><ErrorBoundary><LandingProject /></ErrorBoundary><SuggestedProjects /><Skills /><Footer /></>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
