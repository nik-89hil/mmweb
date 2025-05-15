
import './App.css'
import { Intro } from './components/Intro'
import { Navbar } from './components/Navbar'
import { Service } from './components/Service'
import { Subscription } from './components/Subscription'
import { Tools } from './components/Tools'
import { Faqans } from './components/Faqans'
import { About } from './components/About'

function App() {


  return (
    <>
      <Navbar />
      <br />
      <Intro />
      <br />
      <Tools />
      <br />
      <Service />
      <br />
      <Subscription />
      <br />
      <Faqans/>
      <br />
      <About/>
      
    </>
  )
}

export default App
