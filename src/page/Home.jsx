import React from 'react'
import HeroSection from '../Components/HeroSection'
import ConnectWithUs from '../Components/ConnectWithUs'
import AboutUs from '../Components/AboutUs'
import OurService from '../Components/OurService'
import MyProject from '../Components/MyProject'
import Skills from '../Components/Skills'
import GetInTouch from '../Components/GetInTouch'
import Footer from '../Components/Footer'
function Home() {
  return (
    <main className="bg-[#150029] relative w-full">
      <HeroSection />
      <ConnectWithUs />
      <AboutUs />
      <OurService />
      <Skills />
      <MyProject />
      <GetInTouch />
      <Footer />
    </main>
  );
}

export default Home