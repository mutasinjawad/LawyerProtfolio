import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/hero-page/Hero"

export default function App() {

  const [lockScroll, setLockScroll] = useState(false)
  const onNavActive = (mobileDraweState) => {
    setLockScroll(mobileDraweState)
  }

  useEffect(() => {
    if (lockScroll) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [lockScroll]);

  return (
    <div >
      <Navbar navActive={onNavActive}/>
      <Hero />
    </div>
  )
}