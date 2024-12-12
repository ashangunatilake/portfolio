import styles from './App.module.css';
import About from './components/About/About';
import Certifications from './components/Certifications/Certifications';
import Competitions from './components/Competitions/Competitions';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Introduction from './components/Introduction/Introduction';
import { Navbar } from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Introduction/>
      <About/>
      <Education/>
      <Certifications/>
      <Competitions/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
