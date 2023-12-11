import Image from 'next/image'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Slides from '@/components/Slides'
import { Zoom } from 'react-reveal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/Footer'



export default function Home() {
return(
  <>
  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <Header></Header>
    <Zoom>
      <Hero></Hero>
      <About/>
      <Slides/>
      <Footer/>
    </Zoom>
  </>
)
}
