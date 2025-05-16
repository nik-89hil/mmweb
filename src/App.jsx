
import './App.css'
import { Intro } from './components/Intro'
import { Navbar } from './components/Navbar'
import { Service } from './components/Service'
import { Subscription } from './components/Subscription'
import { Tools } from './components/Tools'
import { Faqans } from './components/Faqans'
import { About } from './components/About'
import { Footer } from './components/Footer'

function App() {


  return (
    <>
      <Navbar />
      <br />
      <div id="home">
      <Intro />
      </div>
      <br />
      <div id="toolsAndtecnologies">
        <br />
        <br />
      <Tools />
      </div>
        <br />
        <Service />
      <br />
      <Subscription />
      <br />
      <Faqans/>
      <br />
      
      <div id="about">
      </div>
      <br />
      <About/>
      <br />
      <br />
      <div id="contact"></div>
      <Footer/>
      
    </>
  )
}

export default App
