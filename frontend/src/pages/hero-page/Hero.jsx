import About from "./About"
import HeroMeetings from "./HeroMeetings"
import HeroCase from "./HeroCase"
import HeroBlog from "./HeroBlog"
import Live from "./HeroLive"
import Contact from "./Contact"
import Sample from "../../pages/Smaple"

const Hero = () => {
    return (
      <div>
        <About />
        <hr style={{ border: "1px grey #e0e0e0" }} />
        <HeroMeetings />
        <hr style={{ border: "1px grey #e0e0e0" }} />
        <HeroCase />
        <hr style={{ border: "1px grey #e0e0e0" }} />
        <HeroBlog />
        <hr style={{ border: "1px grey #e0e0e0" }} />
        <Live />
        <hr style={{ border: "1px grey #e0e0e0" }} />
        <Contact />
        {/* <Sample /> */}
      </div>
    )
  }

export default Hero