import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="bg-[#0f0f0f] text-white overflow-hidden h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
