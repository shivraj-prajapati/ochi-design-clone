import About from "./components/About";
import Eyes from "./components/Eyes";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className='w-full min-h-screen bg-[#F1F1F1]'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
    </div>
  )
}
