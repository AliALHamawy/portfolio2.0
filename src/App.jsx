import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import 'remixicon/fonts/remixicon.css'
import './App.css'
import { Projects, Contact, Header, Hero, SuggestedProjects, Skills, GoUp, Footer, Project } from './Import.js'
import { ErrorBoundary } from './component/ErrorBoundary.jsx'

function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ErrorBoundary />
            <SuggestedProjects />
            <Skills />
            <Footer />
            <GoUp />

          </>
        } />
        <Route path="/project/:title" element={<Project />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

export default App