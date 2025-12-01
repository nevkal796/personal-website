import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </div>
  )
}

export default App

