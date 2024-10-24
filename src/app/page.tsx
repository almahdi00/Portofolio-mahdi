'use client'
import About from './components/About'
import Contact from './components/Contact'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import MyProjectSection from './components/ProjectSection'

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <MyProjectSection />
      <Contact />
    </div>
  )
}

export default Home