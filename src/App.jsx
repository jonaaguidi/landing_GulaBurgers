import { useEffect } from 'react'
import FOG from "vanta/src/vanta.fog"
import './globals.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {

  useEffect(() => {
    FOG({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 800.00,
      minWidth: 200.00,
      highlightColor: 0x0,
      midtoneColor: 0x0,
      lowlightColor: 0x0,
      baseColor: 0xff0000,
      blurFactor: 0.40,
      speed: 1.4,
      zoom: 1.40
    })
  }, [])

  return (
    <>
      <Navbar />
      <div id='vanta-bg'>
        <Hero />
      </div>
    </>
  )
}

export default App;
