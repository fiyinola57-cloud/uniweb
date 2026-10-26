import { useState } from "react";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Title from "./Components/Title/Title";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

function App() {

  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title = "Our PROGRAM" subTitle = "What We Offer" />
        <Programs />
        <About setPlayState = {setPlayState}/>
        <Title title = "Gallery" subTitle = "Campus Photos"/>
        <Campus/>
        <Title title = "Testimonials" subTitle="What Student Says"/>
        <Testimonials/>
        <Title title = "Contact Us" subTitle = "Get in Touch"/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState = {playState} setPlayState = {setPlayState}/>
    </div>
  );
}

export default App;
